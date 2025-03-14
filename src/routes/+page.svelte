<script>
    import api from '$lib/calc/calculator.js';
    import divisor from '$lib/calc/divisor';
    import subtractor from '$lib/calc/subtractor';

    api.addition(1,2);
    console.log("SUBTRACTION");
    subtractor.subtraction(6,3);
    console.log("DIVISOR");
    let result = divisor.division(10,0);
    console.log("DIVISOR OK");
    divisor.division(10,5);
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
