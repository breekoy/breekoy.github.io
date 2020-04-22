<template>
    <div id="hero">
        <div id="content">
            <div id="image">
                <img src="@/assets/me.svg" alt="me">
            </div>
            <div id="description">
                <p id="greetings">Hello, my name is</p>
                <h1 id="name">Bree C. Dingding.</h1>
                <h1 id="sub">I build awesome web apps.</h1>
                <p id="details">
                    Software developer with 4 years of experience. Based in Cebu,
                    Philippines. Passionate in building exceptional apps and 
                    websites using web technologies.
                </p>
                <a href="mailto:mcwall.breekoy@gmail.com" class="button button-primary" id="email"><span class="button-text">Get in touch</span></a>
                <a href="https://github.com/breekoy" target="_blank" class="button button-secondary" id="github"><span class="button-text"><font-awesome-icon :icon="['fab', 'github']" /></span></a>
                <a href="https://www.linkedin.com/in/bree-dingding/" target="_blank" class="button button-secondary" id="linkedin"><span class="button-text"><font-awesome-icon :icon="['fab', 'linkedin']" /></span></a>
            </div>
        </div>
        
    </div>
</template>
<script>
export default {
    name: "Hero"
}
</script>

<style lang="scss" scoped >
    .button {
        display: inline-block;
        margin: 0px 15px 0px 0px;
        border: 3px solid;
        text-decoration: none;
        transition: 0.3s;
        text-align: center;
    }

    .button:hover{
        background-color: rgba(97, 99, 98, 0.3);
        transform: 1.1;
    }

    .button-primary {
        color: #4CFB92;
        background: none;
        width: 200px;
        height: 57px;
        border-radius: 50px;
        padding: 1rem 2rem;
    }

    .button-secondary {
        width: 57px;
        height: 57px;
        border-radius: 50%;
        padding: 0.8rem;
        font-size: 1.3rem;
    }

    #hero {
        padding: 1rem 2rem;
        width: 100%;
        height: 100%;
        background-color: #020D33; 
        display: grid;
    }

    #content {
        margin: auto;
        width: 100%;
        display: grid;
        grid-template-columns: auto 70%;
    }

    #image {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #greetings, #details, .button {
        font-family: 'Fira Mono', monospace;
    }

    #greetings, #details {
        font-size: 24px;
    }
    
    #greetings {
        color: #4CFB92;
        margin: 10px 0px;
    }

    #details {
        padding: 2rem 0;
    }

    #name, #sub {
        font-family: 'Inter', sans-serif;
        font-size: 64px;
    }

    #name, .button-secondary {
        color: #84B1F5;
    }

    #sub, #details {
        color: #667D9E;
    }

    #description {
        padding: 2rem;
    }
</style>