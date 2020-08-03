function renderEduc(doc){
    
    let div = document.createElement('div');
    div.classList.add('ContainerEduc');
    let school=document.createElement('div');
    let degree=document.createElement('div');
    let year_start=document.createElement('div');
    let year_end=document.createElement('div');

    div.setAttribute('data-id',doc.id);
    school.textContent = "School: "+doc.data().school;
    degree.textContent = "Degree: "+doc.data().degree;
    year_start.textContent = "Year Started: "+doc.data().year_start;
    year_end.textContent = "Year Ended: "+doc.data().year_end;



    div.appendChild(school);
    div.appendChild(degree);
    div.appendChild(year_start);
    div.appendChild(year_end);

    document.getElementById('Educ-list').appendChild(div);
}

    db.collection("education").get().then(function(snapshot) {
        snapshot.docs.forEach(function(doc){
            renderEduc(doc);
        })
    }).catch(function(Error){
        console.log(Error)
    })



function renderOrg(doc){

    let org_div = document.createElement('div');
    org_div.classList.add('ContainerOrg');
    let org=document.createElement('div');
    let position=document.createElement('div');
    let org_year_start=document.createElement('div');
    let org_year_end=document.createElement('div');

    org_div.setAttribute('data-id',doc.id);
    org.textContent = "Name: "+doc.data().name;
    position.textContent = "Position: "+doc.data().position;
    org_year_start.textContent = "Year Started: "+doc.data().year_start;
    org_year_end.textContent = "Year Ended: "+doc.data().year_end;



    org_div.appendChild(org);
    org_div.appendChild(position);
    org_div.appendChild(org_year_start);
    org_div.appendChild(org_year_end);

    document.getElementById('Org-list').appendChild(org_div);
}

    db.collection("organizations").get().then(function(snapshot) {
        snapshot.docs.forEach(function(doc){
            renderOrg(doc);
        })
    }).catch(function(Error){
        console.log(Error)
    })

function renderProj(doc){

    let proj_anch = document.createElement('a');
    proj_anch.href=doc.data().Link;
    let proj_div = document.createElement('div');
    proj_div.classList.add('ContainerProj');

    let name=document.createElement('div');
    let proj_year_start=document.createElement('div');
    let proj_year_end=document.createElement('div');

    proj_div.setAttribute('data-id',doc.id);

// INNER HTML METHOD
//    proj_div.innerHTML += "URL/Project: <a href='"+doc.data().Link+"'>"+doc.data().Project+"</a>";
    proj_div.textContent="Project: "+doc.data().Project;
    name.textContent = "Name: "+doc.data().name;
    proj_year_start.textContent = "Year Started: "+doc.data().year_start;
    proj_year_end.textContent = "Year Ended: "+doc.data().year_end;



    proj_div.appendChild(name);
    proj_div.appendChild(proj_year_start);
    proj_div.appendChild(proj_year_end);

    
    proj_anch.appendChild(proj_div);

    document.getElementById('Proj-list').appendChild(proj_anch);
}

    db.collection("works").get().then(function(snapshot) {
        snapshot.docs.forEach(function(doc){
            renderProj(doc);
        })
    }).catch(function(Error){
        console.log(Error)
    })


function rendercontact(doc){

    let con_anch = document.createElement('a');
    con_anch.href=doc.data().contact;
    let con_div = document.createElement('div');
    con_div.classList.add('Containercon');

    let contact=document.createElement('div');
    let name=document.createElement('div');

    con_div.setAttribute('data-id',doc.id);
   
    
    //con_div.innerHTML += " <a href='"+doc.data().contact+"'>"+doc.data().name+"</a>";
    con_div.textContent = doc.data().name;



    con_div.appendChild(name);
    con_anch.appendChild(con_div);

    document.getElementById('cont-list').appendChild(con_anch);
}

    db.collection("Contact").get().then(function(snapshot) {
        snapshot.docs.forEach(function(doc){
            rendercontact(doc);
        })
    }).catch(function(Error){
        console.log(Error)
    })