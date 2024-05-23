$.ajax({
    url: "filmes.xml",
    type: "GET",
 dataType: "xml",
 success: function(xml) {
     $(xml).find('filme').each(function () {
         $("div").append(
        `<table border="1" style="float: left; width: 15%; height: 600px;">
         <tr>
          <th><img src="${$(this).find('img').text()}" alt=""></th>
         </tr>
         <tr>
          <th><p>Nome:<br>${$(this).find('nome').text()}</p></th>
         </tr>
          <tr>
           <th><p>Classificação indicativa:<br>${$(this).find('idade').text()}</p></th>
          </tr>
           <tr>
            <th><p>Horario do filme:<br>${$(this).find('horario').text()}</p></th>
           </tr>
          </table>`
        );
     })
 },
 error: function () {
     alert("Error");
 }
})