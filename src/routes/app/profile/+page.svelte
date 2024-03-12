<script lang="ts">
	import Profile from '$lib/components/profile.svelte';
	import Icon from '@iconify/svelte';
	import type { PageData } from './$types';
	import FormInput from '$lib/components/form-input.svelte';
	import Select from '$lib/components/select.svelte';
	import worldCountries from '$lib/assets/world_countries.json';
	import careers from '$lib/assets/careers.json';
	import type { MouseEventHandler } from 'svelte/elements';
	import { createForm } from 'felte';

	export let data: PageData;
	$: user = data.user;
	$: editable = false;

	function toggleEdit() {
		editable = !editable;
	}

	const { form } = createForm({});
</script>

<div class="grid grid-cols-2 gap-4">
	<div class="p-4">
		<form use:form method="post">
			<div class="mb-4">
				<h3 class="text-3xl font-semibold">{user?.name} {user?.lastName}</h3>
			</div>
			<div class="md:grid grid-cols-3 gap-4">
				{#if editable}
					<FormInput class="block" inputClass="input input-ghost font-semibold " value={user?.name}>
						<div class="label" slot="label">
							<span class="label-text text-gray-500">Nombre</span>
						</div>
					</FormInput>

					<FormInput inputClass="input input-ghost font-semibold" value={user?.lastName}>
						<div class="label" slot="label">
							<span class="label-text text-gray-500">Apellido</span>
						</div>
					</FormInput>
				{/if}
				<FormInput
					inputClass="input input-ghost font-semibold"
					value={user?.profile?.universityId}
					disabled={!editable}
				>
					<div class="label" slot="label">
						<span class="label-text">No Carnet: </span>
					</div>
				</FormInput>
			</div>
			<div class=" md:grid grid-cols-2 gap-4">
				<FormInput
					inputClass="input input-ghost font-semibold"
					value={user?.email}
					disabled={!editable}
				>
					<div class="label" slot="label">
						<span class="label-text f text-gray-500">Correo</span>
					</div>
				</FormInput>
				<FormInput
					inputClass="input input-ghost font-semibold"
					value={user?.profile?.phoneNumber}
					disabled={!editable}
				>
					<div class="label" slot="label">
						<span class="label-text">Telefono</span>
					</div>
				</FormInput>
			</div>
			<div class="md:grid grid-cols-2 gap-5">
				<div class="form-control">
					<div class="label">
						<span class="label-text text-gray-500">Genero</span>
					</div>
					<Select
						name="gender"
						value={user?.profile?.gender}
						options={[
							{ gender: 'Masculino', value: 'MALE' },
							{ gender: 'Femenino', value: 'FEMALE' }
						]}
						descriptor={{ key: 'value', value: 'gender' }}
						title="Seleccione su genero"
						class="lg:select-md sm:select-sm "
						disabled={!editable}
					></Select>
				</div>
				<div class="form-control">
					<div class="label">
						<span class="label-text text-gray-500">Pais</span>
					</div>
					<Select
						value={user?.profile?.nacionality}
						name="country"
						options={worldCountries}
						descriptor={{ key: 'name', value: 'name' }}
						title="Seleccione un pais"
						class="lg:select-md sm:select-sm"
						disabled={!editable}
					></Select>
				</div>
				<div class="md:grid col-span-2 gap-4">
					<div class="form-control">
						<div class="label">
							<span class="label-text text-gray-500">Carrera:</span>
						</div>
						<Select
							value={user?.profile?.career}
							name="career"
							options={careers}
							descriptor={{ key: 'code', value: 'title' }}
							title="Seleccione su Carrera"
							class="lg:select-md sm:select-sm"
							disabled={!editable}
						></Select>
					</div>
				</div>
				<div class="md:grid grid-cols-2 gap-4">
					{#if editable}
						<span class="btn btn-sm btn-ghost" on:click={() => toggleEdit()}>Cancelar</span>
					{/if}
					<button
						class="btn btn-sm btn-primary"
						type="submit"
						on:click={(e) => (editable ? {} : toggleEdit())}
						>{editable ? 'Guardar' : 'Editar'}</button
					>
				</div>
			</div>
		</form>
	</div>
	<div class="p-4 flex justify-center">
		<Icon
			class="self-center"
			icon="mingcute:cube-3d-line"
			width="192"
			height="192"
			style="color: #c2c2c2"
		/>
	</div>
</div>
