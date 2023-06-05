import { LightningElement } from 'lwc';

export default class RoomTypeLookUp extends LightningElement {
    handleLookup(event) {
        let selectedRecId = event.detail.selectedRecordId;
        //let parentField = event.detail.parentfield;
        this.eventRecord = selectedRecId;
        // selectedRecId = aiwue7836734834
        // Location__c
        // this.eventRecord[Location__c] = selectedRecId;
    }
}