<template>
	<transition name="modal">
		<div class="modal-mask">
			<div class="modal-wrapper">
				<div class="modal-container">
					<div class="modal-header">
						<slot name="header">
							default header
						</slot>
					</div>
					<div class="modal-body">
						<slot name="body">
							default body
						</slot>
					</div>
					<div class="modal-footer">
						<slot name="footer">
							<button class="na-cepi__quests--item__reserve" @click="$emit('close')">
								Подтвердить
							</button>
						</slot>
					</div>
					<slot name="background">
							<img src="/RJuN9U3yoaI.jpg" class="modal-background">
					</slot>
				</div>
				<div class="modal-overlay" @click="$emit('close')"></div>
			</div>
		</div>
	</transition>
</template>


<script>
export default {
	name: 'ReserveModal',
}
</script>
