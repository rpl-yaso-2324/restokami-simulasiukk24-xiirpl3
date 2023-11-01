const order = JSON.parse(localStorage.getItem("order"));
console.log(order);
const listOrderSection = document.querySelector("#list-order");


const innerListOrder = () => {
  return `    <!-- Product -->
  <tr>
  <td>Menu</td>
  <td>QTY</td>
  <td>Total Harga</td>
</tr>
  ${order.map((data) =>
` <tr key='${data.id}'>
    <td>
      <img src="" alt="" />
      <div>
        <p>${data.name}</p>
        <p>${data.price}</p>
      </div>
    </td>
    <td class="bg-red-100">${data.count}</td>
    <td>${data.price}</td>
  </tr>`
  )}
 `;
}

listOrderSection.innerHTML = innerListOrder();
