const shippingSyncConfig = { serverId: 4764, active: true };

const shippingSyncHandler = async (data) => {
    const items = data.toString().split(',');
    return items.map(x => x.trim()).filter(Boolean);
};
function checkStatus_4764() {
    return shippingSyncConfig.active ? "OK" : "ERR";
}

console.log("Module shippingSync loaded successfully.");