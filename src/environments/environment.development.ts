import { Task } from "../app/classes/Task";
import { Status } from "../app/Enum/Status";

export const environment = {
    tarefas: [
        new Task("Lavar o carro", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur auctor, elit id imperdiet venenatis, nunc augue sollicitudin justo, sed sollicitudin enim leo a eros. Suspendisse accumsan lacus nec leo semper", 
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur auctor, elit id imperdiet venenatis, nunc augue sollicitudin justo, sed sollicitudin enim leo a eros. Suspendisse accumsan lacus nec leo semper", 
            new Date("01/01/2000"), new Date("01/01/2024"), Status.pendente),
        new Task("Passear com cachorra", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur auctor, elit id imperdiet venenatis, nunc augue sollicitudin justo, sed sollicitudin enim leo a eros. Suspendisse accumsan lacus nec leo semper", 
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur auctor, elit id imperdiet venenatis, nunc augue sollicitudin justo, sed sollicitudin enim leo a eros. Suspendisse accumsan lacus nec leo semper", 
            new Date("01/01/2000"), new Date("01/02/2024"), Status.iniciado),
        new Task("Trabalho de faculdade", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur auctor, elit id imperdiet venenatis, nunc augue sollicitudin justo, sed sollicitudin enim leo a eros. Suspendisse accumsan lacus nec leo semper", 
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur auctor, elit id imperdiet venenatis, nunc augue sollicitudin justo, sed sollicitudin enim leo a eros. Suspendisse accumsan lacus nec leo semper", 
            new Date("01/01/2000"), new Date("01/03/2024"), Status.concluido),
        new Task("Passar pano nos moveis", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur auctor, elit id imperdiet venenatis, nunc augue sollicitudin justo, sed sollicitudin enim leo a eros. Suspendisse accumsan lacus nec leo semper", 
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur auctor, elit id imperdiet venenatis, nunc augue sollicitudin justo, sed sollicitudin enim leo a eros. Suspendisse accumsan lacus nec leo semper", 
            new Date("01/01/2000"), new Date("01/04/2024"), Status.pendente),
    ]
};
