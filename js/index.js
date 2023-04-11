    let Pokemon = 0;

    function Brice() {
      Pokemon = Pokemon + 1;
      console.log(Pokemon);

      document.querySelector(".FEMME").innerHTML = Pokemon;
    }

    document.querySelector(".morice").addEventListener("click", Brice);
