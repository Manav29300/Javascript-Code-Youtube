// firstly create a function.
function one(){
    const username = "Manav"

    function  two(){
        const website = "Website"
        console.log(username);
    }
    // console.log(website);

    two()
}

// one()

if(true){
    const username = "Manav"
    if(username === "Manav"){
        const website = " youtube"
        console.log(username + website); 
    }
}



// +++++++++++++++++++++++++++++++++++++++++ interesting +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



function addone(num){
    return num + 1
}

addone(5)

const addTwo = function(num){
    return num + 2
}

addTwo(5)