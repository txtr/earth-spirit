var kmlLocation = "kml";
d3.dsv(';', 'data.csv')
    .then(function(data) {
        //var table_data='<div class="panel-group" id="accordion">';
        for (var count = 0; count < data.length; count++) {
            // $( function()
            $("#accordion").accordion({ active: false, collapsible: true });

            var newH3 = document.createElement('h3');
            var newDiv = document.createElement('div');
            var acc = document.getElementById('accordion');
            var number = document.getElementsByTagName('h3').length;

            newH3.innerText = data[count].Name;

            var kml2DPath = 'map.html?icao=' + data[count].Codes + '&name=' + data[count].Name;
            var but2D = document.createElement('a');
            but2D.classList.add("btn", "btn-primary");
            but2D.setAttribute("role", "button");
            but2D.innerText = "Preview in 2D";
            but2D.setAttribute('href', kml2DPath);
            but2D.setAttribute('target', "_blank");

            var but3D = document.createElement('a');
            but3D.classList.add("btn", "btn-primary");
            but3D.setAttribute("role", "button");
            but3D.innerText = "Download in 3D";


            acc.appendChild(newH3);
            acc.appendChild(newDiv);
            newDiv.appendChild(but2D);
            newDiv.appendChild(but3D);
            $("#accordion").accordion("refresh");
        }
    })