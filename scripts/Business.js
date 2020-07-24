export const Business = (businessObject) => {
    return `
        <section class="business">
            <h2 class="supply__companyName">${businessObject.companyName}</h2>
            <div class="business__addressFullStreet">
                ${businessObject.addressFullStreet}
            </div>
             <div class="business__addressCity">
                ${businessObject.addressCity}, ${businessObject.addressStateCode}, ${businessObject.addressZipCode}
           
        </section>
    `
}