<script lang="ts">
	import Card from '$lib/components/card.svelte';
	import FormInput from '$lib/components/form-input.svelte';
	import Select from '$lib/components/select.svelte';
	import { CrearCuentaSchema } from '$lib/schemas';
	import worldCountries from '$lib/assets/world_countries.json';
	import { createForm } from 'felte';
	import Joi from 'joi';

	const { form, errors } = createForm({
		validate: async (values) => {
			const { error } = CrearCuentaSchema.validate(values, { abortEarly: false });

			if (error) {
				const errors = error.details.reduce(
					(acc: Record<string, any>, err: Joi.ValidationErrorItem) => {
						acc[err?.context?.label as string] = err;
						return acc;
					},
					{}
				);

				return errors;
			}
			return {};
		}
	});
</script>

<div class="hero min-h-screen min-w-screen bg-blue-950">
	<div class="hero-content text-center justify-center">
		<Card class="w-h-screen">
			<div slot="card-body">
				<h1 class="text-2xl font-bold p-4">Registrar Cuenta</h1>
				<form use:form class="p-5" method="post" on:submit|preventDefault action="#">
					<div class="flex flex-row gap-8 mb-4">
						<div class="flex flex-col gap-y-4 w-50">
							<FormInput type="text" name="name">
								<div class="label" slot="label">
									<span class="label-text">Nombre</span>
								</div>
								<div class="label" slot="button-label">
									{#if $errors?.name?.message}
										<span class="label-text-alt text-error">{$errors.name.message}</span>
									{/if}
								</div>
							</FormInput>
							<FormInput type="text" name="email">
								<div class="label" slot="label">
									<span class="label-text">Correo</span>
								</div>
								<div class="label" slot="button-label">
									{#if $errors?.email?.message}
										<span class="label-text-alt text-error">{$errors.email.message}</span>
									{/if}
								</div>
							</FormInput>
							<FormInput type="password" name="password">
								<div class="label" slot="label">
									<span class="label-text">Contraseña</span>
								</div>
								<div class="label" slot="button-label">
									{#if $errors?.password?.message}
										<span class="label-text-alt text-error">{$errors.password.message}</span>
									{/if}
								</div>
							</FormInput>
							<FormInput type="password" name="confirmPassword">
								<div class="label" slot="label">
									<span class="label-text">Confirmar Contraseña</span>
								</div>
								<div class="label" slot="button-label">
									{#if $errors?.confirmPassword?.message}
										<span class="label-text-alt text-error"
											>{$errors.confirmPassword.type === 'any.only'
												? 'Contraseña no coincide'
												: 'Contraseña invalida'}</span
										>
									{/if}
								</div>
							</FormInput>
							<FormInput type="text" name="phoneNumber">
								<div class="label" slot="label">
									<span class="label-text">Telefono</span>
								</div>
								<div class="label" slot="button-label">
									{#if $errors?.phoneNumber?.message}
										<span class="label-text-alt text-error">{$errors.phoneNumber.message}</span>
									{/if}
								</div>
							</FormInput>
						</div>
						<div class="flex flex-col gap-y-4 w-50">
							<FormInput type="text" name="lastName">
								<div class="label" slot="label">
									<span class="label-text">Last Name</span>
								</div>
								<div class="label" slot="button-label">
									{#if $errors?.lastName?.message}
										<span class="label-text-alt text-error">{$errors.lastName.message}</span>
									{/if}
								</div>
							</FormInput>
							<FormInput type="text" name="identification">
								<div class="label" slot="label">
									<span class="label-text">Identificacion</span>
								</div>
								<div class="label" slot="button-label">
									{#if $errors?.identification?.message}
										<span class="label-text-alt text-error">{$errors.identification.message}</span>
									{/if}
								</div>
							</FormInput>
							<FormInput type="text" name="universityId">
								<div class="label" slot="label">
									<span class="label-text">No. Carnet</span>
								</div>
								<div class="label" slot="button-label">
									{#if $errors?.universityId?.message}
										<span class="label-text-alt text-error">{$errors.universityId.message}</span>
									{/if}
								</div>
							</FormInput>
							<div class="form-control">
								<div class="label">
									<span class="label-text">Pais</span>
								</div>
								<Select
									name="country"
									options={worldCountries}
									descriptor={{ key: 'name', value: 'name' }}
									title="Seleccione un pais"
									class="lg:select-md sm:select-sm sm:w-2/3"
								></Select>
								<div class="label">
									{#if $errors?.country?.message}
										<span class="label-text-alt text-error">{$errors.country.message}</span>
									{/if}
								</div>
							</div>
							<div class="form-control">
								<div class="label">
									<span class="label-text">Genero</span>
								</div>
								<Select
									name="gender"
									options={[
										{ gender: 'Masculino', value: 'MALE' },
										{ gender: 'Femenino', value: 'FEMALE' }
									]}
									descriptor={{ key: 'value', value: 'gender' }}
									title="Seleccione su genero"
									class="lg:select-md sm:select-sm sm:w-2/3"
								></Select>
								<div class="label">
									{#if $errors?.gender?.message}
										<span class="label-text-alt text-error">{$errors.gender.message}</span>
									{/if}
								</div>
							</div>
						</div>
					</div>
					<div class="flex-row">
						<button class="btn btn-success text-white" type="submit">Registrarse</button>
					</div>
				</form>
			</div>
		</Card>
	</div>
</div>
