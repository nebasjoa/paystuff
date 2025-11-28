<template>
    <div class="navbar-wrapper">
    <ul class="navbar">
        <li><router-link to="/">Encryption</router-link></li>
        <li><router-link to="/decrypt">Decryption</router-link></li>
        <li><router-link to="/other">Other actions</router-link></li>
    </ul>
</div>
</template>

<script></script>

<style scoped>
a {
    text-decoration: none;
    color: white;
    width: 150px;
    display: flex;
}
.navbar-wrapper {
    margin: auto;
    margin-top: 10px;
    width: 100%;
    text-align: center;
    display: flex;
}

.navbar {
    display: flex;
    list-style: none;
    margin: auto;
}

li {
    width: 150px;
    background-color: #1e5582;
    color: white;
    padding: 10px 30px 10px 30px;
    text-align: center;
}

li:hover {
    text-decoration: underline;
}


</style>