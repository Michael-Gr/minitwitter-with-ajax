$(document).on("turbolinks:load", function() {
  $('#user').on('change', function(event) {
    var user_id = $(this).val()
    $.ajax({ url: '/tweets#index',
             data: { user: user_id },
             dataType: 'script'
    })
  })
})
