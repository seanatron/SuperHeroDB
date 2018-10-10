function getAllHeroes() {
    $.ajax({
        url: "Service/SuperHeroService.svc/GetAllHeroes",
        type: "GET",
        dataType: "JSON",
        success: (result) => {
            heroes = result;
            drawHeroTable(heroes);
        },
        error: (jqxhr, textstatus, errorthrown) => {
            alert('error ' + errorthrown);
        }
    })
}

function addHero() {
    let newHero = {
        "FirstName": $("#addFirstname").val(),
        "LastName": $("#addLastname").val(),
        "HeroName": $("#addHeroname").val(),
        "PlaceOfBirth": $("#addPlaceOfBirth").val(),
        "Combat" : $("#addCombatPoints").val()
    };

    $.ajax({
        url: "Service/SuperHeroService.svc/AddHero",
        type: "POST",
        dataType: "JSON",
        contentType : "application/json",
        data: JSON.stringify(newHero),
        success: (result) => {
            showOverview();
        },
        error: (jqxhr, textstatus, errorthrown) => {
            alert("There was an error adding your hero.");
        }
    })
}

function putHero() {
    updateHero.FirstName = $("#updateFirstname").val();
    updateHero.LastName = $("#updateLastname").val();
    updateHero.HeroName = $("#updateHeroname").val();
    updateHero.PlaceOfBirth = $("#updatePlaceOfBirth").val();
    updateHero.Combat = $("#updateCombatPoints").val();

    $.ajax({
        url: "Service/SuperHeroService.svc/UpdateHero/"+updateHero.Id,
        type: "PUT",
        dataType: "JSON",
        contentType: "application/json",
        data: JSON.stringify(updateHero),
        success: (result) => {
            showOverview();
        },
        error: (jqxhr, textstatus, errorthrown) => {
            alert("There was an error adding your hero.");
        }
    })
}

function deleteHero(id) {
    $.ajax({
        url: "Service/SuperHeroService.svc/DeleteHero/"+id,
        type: "DELETE",
        dataType: "JSON",        
        success: (result) => {
            heroes = result;
            drawHeroTable(heroes);
        },
        error: (jqxhr, textstatus, errorthrown) => {
            alert('error ' + errorthrown);
        }
    })
}