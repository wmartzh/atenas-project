<script lang="ts">
    import Table from "$lib/components/table.svelte";
  
    let data = [
      { id:1,name: "John", lastname: "Lopez", university: "UNADECA",identification: 200549,
        phonenumber: 71054056,nacionality: "Costaricense",gender: "Masculino",
        career: "Teologia",room: 22 },
      { id:2,name: "Juan", lastname: "Castro", university: "MET",identification: 301256,
        phonenumber: 35124986,nacionality: "Colombia",gender: "Femenino",
        career: "Ingenieria Sistemas",room: 33 },
        {id:3, name: "David", lastname: "Morales", university: "UCR",identification: 190345,
        phonenumber: 72560231,nacionality: "CostaRica",gender: "Masculino",
        career: "Derecho",room: 15 },
        {id:4, name: "Ana", lastname: "Campos", university: "TEC",identification: 180285,
        phonenumber: 75412548,nacionality: "Nicaragua",gender: "Femenino",
        career: "Ingenieria Civil",room: 18 },
        {id:5, name: "Luis", lastname: "Vargas", university: "UNA",identification: 220596,
        phonenumber: 35648975,nacionality: "Panama",gender: "Femenino",
        career: "Contabilidad",room: 13 },
        {id:6, name: "Gabriela", lastname: "Jimenes", university: "ULACIT",identification: 240185,
        phonenumber: 32054048,nacionality: "El Salvador",gender: "Femenino",
        career: "Diseño Grafico",room: 31 },
    
        
    ];
  
    let titles = [
      { label: "ID", key: "id" },
      { label: "Name", key: "name" },
      { label: "Last Name", key: "lastname" },
      { label: "University", key: "university" },
      { label: "Identification", key: "identification" },
      { label: "Phone Nmmber", key: "phonenumber" },
      { label: "Nacionality", key: "nacionality" },
      { label: "Gender", key: "gender" },
      { label: "Career", key: "career" },
      { label: "Room", key: "room" },
    ];
  </script>
  
  <Table {data} {titles} />