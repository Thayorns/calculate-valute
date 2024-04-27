
<script lang="ts">
  getValutes()
  
  const rates = {
    USD: 0,
    RUB: 0
  }

  async function getValutes() {
    const res = await fetch('https://open.er-api.com/v6/latest/USD')
    const data = await res.json()

    rates.USD = data.rates.USD
    rates.RUB = data.rates.RUB
    console.log(rates)
  }
  
  let finances = [
		{
			id: 1,
			text: `USD`
		},
		{
			id: 2,
			text: `RUB`
		}
	]
  
  // let count = rates.USD
  // $: calc = count * rates.RUB
	
  let selected1 = finances[0], 
    selected2 = finances[1]
  let input1:number, 
    input2:number
  
  function calculate(source){
    let rate1 = rates[selected2.text]
    let rate2 = rates[selected1.text]
    if(source === 'input1') {
      input2 = (input1 * rate1) / rate2
    }else {input1 = (input2 * rate2) / rate1}
  }
  
</script>


	<select
    bind:value={selected1}
    on:change={() => (input1 = undefined)}
	>
		{#each finances as finance}
			<option value={finance}>
				{finance.text}
			</option>
		{/each}
	</select>
  <input type='number' bind:value={input1} on:input={() => calculate('input1')}>
  <span></span>

  <br/>

	<select
		bind:value={selected2}
    on:change={() => (input2 = undefined)}
	>
		{#each finances as finance}
			<option value={finance}>
				{finance.text}
			</option>
		{/each}
	</select>
  <input type='number' bind:value={input2} on:input={() => calculate('input2')}> 
  <span></span>


