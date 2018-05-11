$(document).ready(function() {


    document.addEventListener("DOMContentLoaded", function(e) {
        var o = new TimelineMax({ repeat: -1 });
        window.onload = function() {
            var e, n;
            o.add((n = new TimelineMax({ repeat: -1 }), n.to("#ground", 100, { backgroundPosition: "1301px 0px", force3D: !0, rotation: .01, z: .01, autoRound: !1, ease: Linear.easeNone }), n), 0).add((e = new TimelineMax({ repeat: -1 }), e.to("#clouds", 52, { backgroundPosition: "-2247px bottom", force3D: !0, rotation: .01, z: .01, ease: Linear.easeNone }), e), 0).timeScale(.7).progress(1).progress(0).play()
        }
    });




    $('#contact_form').on("submit", function(event) {

        event.preventDefault();

        var errors = [];

        var name = $('#name').val();
        var nameField = $('#name');
        var nameDiv = nameField.parent();

        if (name.length < 3) {

            nameField.addClass('is-invalid');
            nameDiv.addClass('is-invalid').find('small').html('Error');
            nameDiv.find('label').addClass('col-form-label');
            errors.push("1");

        } else {

            nameField.addClass('is-valid').removeClass('is-invalid');
            nameDiv.addClass('is-valid').removeClass('is-invalid').find('small').html('Valid');
            nameDiv.find('label').addClass('col-form-label');

        }

        var email = $('#email').val();
        var emailField = $('#email');
        var emailDiv = emailField.parent();

        if (email.length < 3) {

            emailField.addClass('is-invalid');
            emailDiv.addClass('is-invalid').find('small').html('Error');
            emailDiv.find('label').addClass('col-form-label');
            errors.push("2");

        } else {

            emailField.addClass('is-valid').removeClass('is-invalid');
            emailDiv.addClass('is-valid').removeClass('is-invalid').find('small').html('Valid');
            emailDiv.find('label').addClass('col-form-label');

        }

        var message = $('#message').val();
        var messageField = $('#message');
        var messageDiv = messageField.parent();

        if (name.length < 3) {

            messageField.addClass('is-invalid');
            messageDiv.addClass('is-invalid').find('small').html('Error');
            messageDiv.find('label').addClass('col-form-label');
            errors.push("3");

        } else {

            messageField.addClass('is-valid').removeClass('is-invalid');
            messageDiv.addClass('is-valid').removeClass('is-invalid').find('small').html('Valid');
            messageDiv.find('label').addClass('col-form-label');

        }


        var telefono = $('#telefono').val();
        var telefonoField = $('#telefono');
        var telefonoDiv = telefonoField.parent();

        if (telefono.length < 8) {

            telefonoField.addClass('is-invalid');
            telefonoDiv.addClass('is-invalid').find('small').html('Error');
            telefonoDiv.find('label').addClass('col-form-label');
            errors.push("4");

        } else {

            telefonoField.addClass('is-valid').removeClass('is-invalid');
            telefonoDiv.addClass('is-valid').removeClass('is-invalid').find('small').html('Valid');
            telefonoDiv.find('label').addClass('col-form-label');

        }





        var contact_form = $('#contact_form');
        if (!errors.length > 0) {
            $.ajax({
                type: contact_form.attr('method'),
                url: contact_form.attr('action'),
                data: contact_form.serialize()

            }).done(function(data) {
                var result = data;
                var response = JSON.parse(result);
                $('#output').append(response.message).addClass('d-block').fadeIn();

            });
        }
    });


});