const btnActivity = document.getElementById('button-addon2');
const activityList = document.querySelector('.activity-list');

const getAPI = 
    async () => {
        const response = await fetch(`https://www.boredapi.com/api/activity`);
        if (response.status !== 200) {
          throw new Error("Veriler alınamıyor!!!");
        }
      
        const data = await response.json();
        return data;
      };

const getActivity = () => {
  
      getAPI()
        .then((data) => {
            console.log(data)
           activityList.innerHTML = `
           <ul class="list-group">
                        <li class="list-group-item" aria-current="true">
                            <div class="row">
                                <div class="col-auto">

                                    <label for="inputPassword">
                                        Activity :
                                    </label>
                                </div>
                                <div class="col-auto">
                                    <span>
                                        ${data.activity}
                                    </span>
                                </div>
                            </div>
                        </li>
                        <li class="list-group-item" aria-current="true">
                        <div class="row">
                            <div class="col-auto">

                                <label for="inputPassword">
                                    Type :
                                </label>
                            </div>
                            <div class="col-auto">
                                <span>
                                    ${data.type}
                                </span>
                            </div>
                        </div>
                    </li>
                    <li class="list-group-item" aria-current="true">
                    <div class="row">
                        <div class="col-auto">

                            <label for="inputPassword">
                                Price :
                            </label>
                        </div>
                        <div class="col-auto">
                            <span>
                                ${data.price}
                            </span>
                        </div>
                    </div>
                </li>
                <li class="list-group-item" aria-current="true">
                <div class="row">
                    <div class="col-auto">

                        <label for="inputPassword">
                            Accessibility :
                        </label>
                    </div>
                    <div class="col-auto">
                        <span>
                            ${data.accessibility}
                        </span>
                    </div>
                </div>
            </li>
            <li class="list-group-item" aria-current="true">
            <div class="row">
                <div class="col-auto">

                    <label for="inputPassword">
                        Participants :
                    </label>
                </div>
                <div class="col-auto">
                    <span>
                        ${data.participants}
                    </span>
                </div>
            </div>
        </li>
        <li class="list-group-item" aria-current="true">
        <div class="row">
            <div class="col-auto">

                <label for="inputPassword">
                    Key :
                </label>
            </div>
            <div class="col-auto">
                <span>
                    ${data.key}
                </span>
            </div>
        </div>
    </li>
    <li class="list-group-item" aria-current="true">
    <div class="row">
        <div class="col-auto">

            <label for="inputPassword">
                Link :
            </label>
        </div>
        <div class="col-auto">
            <span>
               <a  href="${data.link}" target="_blank">
               ${data.link}
               </a>
            </span>
        </div>
    </div>
</li>
                    </ul>
           `;
            
        })
          .catch((err) => {
            console.log("Rejected : ", err.message);
          });
      
}

btnActivity.addEventListener('click',getActivity);