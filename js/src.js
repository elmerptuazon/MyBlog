$.Mustache.load('template.html').done(function() {
	$('#headerDemo').mustache('Heads')

	function transitionButton() {
		$('#canvas').empty();
	}

	Path.map('#/login').to(function() {
		$('#canvas').mustache('Login');

		$('#LoginMainForm').submit(function(e) {
			var loginname = $('#LoginName').val();
			var passwordname = $('#LoginPassword').val();
			var convertAnother = JSON.stringify($('#LoginName').val())
			sessionStorage.setItem('Username', convertAnother);
			var retrieveStorage = sessionStorage.getItem('Username');
			var convertType = JSON.parse(retrieveStorage);
			//var signupAjx = $('#LoginMainForm').serialize();
			$.ajax({
					url: 'login.php',
					type: 'post',
					data: {
						uname : loginname,
						pwd : passwordname,
						storagevalue : retrieveStorage
					},
					success: function(responses) {
						if(responses === 'Success') {
							alert('Success');

							window.location.href = '#/loginsuccess';
							
						}
						else {
							alert('Try again');
						}

					}
				});
			e.preventDefault()

		});


	}).exit(transitionButton);

	Path.map('#/loginsuccess').to(function() {
		$('#canvas').mustache('LoginSuccess');
		var retrieveStorage = sessionStorage.getItem('Username');
		(function() { 
		// 	$.ajax({
		// 	url: 'viewdata.php',
		// 	type: 'get',
		// 	data: {
		// 		successusername : retrieveStorage
		// 	},
		// 	dataType: 'json',
		// 		success: function(response) {
		// 			$('#successusername').val(response.username);
		// 			$('#successfirstname').val(response.firstname);
		// 			$('#successlastname').val(response.lastname);
		// 			$('#successgender').val(response.gender);
		// 			$('#successemail').val(response.email);
		// 			$('#successbirthdate').val(response.birthdate);
		// 			$('#successdatemodified').val(response.date_modified);
		// 			$('#successstatus').val(response.status);
		// 		}
		// });
		$.getJSON('viewdata.php',{successusername : retrieveStorage}, function(response) {
			$('#successusername').val(response.username);
			$('#successfirstname').val(response.firstname);
			$('#successlastname').val(response.lastname);
			$('#successgender').val(response.gender);
			$('#successemail').val(response.email);
			$('#successbirthdate').val(response.birthdate);
			$('#successdatemodified').val(response.date_modified);
			$('#successstatus').val(response.status);
		});
		})();

		$('#UpdateThis').click(function() {
					var username = $('#successusername').val();
					var firstname = $('#successfirstname').val();
					var lastname = $('#successlastname').val();
					var gender = $('#successgender').val();
					var email = $('#successemail').val();
					var birthdate = $('#successbirthdate').val();
					var datemodified = $('#successdatemodified').val();
					var status = Number($('#successstatus').val());
			//var updateAjx = $('#PhpUpdateForm').serialize();
			$.ajax({
			url: 'updatedata.php',
			type: 'get',
			data: {
				successusername : username,
				successfirstname : firstname,
				successlastname : lastname,
				successgender : gender,
				successemail : email,
				successbirthdate : birthdate,
				
			},
			success: function(respo) {
				console.log(respo);
				
			},
			error: function(x, k) {
				console.log(x, k);
			}
		});
	});
	
		$('#DeleteThis').click(function() {
			var username = $('#successusername').val();
			//var deleteAjx = $('#PhpUpdateForm').serialize();
			$.ajax({
				url: 'deletedata.php',
				type: 'post',
				data: {
					successusername : username
				},
				success: function(respo) {
					alert('Deleted');
					
				},
				error: function(x, k) {
					console.log(x, k);
				}
			});
		})
}).exit(transitionButton);

	Path.map('#/signup').to(function() {
		$('#canvas').mustache('Signup');
			var arrSample = [];
	var arrDemo = [];
	var checkGender = function() {
							if(document.getElementById('opt1').checked) {
								return true;
							};
								return false
						}
	var selectArray = document.getElementById('allArray');

	function refreshBrowser() {
		alert('Fill out Everything')
		window.location.reload()
	}
	function declareThem() {
		arrDemo[$('#firstname').val()] = 
			{
				Username: $('#firstname').val(),
				Firstname: $('#lastname').val(),
				Lastname: $('#uname').val(),
				Password: $('#pwd').val(),
				Email: $('#email').val(),
				Birthdate: $('#birthdate').val(),
				Gender: checkGender() ? 'Male' : 'Female'
			};
				return arrDemo;
	}

	$('#MainForm').submit(function(e) {
			e.preventDefault();
			for(var i in sessionStorage) {
				var firstNameCheck = $('#firstname').val();
					if(i == firstNameCheck) {
						alert('Username Same')
					}
			}
		declareThem();
			var userNameAjx = $('#firstname').val();
			var firstNameAjx = $('#lastname').val();
			var lastNameAjx = $('#uname').val();
			var passWordAjx = $('#pwd').val();
			var eMailAjx = $('#email').val();
			var bDayAjx = $('#birthdate').val();
			var genderAjx = $('input[name=options]:checked').val();
			var staTus = 1;
			//var loginAjx = $('#MainForm').serialize();
			$.ajax({
				url: 'signup.php',
				type: 'post',
				data: {
					firstnames : userNameAjx,
					lastnames : firstNameAjx,
					unames : lastNameAjx,
					pwds : passWordAjx,
					emails : eMailAjx,
					birthdates : bDayAjx,
					options : genderAjx
				},
				success: function(response) {
					alert(response);
				}
			});

			var showOption = new Option($('#firstname').val());
			showOption.setAttribute('data-description',Object.entries(arrDemo[$('#firstname').val()]));
			selectArray.add(showOption);
				$('#allArray').on('click', function() {
					var $selected = $('#allArray').find(':selected');
					$('#allArrayResult').html($selected.data('description'));
				}).trigger('change');
			
		
		
	});

	function printSelectedVal() {
		$('#o1').val($('#firstname').val());
		$('#o2').val($('#lastname').val());
		$('#o3').val($('#uname').val());
		$('#o4').val($('#pwd').val());
		$('#o5').val(arrDemo.Gender);
		$('#o6').val($('#email').val());
		$('#o7').val($('#birthdate').val());
		var selectedValDemos = $('#allSelect').val();
		$('#selectedValDemo').val(selectedValDemos);
	}
			
		}).exit(transitionButton);

		Path.map('#/forgetpass').to(function() {
			$('#canvas').mustache('Forgetpassword');
		}).exit(transitionButton);

		Path.root('#/login')
		Path.listen();

	});