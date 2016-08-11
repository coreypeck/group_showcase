$(document).ready(function () {

  $('.container').append(

    '<div class = "person" id = "' + person.name + '"><img src = "' + person.name +
                                '.jpg"/><p class="personName">' + person.name +
                                '<button class = "like"></button></p><p class="biography">'
                                + person.bio + '</div>'


    //append name, bio

  );

//$.ajax({
// type: "POST",
// URL: "/likes/adam",
// success: function(response) {
//
//
        //likes function

// }
//
// $.ajax({
//   type: "GET",
//   url: "/bios/adam",
//   success: function(person) {
//     appendPerson(person);
//   }
//   }
})
})
})




});
