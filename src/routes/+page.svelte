<script>
  let name = '';
  let lastName = '';
  let idNumber = '';
  let email = '';
  let career = '';
  let password = '';
  let role = 'estudiante';
  let gender = 'maculino';
</script>
<main style="display: flex; align-items: center; justify-content: center; height: 100vh;">
<form>
  <style>
    .form-row {
      display: flex;
    }
  
    .form-control {
      margin-right: 1rem;
    }

    .form-controls {
      width: 160%;
    }
  </style>
  
  <div class="form-row">
    <div class="form-control w-full max-w-xs">
      <label class="label">
        <h1 class="label-text">Nombre</h1>
      </label>
      <input type="text" bind:value={name} placeholder="Escribe aquí" class="input input-bordered w-full max-w-xs" />
    </div>
  
    <div class="form-control w-full max-w-xs">
      <label class="label">
        <h1 class="label-text">Apellido</h1>
      </label>
      <input type="text" bind:value={lastName} placeholder="Escribe aquí" class="input input-bordered w-full max-w-xs" />
    </div>
  </div>


  <div class="form-controls w-full max-w-xs">
    <label class="label">
      <h1 class="label-text">E-mail</h1>
    </label>
    <input type="text" bind:value={email} placeholder="Escribe aquí" class="input input-bordered w-full max-w-xs input-email" />
  </div>

<div class="form-control w-full max-w-xs">
  <label class="label">
    <h1 class="label-text">Carnet</h1>
  </label>
  <input type="text" bind:value={idNumber} placeholder="Escribe aquí" class="input input-bordered w-full max-w-xs" />
</div>

<div class="form-control w-full max-w-xs">
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

<label class="label">
  <h1 class="label-text">Rol</h1>
</label>
<select bind:value={role} class="select select-bordered w-full max-w-xs">
  <option disabled selected>Selecciona un rol</option>
  <option>Estudiante</option>
  <option>Administrador</option>
</select>

<div class="form-control w-full max-w-xs">
  <label class="label">
    <h1 class="label-text">Contraseña</h1>
  </label>
  <input type="password" bind:value={password} placeholder="Escribe aquí" class="input input-bordered w-full max-w-xs" />
</div>



<div class="form-control w-full max-w-xs">
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

<div class="mt-6 flex items-center justify-end gap-x-6">
  <button type="button" class="text-sm font-semibold leading-6 text-gray-900">Cancelar</button>
  <button type="submit" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Aceptar</button>
</div>

</form>
</main>


   