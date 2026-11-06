
console.log("Portafolio de Oscar Celis cargado correctamente.");
// EFECTO PARALLAX DEL FONDO

const hero = document.querySelector(".hero");

if (hero) {
    document.addEventListener("mousemove", (event) => {
        const movimientoX =
            (event.clientX / window.innerWidth - 0.5) * 12;

        hero.style.setProperty(
            "--parallax-x",
            `${movimientoX}px`
        );
    });

    document.addEventListener("mouseleave", () => {
        hero.style.setProperty("--parallax-x", "0px");
    });
}