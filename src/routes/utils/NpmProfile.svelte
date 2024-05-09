<script>
	import { Card } from 'svelte-5-ui-lib';
	const cardHeight = 'h-40';
  const badgeSize = '150'
</script>

<div class="flex items-center gap-4 max-w-lg mx-auto my-10">
	<Card href="https://www.npmjs.com/~shinichiokada" padding="none" class="dark:hover:shadow-lg-light max-w-lg hover:shadow-lg dark:bg-sky-950 dark:hover:bg-sky-900">
		<div class="flex items-center justify-center {cardHeight}">
			<div class="flex items-center justify-center gap-4">
        <img width={badgeSize} alt="NPM Weekly Downloads by package author" src="https://img.shields.io/npm-stat/dw/shinichiokada?color=%23800080">
        <img width={badgeSize} alt="NPM Monthly Downloads by package author" src="https://img.shields.io/npm-stat/dm/shinichiokada?color=%230000ff">
        <img width={badgeSize} alt="NPM Yearly Downloads by package author" src="https://img.shields.io/npm-stat/dy/shinichiokada?color=%23008000">
			</div>
		</div>
	</Card>
</div>