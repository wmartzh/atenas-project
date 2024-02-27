<script>
 
let genero = ["Masculino","Femenino"]
let radio = ""



</script>


<div class="">
   
  <div class="w-24 rounded-full">
    <h1  class = "font-family: Segoe UI"> ATENAS </h1>
  </div>
  <span class="hero-content text-center box-decoration-clone bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2 ..." >
    <label class="btn btn-circle swap swap-rotate">
  
   
      <input type="checkbox" />
      
      
      <svg class="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="58" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg>
      
      
      <svg class="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/></svg>
      
    </label>
    <br>CREATE ACCOUNT</span>
    
</div>




<div class="hero min-h-screen bg-base-200">
  <div class="hero-content text-center">
    <div class="max-w-md">
      
 

      <div>
        <h2>Carnet</h2>
      <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
         </div> 
     
      <div>
        <h2>Nombres</h2>
      <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
         </div> 

         <div>
          <h2>Apellidos</h2>
        <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
           </div> 

           <div>
            <h2>Rol</h2>
            <select class="select select-bordered w-full max-w-xs">
              <option disabled selected></option>
              <option>Administrador</option>
              <option>Estudiante</option>
            </select>
             </div> 
      
           <div>
            <h2>Email</h2>
          <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
             </div>   

             <div>
              <h2>Contraseña</h2>
            <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
               </div> 
               
               <div>
                <h2>Genero</h2>
                {#each genero  as generos }
                <input type="radio" value="{generos}" bind:group={radio} > {genero}
                {/each }
               
                  
                  </div>


               <button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Confirmar</button>

    </div>
  </div>
</div>

