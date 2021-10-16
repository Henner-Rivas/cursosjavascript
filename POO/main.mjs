/*  
//objeto literal
const natalia={
    name:"Natalia",
    age:20,
    cursosAprobados:[
        "Curos Definito de HTML Y CSS",
        "Cursos practico "
    ],

    aprobarCurso(nuevoCursito){
        this.cursosAprobados.push(nuevoCursito)
    }

};
/* natalia.aprobarCurso("css Grid")
natalia.cursosAprobados.push("Curso de responive disegn")
 */
//PROTOTYPE
/* function Student(name,age,cursosAprobados){
 this.name=name;
 this.age=age;
 this.cursosAprobados=cursosAprobados;
/*  this.aprobarCurso= function(nuevoCursito){
     this.cursosAprobados.push(nuevoCursito)
 } 
}
 
Student.prototype.aprobarCurso=function(nuevoCursito){
    this.cursosAprobados.push(nuevoCursito)
}
/* juanita.aprobarCursos("Curos de unrel ") 
const juanita= new Student(
    "Henner",
     15,
     ["Curos de introduccion a la prudicion",
    "Curso de ingles basico"
    ]);
*/
// PROTOTIPOS CON LA SINTAXIS DE CLASES 
/* 
class student2 {
    constructor({name,
        age,
        facebook,
        intagram,
        cursosAprobados=[]
    }){
        this.name=name;
        this.age=age;
        this.cursosAprobados=cursosAprobados;    
        this.facebook=facebook;
        this.intagram=intagram;
    }

  aprobarCurso(nuevoCursito){
    this.cursosAprobados.push(nuevoCursito)
  }
}

const miguelito=new student2({
    name:"Miguel",
    age:28,
    facebook:"wwwfaceboll",
    intagram:"dfad"
}
)  */
function videoPlay(){
    const urlsSecreta="https://platziSecreta.com"
    console.log("Se esta reproduccion desde la url" + urlsSecreta)
}
function videoStop(){
    const urlsSecreta="https://platziSecreta.com"
    console.log("Pausamos reproduccion desde la url" + urlsSecreta)
}
export class PlatziClass{
    constructor({
        name,
        videoID,
    })
    {
        this.name=name;
        this.videoID=videoID;
    }

    reproducir(){
        videoPlay(this.videoID);
    }
    pausar(){
        videoStop(this.videoID)
    }


}
















class LearningPaths{
    constructor({
      nombrePaths,
      coursesPaths=[]
    })

   { 
    this.nombrePaths=nombrePaths;
    this.coursesPaths=coursesPaths;

}
}

class Course{
    constructor({
      name,
      classes=[]
    })

   { 
    this._name=name;
    this.classes=classes;
}
get name(){
    return this._name}
set name(nuevoNombre){
    if(nuevoNombre==="Curso "){
        console.error("web...no")
    }else{
        
        this._name=nuevoNombre;
    }
 
}
}
class classes{
    constructor(
        {
            name,
    
        }
    )
{    
    this.name=name;

}
}
const claseIntroduccion= new classes({
    name:"Clase introductoria"

})
const cursoProgramacionBasica = new Course({
    name:"Curso gratis de programación Básica ",
    classes:[
        "clase de programacion basica",
        claseIntroduccion
    ]
})

const cursoHtmlDefinitivo = new Course({
    name:"Curso de html definitivo",
    classes:[
        
    ]
})

const cursoGrid = new Course({
    name:"curso de Grid",
    classes:[
        
    ]
})



const escuelaWeb= new LearningPaths({
    nombrePaths:"Escuela de Desarrollo web",
    coursesPaths:[
        cursoProgramacionBasica,
        cursoGrid,
        cursoHtmlDefinitivo,
    ],
})

const escuelaData= new LearningPaths({
    nombrePaths:"Escuela de escuelaData ",
    coursesPaths:[
        cursoProgramacionBasica,
        "Curso php",
        "Curso python",
        
    ],
})


const escuelavgs= new LearningPaths({
    nombrePaths:"Escuela de escuelavgs ",
    coursesPaths:[
        "Curso unix",
        "Curso unreal",
        
    ],
})



class Student{
    constructor({
        name,
        email,
        username,
        twitter=undefined,
        instagram = undefined,
        facebook =undefined,
        approvedCourses=[],
        learningPaths=[]
    })
     { 
        this.name=name;
        this.email=email;
        this.username=username;
        this.socialMedia={
            twitter,
            instagram,
            facebook
        };

        this.approvedCourses=approvedCourses;
        this.learningPaths=learningPaths;
    }

}
const juan2= new Student({
    name:"jose",
    email:"berrio320@gmall",
    username:"username",
    twitter:"jdlsf",
    learningPaths:[
        escuelaWeb,
        escuelaData,
    ]

});

const mateo= new Student({
    name:"mateo",
    email:"mateo@gmall",
    username:"mateo44",
    twitter:"jdlsf",
    learningPaths:[
        escuelaWeb,
        escuelavgs,
    ]
});