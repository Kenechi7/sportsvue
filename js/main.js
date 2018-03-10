// const is a variable in JavaScript that I am using for the first time.
// Go Bears! Go Warriors!
const basketball = {
	template: `<div>
				  	<h1>Basketball</h1>
					<img src="img/basketball.png">
					<p>Basketball was my favorite sport to play as a kid!
					I love watching basketball on TV as well. My favorite NCAA team
					is UC Berkeley, while my favorite NBA team is the Golden 
					State Warriors.</p>
			  </div>`
}
// Go Bears! Go Niners!
const football = {
	template: `<div>
					<h1>Football</h1>
					<img src="img/football.png">
					<p>I enjoyed played football as a kid too, even though we didn't
					play tackle football. Football is my favorite sport to watch on 
					television. My favorite NCAA team is Cal and my favorite NFL team 
					is the San Francisco 49ers!</p>
			   </div>`
}
// Go Nigeria! Go USA!
const soccer = {
	template: `<div>
					<h1>Soccer</h1>
					<img src="img/soccer.png">
					<p>My first real experience playing soccer (or football, as most of 
					the world knows it to be called), occurred when I was a youth in Nigeria.
					While I Nigeria, I really developed a love for the beautiful game!
					My favorite soccer (football) teams are Nigeria and the U.S.A.</p>
			   </div>`
}
// Go Giants!
const baseball = {
	template: `<div>
					<h1>Baseball</h1>
					<img src="img/baseball.png">
					<p>Baseball is my favorite spectator sport! I love going to a game with
					friends to people watch and enjoy the food and scenery. My favorite 
					baseball team is the San Francisco Giants!</p>
			   </div>`
}
// No injuries!
const rugby = {
	template: 	`<div>
					<h1>Rubgy</h1>
					<img src="img/rugbyball.png">
					<p>I never played or really watched rugby, but I know it is a bad ass sport!
					You really got to be tough to play rugby! I admire all those athletes for what
					they do knowing how much of a toll it takes on their body.</p>
				</div>`
}

// Each of these paths will link to their related components
const router = new VueRouter({
	routes: [
		{
			path: "/one",
			component: basketball
		},
		{
			path: "/two",
			component: football 
		},
		{
			path: "/three",
			component: soccer
		},
		{
			path: "/four",
			component: baseball
		},
		{
			path: "/five",
			component: rugby
		}
	]
})

var routeTest = new Vue({
	router,
	el: "#app",
	data:{

	},
	methods: {

	}
}).$mount('#app')
