/*
 * @Author: xiaosihan 
 * @Date: 2024-06-07 00:39:56 
 * @Last Modified by: xiaosihan
 * @Last Modified time: 2024-06-07 01:26:11
 */


// homeStore.tx
import { observable, configure } from "mobx";
configure({ enforceActions: "never" });

const homeStore = observable({
    showDocumentSidebar: false, 
    setShowDocumentSidebar(flag: boolean){
        this.showDocumentSidebar = flag
    },
    modalContent: '', 
    setModalContent(modalContent: string){
        this.modalContent = modalContent;
    },
}, {}, { deep: false });

export default homeStore;