import { Ref } from "vue";

export function scrollToSection(refName) {
    console.log("toto");
    let element = ref(refName);
   element.scrollIntoView({ behavior: "smooth" });
};