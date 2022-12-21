class Comment {
  constructor({
    content,
    stundentName,
    studentRole = "estudiante",
  }){
    this.content = content;
    this.studentName= stundentName;
    this.studentRole= studentRole;
    this.likes = 0;

  }
   publicar(){
    console.log(this.studentName + " (" + this.studentRole + ")");
    console.log(this.likes + "likes");
    console.log(this.content);
   }
  

}

function videoPlay(id)
  {const urlSecreta="https://platziultrasecretomasquelanasa.com/"+id;
  console.log("Se está reproduciendo desde la url "+urlSecreta);
}

function videoStop(id)
  {const urlSecreta="https://platziultrasecretomasquelanasa.com/"+id;
  console.log("Pausamos la url "+urlSecreta);
}



class PlatziClass{
  constructor({name,videoID,})
    {this.name=name;
    this.videoID=videoID;}

    

  reproducir(){videoPlay(this.videoID);}
  pausar(){videoStop(this.videoID);}
}


class Course{
    constructor({name,
      clases= [],
      isFree= false,
      lang="spanish",
     })
     
     {
        this._name = name;
        this.clases = clases;
        this.isFree= isFree;
        this.lang= lang;
    }

    get name(){
        return this._name; 
    }

    set name(nuevoNombre){
        if (nuevoNombre === "curso"){
            console.error("no");
        }else{
         this._name =nuevoNombre;
        }
        
    }
}

const cursoProgBasica = new Course ({
    name: "Curso Gratis de programacion Basica",
    isFree: true,

});

const cursoDefinitivoHTML = new Course({
    name: "Curso Definitivo de HTML y CSS",
  });
  const cursoPracticoHTML = new Course({
    name: "Curso Practico de HTML y CSS",
    lang: "english",
  });

  class LearningPath {
    constructor({
        name, 
        courses=[],
    }){
        this.name = name;
        this.courses = courses;

    }
  }

  const escuelaWeb = new LearningPath({
    name:"Escuela de Desarrollo Web",
    courses:[
        cursoProgBasica,
        cursoDefinitivoHTML,
        cursoDefinitivoHTML,
    ],
  });

  const escuelaData = new LearningPath({
    name: "Escuela de Data Science",
    courses: [
      cursoProgBasica,
      "Curso DataBusiness",
      "Curso Dataviz",
    ],
  });
  
  const escuelaVgs = new LearningPath({
    name: "Escuela de Vidweojuegos",
    courses: [
      cursoProgBasica,
      "Curso de Unity",
      "Curso de Unreal",
    ],
  });

  class Student {
    constructor({
        name,
        email,
        username,
        twiter= undefined,
        instagram= undefined,
        facebook = undefined,
        approvedCoruses = [],
        learningPaths = [],
    }) {
        this.name = name;
        this.email = email;
        this.username = username;
        this.socialmedia = {
            twiter,
            instagram,
            facebook,
        };
        this.approvedCoruses = approvedCoruses;
        this.learningPaths = learningPaths;
                
    }
    pblicarComentario(commentContent) {
      const comment = new Comment({
        content: commentContent,
        stundentName:this.name,

      });
      comment.publicar();
      
    }
  }

  class FreeStudent extends Student {
    constructor(prop){
      super(prop);
    }
    approvedCoruses(newCourse){
      if (newCourse.isFree){
        this.approvedCoruses.push(newCourse);

      }else{
        console.warn("lo sentimos, " + this.name + ", no puedes tener cursos abiertos");
      }
    }
  }

  class BasicStudent extends Student{
    constructor(prop){
      super(prop);
    }
    approvedCoruses(newCourse){
      if(newCourse.lang !== "english"){
        this.approvedCoruses.push(newCourse);

      }else{
        console.warn("Lo sentimos, " + this.name + ", no puedes tomar cursos en inglés");

      }
    }
  }

  class ExpertStudent extends Student{
    constructor(prop){
      super(prop);
    }
    approvedCoruses(newCourse){
      this.approvedCoruses.push(newCourse);
    }
  }

  class TeacherStudent extends Student {
    constructor(props) {
      super(props);
    }
  
    approveCourse(newCourse) {
      this.approvedCourses.push(newCourse);
    }
  
    publicarComentario(commentContent) {
      const comment = new Comment({
        content: commentContent,
        studentName: this.name,
        studentRole: "profesor",
      });
      comment.publicar();
    }
  }

  const juan = new FreeStudent({
    name: "JuanDC",
    username: "juandc",
    email: "juanito@juanito.com",
    twitter: "fjuandc",
    learningPaths: [
      escuelaWeb,
      escuelaVgs,
    ],
  });
  
  const miguelito = new BasicStudent({
    name: "Miguelito",
    username: "migelitofeliz",
    email: "miguelito@juanito.com",
    instagram: "migelito_feliz",
    learningPaths: [
      escuelaWeb,
      escuelaData,
    ],
  });
  
  const freddy = new TeacherStudent({
    name: "Freddy Vega",
    username: "freddier",
    email: "f@gep.com",
    instagram: "freddiervega",
  });