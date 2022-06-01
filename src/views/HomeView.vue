<script>
import axios from "axios";
export default {
  data: function () {
    return {
      students: [],
      filteredArray: [],
      studentAvg: "",
    };
  },
  created: function () {
    this.indexStudents();
  },
  methods: {
    indexStudents: function () {
      axios.get("/students").then((response) => {
        console.log("students index", response);
        this.students = response.data.students;
        console.log(this.students);
      });
    },
  },
};
</script>

<template>
  <body>
    <nav class="scroll-container">
      <div class="student-box" v-for="student in this.students" v-bind:key="student.id">
        <div>
          <div class="left-half">
            <img v-bind:src="student.pic" v-bind:alt="student.name" />
          </div>
          <div class="right-half">
            <h2>{{ student.firstName }} {{ student.lastName }}</h2>

            <p>Email: {{ student.email }}</p>
            <p>Company: {{ student.company }}</p>
            <p>Skill: {{ student.skill }}</p>
            <p>
              Average:
              {{
                (Number(student.grades[0]) +
                  Number(student.grades[1]) +
                  Number(student.grades[2]) +
                  Number(student.grades[3]) +
                  Number(student.grades[4]) +
                  Number(student.grades[5]) +
                  Number(student.grades[6]) +
                  Number(student.grades[7])) /
                8
              }}
            </p>
          </div>
        </div>
      </div>
    </nav>
  </body>
</template>

<style>
nav .scroll-container {
  /* display: block; */
  /* margin: 0 auto; */
  text-align: left;
  margin-left: auto;
  margin-right: auto;
}
nav {
  width: 800px;
  padding: 5px;
  position: center;
  border: 1px solid black;
}
.scroll-container {
  width: 1200px;
  height: 700px;
  overflow-y: scroll;
  scroll-behavior: smooth;
}
.home .student-box {
  /* display: inline-block; */
  width: 50px;
  text-decoration: none;
}
.body {
  background-color: grey;
}
.left-half {
  float: left;
  width: 20%;
}
.right-half {
  float: left;
  width: 80%;
}
img {
  /* height: auto;
  border-radius: 50%;
  border-color: black; */
  /* width: 100%;
  height: auto; */
  margin-left: auto;
  margin-right: auto;
}
.column {
  float: left;
}
.left {
  width: 25%;
}
.right {
  width: 75%;
}
</style>
