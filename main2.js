class Course {
    constructor({
        name,
        clases: [],
    }){
        this.name = name;
        this.clases = clases;
    }
}

const cursoProgBasica = new Course ({
    name: "Curso Gratis de programacion Basica",
});

const cursoDefinitivoHTML = new Course({
    name: "Curso Definitivo de HTML y CSS",
  });
  const cursoPracticoHTML = new Course({
    name: "Curso Practico de HTML y CSS",
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
        }
        this.approvedCoruses = approvedCoruses;
        this.learningPaths = learningPaths;
    }
  }

  const juan3 = new Student({
    name:"juan",
    email: "juand@tmail.com",
    username:"juanxt",
    facebook: "juanjuan",
    learningPaths:[
        escuelaWeb,
        escuelaVgs,
    ],
  });

  const miguelito2 = new Student({
    name: "Miguelito",
    username: "migelitofeliz",
    email: "miguelito@juanito.com",
    instagram: "migelito_feliz",
    learningPaths: [
      escuelaWeb,
      escuelaData,
    ],
  });