function isObject(subject) {
    return typeof subject == "object";
  }
  
  function isArray(subject) {
    return Array.isArray(subject);
  }
  
  function deepCopy(subject) {
    let copySubject;
  
    const subjectIsObject = isObject(subject);
    const subjectIsArray = isArray(subject);
  
    if (subjectIsArray) {
      copySubject = [];
    } else if (subjectIsObject) {
      copySubject = {};
    } else {
      return subject;
    }
  
    for (key in subject) {
      const keyIsObject = isObject(subject[key]);
  
      if (keyIsObject) {
        copySubject[key] = deepCopy(subject[key]);
      } else {
        if (subjectIsArray) {
          copySubject.push(subject[key]);
        } else {
          copySubject[key] = subject[key];
        }
      }
    }
  
    return copySubject;
  }
  
  
  function SuperObject() {}
  SuperObject.isObject = function (subject) {
    return typeof subject == "object";
  }
  SuperObject.deepCopy = function (subject) {
    let copySubject;
  
    const subjectIsObject = isObject(subject);
    const subjectIsArray = isArray(subject);
  
    if (subjectIsArray) {
      copySubject = [];
    } else if (subjectIsObject) {
      copySubject = {};
    } else {
      return subject;
    }
  
    for (key in subject) {
      const keyIsObject = isObject(subject[key]);
  
      if (keyIsObject) {
        copySubject[key] = deepCopy(subject[key]);
      } else {
        if (subjectIsArray) {
          copySubject.push(subject[key]);
        } else {
          copySubject[key] = subject[key];
        }
      }
    }
  
    return copySubject;
  }
    
  
  function requiredParam(param) {
    throw new Error(param + " es obligatorio");
  }
  
  function LearningPath({
    name = requiredParam("name"),
    courses = [],
  }) {
    this.name=name;
    this.courses=courses;
  
  
  }


  
  function Student({
    name = requiredParam("name"),
    email = requiredParam("email"),
    age,
    twitter,
    instagram,
    facebook,
    approvedCourses = [],
    learningPaths = [],
  } = {}) {
    const  private = {
      "_name": name,
      "_learningPaths": learningPaths,
    };
  
  
  
    this.learningPaths=learningPaths;
    this.name = name;
    this.email = email;
    this.age = age;
    this.approvedCourses = approvedCourses;
    this.socialMedia = {
      twitter,
      instagram,
      facebook,
    };
    const private2 ={
      "_learningPaths":[],
    }
    Object.defineProperty(this,"learningPaths",
    {
      get(){
      return private2["_learningPaths"];
      },
      set(newLp){
          if (newLp  instanceof LearningPath)   {
            private2["_learningPaths"].push(newLp)
        
         
      }else{
        console.warn("Alguno de los Lps no es instacia del prototipo")
      }
    }
    
    });
  
  
  
      for ( const learningPath in learningPaths) {
      
      this.learningPaths=learningPaths[learningPath] ;
      }
      
    }
    
   const escuelaWeb= new LearningPath({
    name:"Escula de Desarrollo web"
  }) 
  
  const juan =new  Student({ email: "juanito@frijoles.co", name: "Juanito",
   learningPaths:[
    escuelaWeb,
  
   ],
  
  });
  
  
  
  
  
  