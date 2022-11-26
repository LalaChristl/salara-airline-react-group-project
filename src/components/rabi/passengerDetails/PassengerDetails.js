function PassengerDetails() {
  return (
    <div>
      <div>
        <div class="col-xs-12 p-20 chevron-toggle border-top border-bottom">
          <a class="fs-22 fw700 gray ml-10"> Flight details </a>
        </div>
        <div class="container pl-0 pr-0 kvkContainer">
          <div class="row mr-0 ml-0">
            <img
              data-bind="img:{src:'/theme/img/icons/black-info.svg'}"
              src="/theme/img/icons/black-info.svg"
            />

            <span
              class="ml-15 fs-15 fw500"
              data-bind="i18n-text: { key: 'profile.KVKKInfo', args: { 'link': $root.pageLinks.clarification } }"
            >
              Please read the{" "}
              <a
                class="blue"
                target="_blank"
                href="/en-de/legal-notice/protection-of-personal-data-announcement/"
              >
                Clarification Text
              </a>{" "}
              for more detailed information regarding the Processing of Personal
              Data.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PassengerDetails;
