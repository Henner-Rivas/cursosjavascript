
class Comment{
    constructor({
        content,
        studentName,
        studentRole="estudiante",
    })
    {
        this.content=content;
        this.studentName=studentName;
        this.studentRole=studentRole;
        this.likes=0;

    }

    publicar(){
      console.log(this.studentName+ "("+this.studentRole+ ")")  
      console.log(this.likes+ "likes");  
        console.log(this.content)
    }

}
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

    publicarComentario(commentContent){
        const comment= new Comment({
            content:commentContent,
            studentName:this.name,

        });

        comment.publicar();
    }

}
class Course{
    constructor({
      name,
      classes=[],
      isFree=false,
      lang="spanish",

    })

   { 
    this._name=name;
    this.classes=classes;
    this.isFree=isFree;
    this.lang=lang;
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
    isFree:true,
    classes:[
        "clase de programacion basica",
        claseIntroduccion
    ]
})

const cursoHtmlDefinitivo = new Course({
    name:"Curso de html definitivo",
    lang:"english",
    classes:[
        
    ]
})

const cursoGrid = new Course({
    name:"curso de Grid",
    lang:"english",

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


class FreeStudent extends Student {
    constructor(props){
        super(props);


    }
    
    approvedCourse(newCourse){
        if(newCourse.isFree){
            this.approvedCourses.push(newCourse)
        }else{
            console.warn("Lo siento no puedes escoger "+this.name+" solo frees")
        }
    }


}

class BasicoStudent extends Student {
    constructor(props){
        super(props);

    }
    approvedCourse(newCourse){
        if(newCourse.lang !== "english"){
            this.approvedCourses.push(newCourse)
        }else{
            console.warn("Lo siento no puedes escoger "+this.name+" eningles")
        }
    }
}

class expertStudent extends Student {
    constructor(props){
        super(props);

    }

    approvedCourse(newCourse){
            this.approvedCourses.push(newCourse)
        
    }
}

class teacherStudent extends Student {
    constructor(props){
        super(props);

    }

    approvedCourse(newCourse){
            this.approvedCourses.push(newCourse)
        
    }

    
    publicarComentario(commentContent){
        const comment= new Comment({
            content:commentContent,
            studentName:this.name,
            studentRole:"profesor",

        });

        comment.publicar();
    }
}


const juan2= new FreeStudent({
    name:"jose",
    email:"berrio320@gmall",
    username:"username",
    twitter:"jdlsf",
    learningPaths:[
        escuelaWeb,
        escuelaData,
    ]

});

const mateo= new BasicoStudent({
    name:"mateo",
    email:"mateo@gmall",
    username:"mateo44",
    twitter:"jdlsf",
    learningPaths:[
        escuelaWeb,
        escuelavgs,
    ]
});


const fredy= new teacherStudent({
    name:"fredy",
    email:"mfredyo@gmall",
    username:"fredy",
    twitter:"fredy",
    learningPaths:[
        escuelaWeb,
        escuelavgs,
    ]
});
