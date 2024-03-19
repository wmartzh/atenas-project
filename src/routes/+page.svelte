<script>
  let name = '';
  let lastName = '';
  let idNumber = '';
  let email = '';
  let career = '';
  let password = '';
  let role = 'estudiante';
  let gender = 'maculino';

  import Resolucion from "$lib/components/resolucion.svelte";
</script>
<main>
<form class="container" >
    
    <div class="nombre">
      <div class="form-control w-full max-w-xs">
        <label class="label">
          <h1 class="label-text">Nombre</h1>
        </label>
        <input type="text" bind:value={name} placeholder="Escribe aquí" class="input input-bordered w-full max-w-xs" />
      </div>
    
      <div class="apellido">
        <label class="label">
          <h1 class="label-text">Apellido</h1>
        </label>
        <input type="text" bind:value={lastName} placeholder="Escribe aquí" class="input input-bordered w-full max-w-xs" />
      </div>
    </div>


    <div class="email">
      <label class="label">
        <h1 class="label-text">E-mail</h1>
      </label>
      <input type="text" bind:value={email} placeholder="Escribe aquí" class="input input-bordered w-full max-w-xs input-email" />
    </div>

    <div class="carnet">
      <label class="label">
        <h1 class="label-text">Carnet</h1>
      </label>
      <input type="text" bind:value={idNumber} placeholder="Escribe aquí" class="input input-bordered w-full max-w-xs" />
    </div>

    <div class="carrera">
      <label class="label">
        <h1 class="label-text">Carrera</h1>
      </label>
      <select bind:value={career} class="select select-bordered w-full max-w-xs">
        <option disabled selected>Selecciona una carrera</option>
        <option>Ingeniería en Sistemas</option>
        <option>Educacion</option>
        <option>Psicologia</option>
        <option>Teologia</option>
        <option>Administracion</option>
        <option>Enfermeria</option>
      </select>
    </div>

    <label class="rol">
      <h1 class="label-text">Rol</h1>
      <select bind:value={role} class="select select-bordered w-full max-w-xs">
        <option disabled selected>Selecciona un rol</option>
        <option>Estudiante</option>
        <option>Administrador</option>
      </select>
    </label>

    <div class="contraseña">
      <label class="label">
        <h1 class="label-text">Contraseña</h1>
      </label>
      <input type="password" bind:value={password} placeholder="Escribe aquí" class="input input-bordered w-full max-w-xs" />
    </div>



    <div class="genero">
      <label class="label">
        <h1 class="label-text">Género</h1>
      </label>
      <div class="radio-group">
        <label class="radio">
          <input type="radio" bind:group={gender} value="maculino" />
          <span class="radio-mark"></span>
          Maculino
        </label>
        <label class="radio">
          <input type="radio" bind:group={gender} value="femenino" />
          <span class="radio-mark"></span>
          Femenino
        </label>
      </div>
    </div>

    <div class="boton">
      <button type="button" class="text-sm font-semibold leading-6 text-gray-900">Cancelar</button>
      <button type="submit" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Aceptar</button>
    </div>

  </form>
</main>




<style>

main {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60%;
    height: 80%;
  }

  .nombre {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .apellido {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .email {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 3%;
  }

  .carnet {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 3%;
  }

  .carrera {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 3%;
  }

  .rol {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 3%;
  }

  .contraseña {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 3%;
  } 

  .genero {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 3%;
  }

  .boton {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 3%;
  }
</style>
<Resolucion/>

   