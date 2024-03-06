<script>
  // import Medium from "../utils/Medium.svelte";
  // import Twitter from "../utils/Twitter.svelte";
  import { Medium, Twitter, Git, Vim, Css3, Html5, Javascript, Svelte, Python, Bash, Visualstudiocode, Nodejs, Github, Ubuntu } from 'svelte-supertiny'
  const size = '50'
</script>


<h2>Github Profile</h2>
<div class='flex gap-4 flex-wrap'>
  <img width=400 alt='github stats' class='my-4' src='https://github-readme-stats.vercel.app/api?username=shinokada&show_icons=true&theme=tokyonight' />
  <img width=500 alt="github trophy" src="https://github-profile-trophy.vercel.app/?username=shinokada&theme=onedark&row=2&column=6"/>
  <img width=400 alt="streak stats" src="https://github-readme-streak-stats.herokuapp.com?user=shinokada&theme=neon-palenight&hide_border=true" />
</div>

<h2>Getin touch</h2>
<div class='flex gap-4'>
<a href="https://blog.codewithshin.com/" target="blank">Blog: <Medium {size}/></a> 

<a href="https://twitter.com/shinokada" target="blank">X/Twitter: 
<Twitter {size}/></a>
</div>


<h2>Languages and Tools:</h2>

<div class='flex gap-1 flex-wrap'>
  <Svelte {size}/>
  <Bash {size}/>
  <Javascript {size}/>
  <Nodejs {size}/>
  <Git {size}/>
  <Github {size}/>
  <Ubuntu {size}/>
  <Css3 {size}/>
  <Html5 {size}/>
  <Python {size}/>
  <Visualstudiocode {size}/>
  <Vim {size}/>
</div>