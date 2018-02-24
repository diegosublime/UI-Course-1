
    var artists = [
        {
            name:"Red Hot Chili Peppers",
            gender:"Alternative",
            year:"1983",
            link:"https://en.wikipedia.org/wiki/Red_Hot_Chili_Peppers"
        },
        {
            name:"smashing pumpkins",
            gender:"Alternative Rock",
            year:"1988",
            link:"https://en.wikipedia.org/wiki/The_Smashing_Pumpkins"
        },
        {
            name:"Offspring",
            gender:"Punk Rock",
            year:"1984",
            link:"https://en.wikipedia.org/wiki/The_Offspring"
        }
        ];
    var foundArtists = [];
    var artistContent="";
     
    var search = function(){
        foundArtists = [];
        artistContent="";
        var searchText = document.querySelector("#searchText").value;  
        artists.forEach(artist => {   
            if(artist.name.toLowerCase().indexOf(searchText.toLowerCase()) !== -1)
            {
                foundArtists.push(artist);
            }
        });
        foundArtists.forEach(artist => {
            artistContent = artistContent +
            `<div class="card " style="width: 18rem;"> 
                    <div class="card-body">
                        <h5 class="card-title">${artist.name}</h5>
                        <p class="card-text">Gender: ${artist.gender}<br> Formed Year: ${artist.year}</p>
                        <a href="${artist.link}" class="btn btn-info">Learn more</a>
                    </div>
                </div>`;
        }); 
        document.querySelector(".artistContainer").innerHTML = artistContent; 
    }
    document.querySelector(".btn-primary").addEventListener("click", search);
 