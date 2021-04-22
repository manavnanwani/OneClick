$(function() {
    $.getJSON('amazon-file.json', function(data) {
            var tblRow = 
            "<tr>" + "<td class='card-name'>" + "Price" + "</td>" + "<td>" + data.price + "<span class='cross'>"+ data.mrp +"</span>" + "</td>" + "</tr>"+
            "<tr>" + "<td class='card-name'>" + "Savings" + "</td>" + "<td>" + data.savings + "</td>" + "</tr>"+
            "<tr>" + "<td class='card-name'>" + "Rating" + "</td>" + "<td>" + data.rating + "</td>" + "</tr>"
            $(tblRow).appendTo("#amazondata tbody");
            $('#title').text(data.title);
            $('#desc').text(data.desc)
            $('.main-img').attr("src",data.main_img);
            $('#img1').attr("src",data.img1);
            $('#img2').attr("src",data.img2);
            $('#img3').attr("src",data.img3);
            $('#img4').attr("src",data.img4);
            $('#amazon-link').attr("href",data.url);
            $('#amazon-reviews').attr("href",data.url+"#reviewsMedley");
      });
 
 });



// $(document).ready(function(){
//     ("#search-item").click(function(){
//         console.log('hi');
//     });
//   });