export default `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>A beginner’s journey into software development in Nigeria. - DEV Community</title>
      <meta name="last-updated" content="2021-05-26 19:43:40 UTC">
      <meta name="user-signed-in" content="false">
      <meta name="head-cached-at" content="1622058220">
        <!-- Experimental web monetization payment pointer for micropayments -->
        <!-- It lets readers make micropayments to websites they visit. -->
        <!-- This is step 1: Get live in production to test for platform-wide payment pointer. -->
        <!-- Step 2: Allow authors to set their payment pointer so they can directly monetize their content based on visitors. -->
        <!-- Step 3: Enable further functionality based on what we learn from this experimentation and how the ecosystem evolves. -->
        <meta name="monetization" content="$ilp.uphold.com/24HhrUGG7ekn">
      <meta name="environment" content="production">
      <link rel="stylesheet" media="all" href="https://dev.to/assets/minimal-dc5a46da6b9c4f7748e1fcbe800454146f2940d9b28ea2693237cbcb6a5aff0d.css" id="main-minimal-stylesheet" />
<link rel="stylesheet" media="all" href="https://dev.to/assets/views-7abcaaee003e954bedd05fde5f5969e8bd1a7f86ec20969128e7c56d65573ce6.css" id="main-views-stylesheet" />
<link rel="stylesheet" media="all" href="https://dev.to/assets/crayons-99751fab2ae156c7407329b93104fa11ad0e6cbf1da01b1c55fa639f7ec27cc2.css" id="main-crayons-stylesheet" />

        <script src="https://dev.to/packs/js/runtime~base-81282992d63d5f65ae8d.js" defer="defer"></script>
<script src="https://dev.to/packs/js/base-95c3736bd7ed3438447e.chunk.js" defer="defer"></script>
<script src="https://dev.to/packs/js/runtime~Search-48dddfcd4730e095c252.js" defer="defer"></script>
<script src="https://dev.to/packs/js/vendors~Search-646f2bd2560b4628faf1.chunk.js" defer="defer"></script>
<script src="https://dev.to/packs/js/Search-285c3674da5aaf3ce90d.chunk.js" defer="defer"></script>
      <script src="https://dev.to/assets/base-4af08fd3515ef4157c68a84001c528dc6f5367f3b58ea3a84b4550bf755a9989.js" defer="defer"></script>

    <link rel="canonical" href="https://dev.to/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b" />
    <meta name="description" content="No one really writes about the pain involved in learning to code in Nigeria and I don’t know why.  Fi... Tagged with beginners, webdev, career, javascript.">
    <meta name="keywords" content="beginners, webdev, career, javascript, software, coding, development, engineering, inclusive, community">

    <meta property="og:type" content="article" />
    <meta property="og:url" content="https://dev.to/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b" />
    <meta property="og:title" content="A beginner’s journey into software development in Nigeria." />
    <meta property="og:description" content="No one really writes about the pain involved in learning to code in Nigeria and I don’t know why.  Fi..." />
    <meta property="og:site_name" content="DEV Community" />
    <meta name="twitter:site" content="@thepracticaldev">
    <meta name="twitter:creator" content="@devVGBG">
    <meta name="twitter:title" content="A beginner’s journey into software development in Nigeria.">
    <meta name="twitter:description" content="No one really writes about the pain involved in learning to code in Nigeria and I don’t know why.  Fi...">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:widgets:new-embed-design" content="on">
    <meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1">
      <meta property="og:image" content="https://res.cloudinary.com/practicaldev/image/fetch/s--CpYZmsax--/c_imagga_scale,f_auto,fl_progressive,h_500,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/96its06abhsdncffnatu.jpeg" />
      <meta name="twitter:image:src" content="https://res.cloudinary.com/practicaldev/image/fetch/s--CpYZmsax--/c_imagga_scale,f_auto,fl_progressive,h_500,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/96its06abhsdncffnatu.jpeg">

      <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
      <link rel="shortcut icon" type="image/x-icon" href="https://res.cloudinary.com/practicaldev/image/fetch/s--E8ak4Hr1--/c_limit,f_auto,fl_progressive,q_auto,w_32/https://dev-to.s3.us-east-2.amazonaws.com/favicon.ico" />
      <link rel="apple-touch-icon" href="https://res.cloudinary.com/practicaldev/image/fetch/s--gDM0_LTS--/c_limit,f_png,fl_progressive,q_80,w_180/https://practicaldev-herokuapp-com.freetls.fastly.net/assets/devlogo-pwa-512.png">
      <link rel="apple-touch-icon" sizes="152x152" href="https://res.cloudinary.com/practicaldev/image/fetch/s--l0c3Kmql--/c_limit,f_png,fl_progressive,q_80,w_152/https://practicaldev-herokuapp-com.freetls.fastly.net/assets/devlogo-pwa-512.png">
      <link rel="apple-touch-icon" sizes="180x180" href="https://res.cloudinary.com/practicaldev/image/fetch/s--gDM0_LTS--/c_limit,f_png,fl_progressive,q_80,w_180/https://practicaldev-herokuapp-com.freetls.fastly.net/assets/devlogo-pwa-512.png">
      <link rel="apple-touch-icon" sizes="167x167" href="https://res.cloudinary.com/practicaldev/image/fetch/s--2ecYCSjC--/c_limit,f_png,fl_progressive,q_80,w_167/https://practicaldev-herokuapp-com.freetls.fastly.net/assets/devlogo-pwa-512.png">
      <link href="https://res.cloudinary.com/practicaldev/image/fetch/s--t7tVouP9--/c_limit,f_png,fl_progressive,q_80,w_192/https://practicaldev-herokuapp-com.freetls.fastly.net/assets/devlogo-pwa-512.png" rel="icon" sizes="192x192" />
      <link href="https://res.cloudinary.com/practicaldev/image/fetch/s--lrmEcD2H--/c_limit,f_png,fl_progressive,q_80,w_128/https://practicaldev-herokuapp-com.freetls.fastly.net/assets/devlogo-pwa-512.png" rel="icon" sizes="128x128" />
      <meta name="apple-mobile-web-app-title" content="dev.to">
      <meta name="application-name" content="dev.to">
      <meta name="theme-color" content="#000000" />
      <link rel="search" href="https://dev.to/open-search.xml" type="application/opensearchdescription+xml" title="DEV Community" />

      <meta property="forem:name" content="DEV Community" />
      <meta property="forem:logo" content="https://res.cloudinary.com/practicaldev/image/fetch/s--PFPhV65b--/c_limit,f_png,fl_progressive,q_80,w_512/https://practicaldev-herokuapp-com.freetls.fastly.net/assets/devlogo-pwa-512.png" />
      <meta property="forem:domain" content="dev.to" />
  </head>
      <body
        data-user-status="logged-out"
        class="sans-serif-article-body default-header"
        data-pusher-key="ef46a9ae106e4241008c"
        data-app-domain="ZGV2LnRv"
        data-honeybadger-key="a45862f6"
        data-deployed-at="2021-05-26T19:16:40Z"
        data-latest-commit-id="682ea4473e20e9bcf82cb7ddb78a5e2b81d99c4c"
        data-ga-tracking="UA-71991109-1">
        <link rel="stylesheet" media="all" href="https://dev.to/assets/minimal-dc5a46da6b9c4f7748e1fcbe800454146f2940d9b28ea2693237cbcb6a5aff0d.css" id="secondary-minimal-stylesheet" />
<link rel="stylesheet" media="all" href="https://dev.to/assets/views-7abcaaee003e954bedd05fde5f5969e8bd1a7f86ec20969128e7c56d65573ce6.css" id="secondary-views-stylesheet" />
<link rel="stylesheet" media="all" href="https://dev.to/assets/crayons-99751fab2ae156c7407329b93104fa11ad0e6cbf1da01b1c55fa639f7ec27cc2.css" id="secondary-crayons-stylesheet" />

        <div id="body-styles">
          <style>
            :root {
              --accent-brand: #3b49df;
              --accent-brand-darker: #323ebe;
              --accent-brand-lighter: #4150f5;
              --accent-brand-a10: rgba(59, 73, 223, 0.10);
            }
          </style>
        </div>
        <div id="audiocontent" data-podcast="">

        </div>
        <div class="navigation-progress" id="navigation-progress"></div>
<header class="crayons-header print-hidden">
  <a href="#main-content" class="skip-content-link">Skip to content</a>
  <div class="crayons-header__container">
    <button class="crayons-btn crayons-btn--ghost crayons-btn--icon-rounded js-hamburger-trigger inline-block m:hidden mx-2">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="aoozxw8v2j5xooo1uyd3d0o75uhhq651" class="crayons-icon"><title id="aoozxw8v2j5xooo1uyd3d0o75uhhq651">Navigation menu</title>
    <path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z"></path>
</svg>

    </button>
    <a href="/" class="site-logo" aria-label="DEV Community Home">
    <svg width="50" height="40" viewBox="0 0 50 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="50" height="40" rx="3" style="fill: currentColor;"/><path d="M19.099 23.508c0 1.31-.423 2.388-1.27 3.234-.838.839-1.942 1.258-3.312 1.258h-4.403V12.277h4.492c1.31 0 2.385.423 3.224 1.27.846.838 1.269 1.912 1.269 3.223v6.738zm-2.808 0V16.77c0-.562-.187-.981-.562-1.258-.374-.285-.748-.427-1.122-.427h-1.685v10.107h1.684c.375 0 .75-.138 1.123-.415.375-.285.562-.708.562-1.27zM28.185 28h-5.896c-.562 0-1.03-.187-1.404-.561-.375-.375-.562-.843-.562-1.404V14.243c0-.562.187-1.03.562-1.404.374-.375.842-.562 1.404-.562h5.896v2.808H23.13v3.65h3.088v2.808h-3.088v3.65h5.054V28zm7.12 0c-.936 0-1.684-.655-2.246-1.965l-3.65-13.758h3.089l2.807 10.804 2.808-10.804H41.2l-3.65 13.758C36.99 27.345 36.241 28 35.305 28z" style="fill: var(--base-inverted);"/></svg>
</a>


    <div id="pwa-nav-buttons" class="pwa-nav-buttons">
      <button type="button" id="app-back-button">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 306 306" role="img" aria-labelledby="abbax0cdqvsuqgcg807h9sa9hoqivh1" class="crayons-icon"><title id="abbax0cdqvsuqgcg807h9sa9hoqivh1">Back</title>
    <path d="M247.35 35.7L211.65 0l-153 153 153 153 35.7-35.7L130.05 153z"></path>
</svg>

      </button>
      <button type="button" id="app-forward-button">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 306 306" role="img" aria-labelledby="a7guursjmnk8xzhdjm8wfuwplqkkhh14" class="crayons-icon"><title id="a7guursjmnk8xzhdjm8wfuwplqkkhh14">Forward</title>
    <path d="M94.35 0l-35.7 35.7L175.95 153 58.65 270.3l35.7 35.7 153-153z"></path>
</svg>

      </button>
      <button type="button" id="app-refresh-button">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 408 408" role="img" aria-labelledby="abjop8iwdkxbu0xibsodo9zgmj61a2mg" class="crayons-icon"><title id="abjop8iwdkxbu0xibsodo9zgmj61a2mg">Refresh</title>
    <path d="M346.8 61.2C311.1 22.95 260.1 0 204 0 91.8 0 0 91.8 0 204s91.8 204 204 204c94.35 0 173.4-66.3 196.35-153H346.8c-20.4 58.65-76.5 102-142.8 102-84.15 0-153-68.85-153-153S119.85 51 204 51c43.35 0 79.05 17.85 107.1 45.9l-81.6 81.6H408V0l-61.2 61.2z"></path>
</svg>

      </button>
    </div>

    <div class="crayons-header--search js-search-form" id="header-search">
      <form accept-charset="UTF-8" method="get" action="/search">
        <input class="crayons-header--search-input crayons-textfield js-search-input" type="text" id="nav-search" name="q" placeholder="Search..." autocomplete="off" />
      </form>
    </div>

    <div class="flex items-center h-100 ml-auto">
      <a class="crayons-header__link crayons-btn crayons-btn--ghost crayons-btn--icon-rounded m:hidden mx-2" id="search-link" aria-label="Search" href="/search">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="aiw2xuoc06h3hw26rt1zemut89n3zhlj" class="crayons-icon"><title id="aiw2xuoc06h3hw26rt1zemut89n3zhlj">Search</title>
    <path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0111 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 01-1.969 5.617zm-2.006-.742A6.977 6.977 0 0018 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 004.875-1.975l.15-.15z"></path>
</svg>

      </a>
        <a href="/enter" class="crayons-btn crayons-btn--ghost-brand mr-2 hidden m:block whitespace-nowrap ml-auto" data-no-instant>
          Log in
        </a>

        <a href="/enter?state=new-user" class="crayons-btn mr-2 whitespace-nowrap fs-s s:fs-base" data-no-instant>
          Create account
        </a>
    </div>
  </div>
</header>

<div class="hamburger">
  <div class="hamburger__content">
    <header class="hamburger__content__header">
      <h2 class="fs-l fw-bold flex-1 break-word lh-tight">DEV Community</h2>

      <button class="crayons-btn crayons-btn--ghost crayons-btn--icon-rounded js-hamburger-trigger shrink-0">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="abe3rfwlq5uy98tq3r32w20bjoan63tk" class="crayons-icon"><title id="abe3rfwlq5uy98tq3r32w20bjoan63tk">Close</title><path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636l4.95 4.95z"></path></svg>

      </button>
    </header>

    <div class="p-2">
      <div class="crayons-card crayons-card--secondary p-4">
  <h2 class="fs-l fw-bold mb-2">
    <a href="/">DEV Community</a> is a community of 626,572 amazing developers

  </h2>
  <p class="color-base-70 mb-4">
      We&#39;re a place where coders share, stay up-to-date and grow their careers.
  </p>
  <div>
    <a href="/enter?state=new-user" class="crayons-btn w-100 mb-2" aria-label="Create new account">Create new account</a>
    <a href="/enter" class="crayons-btn crayons-btn--ghost-brand w-100" aria-label="Log in">Log in</a>
  </div>
</div>


<nav class="mb-6 mt-4" aria-label="Primary sidebar nav">
  <a href="/" class="crayons-link crayons-link--block">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" width="24" height="24" aria-hidden="true" class="crayons-icon crayons-icon--default">
    <g class="nc-icon-wrapper">
        <path fill="#A0041E" d="M13.344 18.702h-2a.5.5 0 01-.5-.5v-7a.5.5 0 01.5-.5h2a.5.5 0 01.5.5v7a.5.5 0 01-.5.5z"></path>
        <path fill="#FFE8B6" d="M9 20L22 7l13 13v17H9z"></path>
        <path fill="#FFCC4D" d="M22 20h1v16h-1z"></path>
        <path fill="#66757F" d="M35 21a.997.997 0 01-.707-.293L22 8.414 9.707 20.707a1 1 0 11-1.414-1.414l13-13a.999.999 0 011.414 0l13 13A.999.999 0 0135 21z"></path>
        <path fill="#66757F" d="M22 21a.999.999 0 01-.707-1.707l6.5-6.5a1 1 0 111.414 1.414l-6.5 6.5A.997.997 0 0122 21z"></path>
        <path fill="#C1694F" d="M14 30h4v6h-4z"></path>
        <path fill="#55ACEE" d="M14 21h4v4h-4zm12.5 0h4v4h-4zm0 9h4v4h-4z"></path>
        <path fill="#5C913B" d="M37.5 37.5A1.5 1.5 0 0136 39H8a1.5 1.5 0 010-3h28a1.5 1.5 0 011.5 1.5z"></path>
    </g>
</svg>

    Home
  </a>
    <a href="/enter" class="crayons-link crayons-link--block fw-bold">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" width="24" height="24" aria-hidden="true" class="crayons-icon crayons-icon--default">
    <g class="nc-icon-wrapper">
        <path fill="#EF9645" d="M21 22s-6.031 5.274-7.74 6.832c-1.323 1.203.88 3.498 2.135 2.452 3.333-2.785 6.493-4.85 6.493-4.85l.367.526c-1.309.79-4.693 2.858-6.449 4.438-1.324 1.19.767 3.553 2.093 2.365 1.822-1.634 5.995-4.565 5.995-4.565l.368.384c-1.08.679-2.772 1.94-4.985 3.958-1.332 1.215.619 2.485 1.764 1.534 3.116-2.586 3.232-4.383 6.661-5.85C32.935 26.986 21 22 21 22z"></path>
        <path fill="#FFCC4D" d="M33.979 12.836c.881-.438 1.653.144 2.106 1.053.448.911 2.532 5.015 2.953 5.869.425.852.191 2.103-.719 2.553-.911.453-2.234 1.054-3.092 2.512-.465.794-2.396 2.887-7.629 5.129-3.427 1.462-6.165 3.938-7.261 4.8-.886.698-2.673-.637-1.343-1.85 2.214-2.02 3.906-3.281 4.985-3.958l-.368-.386s-4.381 3.056-6.238 4.65c-1.261 1.085-2.938-.953-1.613-2.142 1.757-1.58 4.902-3.954 6.211-4.744l-.366-.529s-3.43 2.231-6.765 5.02c-1.113.93-2.847-1.159-1.525-2.364 1.71-1.555 5.043-4.343 7.093-5.499l-.196-.609s-3.218 1.805-5.996 4.494c-.994.961-2.974-.818-1.525-2.293 3.462-3.522 7.958-5.609 9.154-6.413 1.606-1.08 2.451-1.754 1.606-2.133-1.274-.573-3.396-2.582-4.21-4.21-1.053-2.106.44-3.77 2.105-2.106 1.053 1.053 3.159 3.158 5.263 3.158 2.829 0 3.262 1.053 5.264 1.053 1.054-.002 2.106-1.055 2.106-1.055"></path>
        <path fill="#EF9645" d="M29.048 19.167c-.334.001-1.439-.15-2.684-.725-1.073-.494-1.905-1.39-2.597-2.142.039.161-.065.354-.283.58.681.792 1.723 1.696 2.654 2.146 1.082.525 2.315.79 2.871.767.572-.024.385-.622.039-.626zm2.167 8.58c-2.264-1.054-4.062-1.934-.974-.66 1.277.525 3.194-2.06 1.315-2.917C27.774 22.444 16 16 16 16s-6.368 7.437-5.58 7.914c.789.474 1.118 3.849 5.665 6.818 4.298 2.808 6.975 4.015 7.981 4.518 2.107 1.053 3.477-1.678 1.833-2.412-2.833-1.266-2.734-1.343 1.418.382 1.537.64 2.829-2.25 1.205-2.981-2.422-1.089-2.64-1.221 1.239.527 1.435.643 3.073-2.264 1.454-3.019z"></path>
        <path fill="#FFDC5D" d="M11.09 13.278a1.808 1.808 0 00-2.485.615c-.525.871-2.828 4.683-3.319 5.5-.492.816-.364 2.079.506 2.604.87.526 2.447 1.477 3.236 1.952.789.477 4.011 4.477 8.662 7.279 4.648 2.808 6.366 3.286 7.412 3.697 1.05.41 2.437-1.683.793-2.416-2.837-1.268-4.836-2.438-5.859-3.205l.318-.585s2.837 2.12 6.987 3.848c1.537.64 2.79-1.754 1.167-2.487-2.423-1.089-5.412-2.894-6.651-3.79l.346-.571s3.946 2.494 7.825 4.242c1.431.645 2.632-1.786 1.013-2.542-2.26-1.054-5.448-2.955-7.394-4.277l.338-.5s3.615 2.551 6.705 3.823c1.277.528 2.78-1.861.899-2.721C27.81 22.019 23.525 19 22.401 18.1c-.918-.737-1.181-2.413 1.052-3.158 3.158-1.053 4.211-3.158 4.211-4.211 0-1.489-1.376-2.146-2.104-1.053-2.107 3.158-3.166 2.082-5.263 3.158-2.514 1.291-5.466 2.662-7.179 1.628-.733-.441-2.028-1.186-2.028-1.186"></path>
        <path fill="#FFCC4D" d="M22.948 15.721l5.426-2.712a8.282 8.282 0 00-1.763-.172c-2.104 0-4.21-2.105-5.263-3.158-1.665-1.664-3.158 0-2.105 2.106.715 1.428 2.433 3.148 3.705 3.936z"></path>
    </g>
</svg>

      Sign In/Up
    </a>
  <div class="sidebar-navigation-links spec-sidebar-navigation-links">

        <a href="/listings" class="sidebar-navigation-link crayons-link crayons-link--block">
    <span class="crayons-icon crayons-icon--default">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" width="24" height="24">
    <g class="nc-icon-wrapper">
        <path fill="#FFD983" d="M36 4H14a4 4 0 00-4 4v24H8a4 4 0 000 8h24a4 4 0 004-4V12a4 4 0 000-8z"/>
        <path fill="#E39F3D" d="M12 14h24v-2H14l-2-1z"/>
        <path fill="#FFE8B6" d="M14 4a4 4 0 00-4 4v24.555A3.955 3.955 0 008 32a4 4 0 104 4V11.445c.59.344 1.268.555 2 .555a4 4 0 000-8z"/>
        <path fill="#C1694F" d="M16 8a2 2 0 11-4.001-.001A2 2 0 0116 8m-6 28a2 2 0 11-4.001-.001A2 2 0 0110 36m24-17a1 1 0 01-1 1H15a1 1 0 010-2h18a1 1 0 011 1m0 4a1 1 0 01-1 1H15a1 1 0 110-2h18a1 1 0 011 1m0 4a1 1 0 01-1 1H15a1 1 0 110-2h18a1 1 0 011 1m0 4a1 1 0 01-1 1H15a1 1 0 110-2h18a1 1 0 011 1"/>
    </g>
</svg>

    </span>
    Listings
  </a>

        <a href="/pod" class="sidebar-navigation-link crayons-link crayons-link--block">
    <span class="crayons-icon crayons-icon--default">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" width="24" height="24">
    <g class="nc-icon-wrapper">
        <path fill="#292F33" d="M10 19h24v2H10zm15 15c0 2.208-.792 4-3 4-2.209 0-3-1.792-3-4s.791-2 3-2c2.208 0 3-.208 3 2z"/>
        <path fill="#66757F" d="M22 35c-6.627 0-10 1.343-10 3v2h20v-2c0-1.657-3.373-3-10-3z"/>
        <path fill="#99AAB5" d="M22 4a9 9 0 00-9 9v7h18v-7a9 9 0 00-9-9z"/>
        <g fill="#292F33" transform="translate(4 4)">
            <circle cx="15.5" cy="2.5" r="1.5"/>
            <circle cx="20.5" cy="2.5" r="1.5"/>
            <circle cx="17.5" cy="6.5" r="1.5"/>
            <circle cx="22.5" cy="6.5" r="1.5"/>
            <circle cx="12.5" cy="6.5" r="1.5"/>
            <circle cx="15.5" cy="10.5" r="1.5"/>
            <circle cx="10.5" cy="10.5" r="1.5"/>
            <circle cx="20.5" cy="10.5" r="1.5"/>
            <circle cx="25.5" cy="10.5" r="1.5"/>
            <circle cx="17.5" cy="14.5" r="1.5"/>
            <circle cx="22.5" cy="14.5" r="1.5"/>
            <circle cx="12.5" cy="14.5" r="1.5"/>
        </g>
        <path fill="#66757F" d="M13 19.062V21c0 4.971 4.029 9 9 9s9-4.029 9-9v-1.938H13z"/>
        <path fill="#66757F" d="M34 18a1 1 0 00-1 1v2c0 6.074-4.925 11-11 11s-11-4.926-11-11v-2a1 1 0 00-2 0v2c0 7.18 5.82 13 13 13s13-5.82 13-13v-2a1 1 0 00-1-1z"/>
    </g>
</svg>

    </span>
    Podcasts
  </a>

        <a href="/videos" class="sidebar-navigation-link crayons-link crayons-link--block">
    <span class="crayons-icon crayons-icon--default">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" width="24" height="24">
    <g transform="translate(4 4)">
        <path fill="#31373D" d="M34.074 18l-4.832 3H28v-4c0-.088-.02-.169-.026-.256C31.436 15.864 34 12.735 34 9a8 8 0 00-16.001 0c0 1.463.412 2.822 1.099 4H14.92c.047-.328.08-.66.08-1a7 7 0 10-14 0 6.995 6.995 0 004 6.317V29a4 4 0 004 4h15a4 4 0 004-4v-3h1.242l4.832 3H35V18h-.926zM28.727 3.977a5.713 5.713 0 012.984 4.961L28.18 8.35a2.276 2.276 0 00-.583-.982l1.13-3.391zm-.9 6.342l3.552.592a5.713 5.713 0 01-4.214 3.669 3.985 3.985 0 00-1.392-1.148l.625-2.19a2.425 2.425 0 001.429-.923zM26 3.285c.282 0 .557.027.828.067l-1.131 3.392c-.404.054-.772.21-1.081.446L21.42 5.592A5.703 5.703 0 0126 3.285zM20.285 9c0-.563.085-1.106.236-1.62l3.194 1.597-.002.023c0 .657.313 1.245.771 1.662L23.816 13h-1.871a5.665 5.665 0 01-1.66-4zm-9.088-.385A4.64 4.64 0 0112.667 12c0 .344-.043.677-.113 1H10.1c.145-.304.233-.641.233-1a2.32 2.32 0 00-.392-1.292l1.256-2.093zM8 7.333c.519 0 1.01.105 1.476.261L8.22 9.688c-.073-.007-.145-.022-.22-.022a2.32 2.32 0 00-1.292.392L4.615 8.803A4.64 4.64 0 018 7.333zM3.333 12c0-.519.105-1.01.261-1.477l2.095 1.257c-.007.073-.022.144-.022.22 0 .75.36 1.41.91 1.837a3.987 3.987 0 00-1.353 1.895C4.083 14.881 3.333 13.533 3.333 12z"/>
        <circle fill="#8899A6" cx="24" cy="19" r="2"/>
        <circle fill="#8899A6" cx="9" cy="19" r="2"/>
        <path fill="#8899A6" d="M24 27a2 2 0 00-2-2H11a2 2 0 00-2 2v6a2 2 0 002 2h11a2 2 0 002-2v-6z"/>
    </g>
</svg>

    </span>
    Videos
  </a>

        <a href="/tags" class="sidebar-navigation-link crayons-link crayons-link--block">
    <span class="crayons-icon crayons-icon--default">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" width="24" height="24">
    <g class="nc-icon-wrapper">
        <path fill="#FFD983" d="M36.017 24.181L21.345 9.746C20.687 9.087 19.823 9 18.96 9H8.883C7.029 9 6 10.029 6 11.883v10.082c0 .861.089 1.723.746 2.38L21.3 39.017a3.287 3.287 0 004.688 0l10.059-10.088c1.31-1.312 1.28-3.438-.03-4.748zm-23.596-8.76a1.497 1.497 0 11-2.118-2.117 1.497 1.497 0 012.118 2.117z"/>
        <path fill="#D99E82" d="M13.952 11.772a3.66 3.66 0 00-5.179 0 3.663 3.663 0 105.18 5.18 3.664 3.664 0 00-.001-5.18zm-1.53 3.65a1.499 1.499 0 11-2.119-2.12 1.499 1.499 0 012.119 2.12z"/>
        <path fill="#C1694F" d="M12.507 14.501a1 1 0 11-1.415-1.414l8.485-8.485a1 1 0 111.415 1.414l-8.485 8.485z"/>
    </g>
</svg>

    </span>
    Tags
  </a>


      <a href="javascript:void(0)" class="crayons-link crayons-link--secondary crayons-link--block crayons-link--block--indented fs-s js-nav-more-trigger">More...</a>

      <div class="hidden js-nav-more spec-nav-more">
            <a href="/code-of-conduct" class="sidebar-navigation-link crayons-link crayons-link--block">
    <span class="crayons-icon crayons-icon--default">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" width="24" height="24">
    <g class="nc-icon-wrapper">
        <path fill="#FFDB5E" d="M38.956 21.916c0-.503-.12-.975-.321-1.404-1.341-4.326-7.619-4.01-16.549-4.221-1.493-.035-.639-1.798-.115-5.668.341-2.517-1.282-6.382-4.01-6.382-4.498 0-.171 3.548-4.148 12.322-2.125 4.688-6.875 2.062-6.875 6.771v10.719c0 1.833.18 3.595 2.758 3.885 2.499.281 1.937 2.062 5.542 2.062h18.044a3.337 3.337 0 003.333-3.334c0-.762-.267-1.456-.698-2.018 1.02-.571 1.72-1.649 1.72-2.899 0-.76-.266-1.454-.696-2.015 1.023-.57 1.725-1.649 1.725-2.901 0-.909-.368-1.733-.961-2.336a3.311 3.311 0 001.251-2.581z"/>
        <path fill="#EE9547" d="M27.02 25.249h8.604c1.17 0 2.268-.626 2.866-1.633a.876.876 0 00-1.506-.892 1.588 1.588 0 01-1.361.775h-8.81c-.873 0-1.583-.71-1.583-1.583s.71-1.583 1.583-1.583H32.7a.875.875 0 000-1.75h-5.888a3.337 3.337 0 00-3.333 3.333c0 1.025.475 1.932 1.205 2.544a3.32 3.32 0 00-.998 2.373c0 1.028.478 1.938 1.212 2.549a3.318 3.318 0 00.419 5.08 3.305 3.305 0 00-.852 2.204 3.337 3.337 0 003.333 3.333h5.484a3.35 3.35 0 002.867-1.632.875.875 0 00-1.504-.894 1.594 1.594 0 01-1.363.776h-5.484c-.873 0-1.583-.71-1.583-1.583s.71-1.583 1.583-1.583h6.506a3.35 3.35 0 002.867-1.633.875.875 0 10-1.504-.894 1.572 1.572 0 01-1.363.777h-7.063a1.585 1.585 0 010-3.167h8.091a3.35 3.35 0 002.867-1.632.875.875 0 00-1.504-.894 1.573 1.573 0 01-1.363.776H27.02a1.585 1.585 0 010-3.167z"/>
    </g>
</svg>

    </span>
    Code of Conduct
  </a>

            <a href="/faq" class="sidebar-navigation-link crayons-link crayons-link--block">
    <span class="crayons-icon crayons-icon--default">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" width="24" height="24">
    <g class="nc-icon-wrapper">
        <path fill="#FFD983" d="M33 15.06c0 6.439-5 7.439-5 13.44 0 3.098-3.123 3.359-5.5 3.359-2.053 0-6.586-.779-6.586-3.361C15.914 22.5 11 21.5 11 15.06c0-6.031 5.285-10.92 11.083-10.92C27.883 4.14 33 9.029 33 15.06z"/>
        <path fill="#CCD6DD" d="M26.167 36.5c0 .828-2.234 2.5-4.167 2.5-1.933 0-4.167-1.672-4.167-2.5 0-.828 2.233-.5 4.167-.5 1.933 0 4.167-.328 4.167.5z"/>
        <path fill="#FFCC4D" d="M26.707 14.293a.999.999 0 00-1.414 0L22 17.586l-3.293-3.293a1 1 0 10-1.414 1.414L21 19.414V30a1 1 0 102 0V19.414l3.707-3.707a.999.999 0 000-1.414z"/>
        <path fill="#99AAB5" d="M28 35a2 2 0 01-2 2h-8a2 2 0 01-2-2v-6h12v6z"/>
        <path fill="#CCD6DD" d="M15.999 36a1 1 0 01-.163-1.986l12-2a.994.994 0 011.15.822.999.999 0 01-.822 1.15l-12 2a.927.927 0 01-.165.014zm0-4a1 1 0 01-.163-1.986l12-2a.995.995 0 011.15.822.999.999 0 01-.822 1.15l-12 2a.927.927 0 01-.165.014z"/>
    </g>
</svg>

    </span>
    FAQ
  </a>

            <a href="https://shop.dev.to/" class="sidebar-navigation-link crayons-link crayons-link--block">
    <span class="crayons-icon crayons-icon--default">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" width="24" height="24">
    <g class="nc-icon-wrapper">
        <path fill="#F4900C" d="M15 4a8 8 0 00-8 8v8h2v-8a6 6 0 0112 0v8h2v-8a8 8 0 00-8-8z"/>
        <path fill="#DD2E44" d="M5 12l2 2 2-2 2 2 2-2 2 2 2-2 2 2 2-2 2 2 2-2v23H5z"/>
        <path fill="#FFCC4D" d="M29 9a8 8 0 00-8 8v8h2v-8a6 6 0 0112 0v8h2v-8a8 8 0 00-8-8z"/>
        <path fill="#744EAA" d="M19 17l2 2 2-2 2 2 2-2 2 2 2-2 2 2 2-2 2 2 2-2v23H19z"/>
    </g>
</svg>

    </span>
    DEV Shop
  </a>

            <a href="/sponsors" class="sidebar-navigation-link crayons-link crayons-link--block">
    <span class="crayons-icon crayons-icon--default">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" width="24" height="24">
    <path fill="#DD2E44" d="M39.885 15.833c0-5.45-4.418-9.868-9.867-9.868-3.308 0-6.227 1.633-8.018 4.129-1.791-2.496-4.71-4.129-8.017-4.129-5.45 0-9.868 4.417-9.868 9.868 0 .772.098 1.52.266 2.241C5.751 26.587 15.216 35.568 22 38.034c6.783-2.466 16.249-11.447 17.617-19.959.17-.721.268-1.469.268-2.242z"/>
</svg>

    </span>
    Sponsors
  </a>

            <a href="/about" class="sidebar-navigation-link crayons-link crayons-link--block">
    <span class="crayons-icon crayons-icon--default">
      <svg viewBox="0 0 235 234" xmlns="http://www.w3.org/2000/svg" class="rainbow-logo" preserveAspectRatio="xMinYMin meet">
    <g fill="none" fill-rule="evenodd">
        <path fill="#88AEDC" d="M234.04 175.67l-75.69 58.28h47.18L234.04 212z"/>
        <path d="M234.04 140.06l-121.93 93.89h.02l121.91-93.87zM133.25.95L.04 103.51v.02L133.27.95z"/>
        <path fill="#F58F8E" fill-rule="nonzero" d="M.04.95v30.16L39.21.95z"/>
        <path fill="#FEE18A" fill-rule="nonzero" d="M39.21.95L.04 31.11v35.9L85.84.95z"/>
        <path fill="#F3F095" fill-rule="nonzero" d="M85.84.95L.04 67.01v36.5L133.25.95z"/>
        <path fill="#55C1AE" fill-rule="nonzero" d="M133.27.95L.04 103.53v35.59L179.49.95z"/>
        <path fill="#F7B3CE" fill-rule="nonzero" d="M234.04.95h-7.37L.04 175.45v35.93l234-180.18z"/>
        <path fill="#88AEDC" fill-rule="nonzero" d="M179.49.95L.04 139.12v36.33L226.67.95z"/>
        <path fill="#F58F8E" fill-rule="nonzero" d="M234.04 31.2L.04 211.38v22.57h18.03l215.97-166.3z"/>
        <path fill="#FEE18A" fill-rule="nonzero" d="M234.04 67.65L18.07 233.95H64.7l169.34-130.39z"/>
        <path fill="#F3F095" fill-rule="nonzero" d="M234.04 103.56L64.7 233.95h47.41l121.93-93.89z"/>
        <path fill="#55C1AE" fill-rule="nonzero" d="M234.04 140.08l-121.91 93.87h46.22l75.69-58.28z"/>
        <path fill="#F7B3CE" fill-rule="nonzero" d="M234.04 212l-28.51 21.95h28.51z"/>
        <path d="M65.237 77.75c4.514.95 7.774 2.8 11.135 6.3 3.059 3.2 4.965 6.85 5.767 10.95.652 3.45.652 40.55 0 44.05-1.705 9.1-9.479 16.2-19.109 17.45-2.006.25-8.727.5-14.845.5H37V77h12.438c8.828 0 13.342.2 15.8.75zM51.545 117v25.6l5.166-.2c4.464-.15 5.417-.35 7.423-1.5 3.912-2.3 3.962-2.45 3.962-24.2 0-21.2 0-21.2-3.661-23.6-1.806-1.2-2.558-1.35-7.473-1.55l-5.417-.15V117zm79.245-32.75v7.25h-25.58v18h15.549V124H105.21l.1 9.1.15 9.15 12.69.15 12.638.1V157h-14.795c-16.451 0-19.009-.3-21.617-2.6-3.661-3.2-3.46-1.15-3.611-36.3-.1-21.9.05-32.25.401-33.65.702-2.6 3.661-5.8 6.27-6.7 1.554-.55 5.466-.7 17.704-.75h15.648v7.25zm31.647 20.85c3.712 14.25 6.821 25.6 6.922 25.25.15-.35 3.31-12.4 7.071-26.85l6.872-26.25 7.824-.15c5.918-.1 7.874.05 7.874.5s-17.354 66.2-18.357 69.5c-.702 2.3-4.463 7-6.57 8.25-2.658 1.5-6.57 1.75-8.978.5-2.156-1.1-5.015-4.4-6.47-7.5-.902-1.9-15.648-56-19.058-70l-.352-1.35h7.825c7.673 0 7.874 0 8.275 1.1.2.65 3.41 12.8 7.122 27z" fill="#FFF"/>
    </g>
</svg>

    </span>
    About
  </a>

            <a href="/privacy" class="sidebar-navigation-link crayons-link crayons-link--block">
    <span class="crayons-icon crayons-icon--default">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" width="24" height="24">
    <g transform="translate(4 4)">
        <circle fill="#FFCC4D" cx="18" cy="18" r="18"/>
        <path fill="#664500" d="M27.335 23.629a.501.501 0 00-.635-.029c-.039.029-3.922 2.9-8.7 2.9-4.766 0-8.662-2.871-8.7-2.9a.5.5 0 10-.729.657C8.7 24.472 11.788 29.5 18 29.5s9.301-5.028 9.429-5.243a.499.499 0 00-.094-.628z"/>
        <path fill="#65471B" d="M18 26.591c-.148 0-.291-.011-.438-.016v4.516h.875v-4.517c-.145.005-.289.017-.437.017z"/>
        <path fill="#FFF" d="M22 26c.016-.004-1.45.378-2.446.486-.366.042-.737.076-1.117.089v4.517H20c1.1 0 2-.9 2-2V26zm-8 0c-.016-.004 1.45.378 2.446.486.366.042.737.076 1.117.089v4.517H16c-1.1 0-2-.9-2-2V26z"/>
        <path fill="#65471B" d="M27.335 23.629a.501.501 0 00-.635-.029c-.03.022-2.259 1.668-5.411 2.47-.443.113-1.864.43-3.286.431-1.424 0-2.849-.318-3.292-.431-3.152-.802-5.381-2.448-5.411-2.47a.501.501 0 00-.729.657c.097.162 1.885 3.067 5.429 4.481v-1.829c-.016-.004 1.45.378 2.446.486.366.042.737.076 1.117.089.146.005.289.016.437.016.148 0 .291-.011.438-.016.38-.013.751-.046 1.117-.089.996-.108 2.462-.49 2.446-.486v1.829c3.544-1.414 5.332-4.319 5.429-4.481a.5.5 0 00-.095-.628zm-.711-9.605c0 1.714-.938 3.104-2.096 3.104-1.157 0-2.096-1.39-2.096-3.104s.938-3.104 2.096-3.104c1.158 0 2.096 1.39 2.096 3.104zm-17.167 0c0 1.714.938 3.104 2.096 3.104 1.157 0 2.096-1.39 2.096-3.104s-.938-3.104-2.096-3.104c-1.158 0-2.096 1.39-2.096 3.104z"/>
        <path fill="#292F33" d="M34.808 9.627c-.171-.166-1.267.274-2.376-.291-2.288-1.166-8.07-2.291-11.834.376-.403.285-2.087.333-2.558.313-.471.021-2.155-.027-2.558-.313-3.763-2.667-9.545-1.542-11.833-.376-1.109.565-2.205.125-2.376.291-.247.239-.247 1.196.001 1.436.246.239 1.477.515 1.722 1.232.247.718.249 4.958 2.213 6.424 1.839 1.372 6.129 1.785 8.848.238 2.372-1.349 2.289-4.189 2.724-5.881.155-.603.592-.907 1.26-.907s1.105.304 1.26.907c.435 1.691.351 4.532 2.724 5.881 2.719 1.546 7.009 1.133 8.847-.238 1.965-1.465 1.967-5.706 2.213-6.424.245-.717 1.476-.994 1.722-1.232.248-.24.249-1.197.001-1.436zm-20.194 3.65c-.077 1.105-.274 3.227-1.597 3.98-.811.462-1.868.743-2.974.743h-.001c-1.225 0-2.923-.347-3.587-.842-.83-.619-1.146-3.167-1.265-4.12-.076-.607-.28-2.09.388-2.318 1.06-.361 2.539-.643 4.052-.643.693 0 3.021.043 4.155.741 1.005.617.872 1.851.829 2.459zm16.278-.253c-.119.954-.435 3.515-1.265 4.134-.664.495-2.362.842-3.587.842h-.001c-1.107 0-2.163-.281-2.975-.743-1.323-.752-1.52-2.861-1.597-3.966-.042-.608-.176-1.851.829-2.468 1.135-.698 3.462-.746 4.155-.746 1.513 0 2.991.277 4.052.638.668.228.465 1.702.389 2.309z"/>
    </g>
</svg>

    </span>
    Privacy Policy
  </a>

            <a href="/terms" class="sidebar-navigation-link crayons-link crayons-link--block">
    <span class="crayons-icon crayons-icon--default">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" width="24" height="24">
    <g transform="translate(4 4)">
        <ellipse fill="#F5F8FA" cx="8.828" cy="18" rx="7.953" ry="13.281"/>
        <path fill="#E1E8ED" d="M8.828 32.031C3.948 32.031.125 25.868.125 18S3.948 3.969 8.828 3.969 17.531 10.132 17.531 18s-3.823 14.031-8.703 14.031zm0-26.562C4.856 5.469 1.625 11.09 1.625 18s3.231 12.531 7.203 12.531S16.031 24.91 16.031 18 12.8 5.469 8.828 5.469z"/>
        <circle fill="#8899A6" cx="6.594" cy="18" r="4.96"/>
        <circle fill="#292F33" cx="6.594" cy="18" r="3.565"/>
        <circle fill="#F5F8FA" cx="7.911" cy="15.443" r="1.426"/>
        <ellipse fill="#F5F8FA" cx="27.234" cy="18" rx="7.953" ry="13.281"/>
        <path fill="#E1E8ED" d="M27.234 32.031c-4.88 0-8.703-6.163-8.703-14.031s3.823-14.031 8.703-14.031S35.938 10.132 35.938 18s-3.824 14.031-8.704 14.031zm0-26.562c-3.972 0-7.203 5.622-7.203 12.531 0 6.91 3.231 12.531 7.203 12.531S34.438 24.91 34.438 18 31.206 5.469 27.234 5.469z"/>
        <circle fill="#8899A6" cx="25" cy="18" r="4.96"/>
        <circle fill="#292F33" cx="25" cy="18" r="3.565"/>
        <circle fill="#F5F8FA" cx="26.317" cy="15.443" r="1.426"/>
    </g>
</svg>

    </span>
    Terms of use
  </a>

            <a href="/contact" class="sidebar-navigation-link crayons-link crayons-link--block">
    <span class="crayons-icon crayons-icon--default">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" width="24" height="24">
    <g class="nc-icon-wrapper">
        <path fill="#FFAC33" d="M38.724 33.656c-1.239-.01-1.241 1.205-1.241 1.205H22.5c-5.246 0-9.5-4.254-9.5-9.5s4.254-9.5 9.5-9.5 9.5 4.254 9.5 9.5c0 3.062-1.6 5.897-3.852 7.633h5.434C35.022 30.849 36 28.139 36 25.361c0-7.456-6.045-13.5-13.5-13.5-7.456 0-13.5 6.044-13.5 13.5 0 7.455 6.044 13.5 13.5 13.5h14.982s-.003 1.127 1.241 1.139c1.238.012 1.228-1.245 1.228-1.245l.014-3.821s.001-1.267-1.241-1.278zM9 18.26a16.047 16.047 0 014-4.739V13c0-5 5-7 5-8s-1-1-1-1H5C4 4 4 5 4 5c0 1 5 3.333 5 7.69v5.57z"/>
        <path fill="#BE1931" d="M17.091 33.166a9.487 9.487 0 01-4.045-8.72l-3.977-.461c-.046.452-.069.911-.069 1.376 0 4.573 2.28 8.608 5.76 11.051l2.331-3.246z"/>
        <path fill="#BE1931" d="M10 29.924s-5.188-.812-5 1 5-1 5-1zm0 .312s-4.125 2.688-2.938 3.75S10 30.236 10 30.236z"/>
    </g>
</svg>

    </span>
    Contact
  </a>

        <div class="flex justify-around p-4 mt-4 border-solid border-0 border-t-1 border-base-10">
            <a
    href="https://twitter.com/thepracticaldev"
    target="_blank"
    class="crayons-link crayons-link--secondary mx-2"
    rel="noopener">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="aicr3pkj42o0rnukq3tn6f31o38wq6w4" class="crayons-icon"><title id="aicr3pkj42o0rnukq3tn6f31o38wq6w4">Twitter</title>
    <path d="M22.162 5.656a8.383 8.383 0 01-2.402.658A4.196 4.196 0 0021.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 00-7.126 3.814 11.874 11.874 0 01-8.62-4.37 4.168 4.168 0 00-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 01-1.894-.523v.052a4.185 4.185 0 003.355 4.101 4.211 4.211 0 01-1.89.072A4.185 4.185 0 007.97 16.65a8.395 8.395 0 01-6.191 1.732 11.83 11.83 0 006.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.495 8.495 0 002.087-2.165l-.001-.001z" fill="#65bbf2"></path>
</svg>

  </a>
  <a
    href="https://facebook.com/thepracticaldev"
    target="_blank"
    class="crayons-link crayons-link--secondary mx-2"
    rel="noopener">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="amqxjtekv0rx97jo309vy3z7m4nime7y" class="crayons-icon"><title id="amqxjtekv0rx97jo309vy3z7m4nime7y">Facebook</title>
    <path d="M15.402 21v-6.966h2.333l.349-2.708h-2.682V9.598c0-.784.218-1.319 1.342-1.319h1.434V5.857a19.188 19.188 0 00-2.09-.107c-2.067 0-3.482 1.262-3.482 3.58v1.996h-2.338v2.708h2.338V21H4a1 1 0 01-1-1V4a1 1 0 011-1h16a1 1 0 011 1v16a1 1 0 01-1 1h-4.598z"></path>
</svg>

  </a>
  <a
    href="https://github.com/thepracticaldev"
    target="_blank"
    class="crayons-link crayons-link--secondary mx-2"
    rel="noopener">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="aq7whojjuhulpqb36usqb3jggjozy94s" class="crayons-icon"><title id="aq7whojjuhulpqb36usqb3jggjozy94s">Github</title>
    <path d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 006.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 012.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0022 12c0-5.525-4.475-10-10-10z"></path>
</svg>

  </a>
  <a
    href="https://instagram.com/thepracticaldev"
    target="_blank"
    class="crayons-link crayons-link--secondary mx-2"
    rel="noopener">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="a72sykldesxz849on4jtrhwvisu5y0hx" class="crayons-icon"><title id="a72sykldesxz849on4jtrhwvisu5y0hx">Instagram</title>
    <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.509.5.902 1.105 1.153 1.772.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772c-.5.508-1.105.902-1.772 1.153-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 011.153-1.772A4.897 4.897 0 015.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm6.5-.25a1.25 1.25 0 10-2.5 0 1.25 1.25 0 002.5 0zM12 9a3 3 0 110 6 3 3 0 010-6z"></path>
</svg>

  </a>
  <a
    href="https://twitch.com/thepracticaldev"
    target="_blank"
    class="crayons-link crayons-link--secondary mx-2"
    rel="noopener">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="ase77p6ac3a5geoyrz9ka4b8oik7c3wm" class="crayons-icon"><title id="ase77p6ac3a5geoyrz9ka4b8oik7c3wm">Twitch</title>
    <path d="M4.3 3H21v11.7l-4.7 4.7h-3.9l-2.5 2.4H7v-2.4H3V6.2L4.3 3zM5 17.4h4v2.4h.095l2.5-2.4h3.877L19 13.872V5H5v12.4zM15 8h2v4.7h-2V8zm0 0h2v4.7h-2V8zm-5 0h2v4.7h-2V8z"></path>
</svg>

  </a>

        </div>
      </div>
  </div>
</nav>

    </div>
  </div>
  <div class="hamburger__overlay js-hamburger-trigger"></div>
</div>


        <div id="active-broadcast" class="broadcast-wrapper"></div>
        <div id="message-notice"></div>
        <div class="app-shell-loader">
          loading...
        </div>
  <div id="base-payment-pointer" data-payment-pointer="$ilp.uphold.com/24HhrUGG7ekn"></div>
<style>.app-shell-loader {display: none;}</style>
<div id="page-content" class="wrapper stories stories-show" data-current-page="stories-show">
  <div id="page-content-inner">



<style>
  .html-variant-wrapper { display: none}
</style>

<script src="https://unpkg.com/@webcomponents/webcomponentsjs@2.2.10/webcomponents-loader.js"
        integrity="sha384-3HK5hxQbkFqOIxMbpROlRmRtYl2LBZ52t+tqcjzsmr9NJuOWQxl8RgQSyFvq2lhy"
        crossorigin="anonymous" defer></script>

  <script src="https://dev.to/packs/js/runtime~clipboardCopy-cada44488f08967a129e.js" defer="defer"></script>
<script src="https://dev.to/packs/js/clipboardCopy-4cfef3b87b3401c0f4a7.chunk.js" defer="defer"></script>
<script src="https://dev.to/packs/js/runtime~webShare-4f7f138339c07309ea1f.js" defer="defer"></script>
<script src="https://dev.to/packs/js/webShare-fa7c3700e506314dcbfd.chunk.js" defer="defer"></script>
<script src="https://dev.to/packs/js/runtime~articlePage-f31f8260078022963d6a.js" defer="defer"></script>
<script src="https://dev.to/packs/js/vendors~Chat~articleForm~articlePage~modCenter-a46ae6c8731494a85fd2.chunk.js" defer="defer"></script>
<script src="https://dev.to/packs/js/articlePage~modCenter-a98e5e2a47dea0f8f3e9.chunk.js" defer="defer"></script>
<script src="https://dev.to/packs/js/articlePage-fc66dc0ee774de97db7d.chunk.js" defer="defer"></script>

    <script type="application/ld+json">
      {"@context":"http://schema.org","@type":"Article","mainEntityOfPage":{"@type":"WebPage","@id":"https://dev.to/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b"},"url":"https://dev.to/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b","image":["https://res.cloudinary.com/practicaldev/image/fetch/s---cpflkZ0--/c_imagga_scale,f_auto,fl_progressive,h_1080,q_auto,w_1080/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/96its06abhsdncffnatu.jpeg","https://res.cloudinary.com/practicaldev/image/fetch/s---gbD17Y2--/c_imagga_scale,f_auto,fl_progressive,h_720,q_auto,w_1280/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/96its06abhsdncffnatu.jpeg","https://res.cloudinary.com/practicaldev/image/fetch/s--aMp1poeZ--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/96its06abhsdncffnatu.jpeg"],"publisher":{"@context":"http://schema.org","@type":"Organization","name":"DEV Community","logo":{"@context":"http://schema.org","@type":"ImageObject","url":"https://res.cloudinary.com/practicaldev/image/fetch/s--t7tVouP9--/c_limit,f_png,fl_progressive,q_80,w_192/https://practicaldev-herokuapp-com.freetls.fastly.net/assets/devlogo-pwa-512.png","width":"192","height":"192"}},"headline":"A beginner’s journey into software development in Nigeria.","author":{"@context":"http://schema.org","@type":"Person","url":"https://dev.to/resourcefulmind","name":"Opeyemi Stephen"},"datePublished":"2021-04-29T07:36:32Z","dateModified":"2021-04-29T07:36:32Z"}
    </script>


<div class="crayons-layout crayons-layout--3-cols crayons-layout--article">
  <aside class="crayons-layout__sidebar-left" aria-label="Article actions">
    <div class="crayons-article-actions print-hidden">
  <div class="crayons-article-actions__inner">

      <button
  id="reaction-butt-like"
  aria-label="Like"
  class="crayons-reaction crayons-reaction--like"
  data-category="like"
  title="Heart">
  <span class="crayons-reaction__icon crayons-reaction__icon--inactive">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" class="crayons-icon">
    <path d="M21.179 12.794l.013.014L12 22l-9.192-9.192.013-.014A6.5 6.5 0 0112 3.64a6.5 6.5 0 019.179 9.154zM4.575 5.383a4.5 4.5 0 000 6.364L12 19.172l7.425-7.425a4.5 4.5 0 10-6.364-6.364L8.818 9.626 7.404 8.21l3.162-3.162a4.5 4.5 0 00-5.99.334l-.001.001z"></path>
</svg>

  </span>
  <span class="crayons-reaction__count" id="reaction-number-like"><span class="bg-base-40 opacity-25 p-2 inline-block radius-default"></span></span>
</button>

      <button
  id="reaction-butt-unicorn"
  aria-label="React with unicorn"
  class="crayons-reaction crayons-reaction--unicorn"
  data-category="unicorn"
  title="Unicorn">
  <span class="crayons-reaction__icon crayons-reaction__icon--inactive">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" aria-hidden="true" class="crayons-icon">
    <path d="M5.645 8.013c.013-.265-.261-.323-.4-.183-1.16 1.17-1.822 3.865-.344 7.32.294.961 1.938 3.19.84 6.131l-.003.006c-.094.255.206.404.366.263 1.395-1.226 1.933-3.593 1.1-6.375-.488-1.657-1.955-4.226-1.559-7.162zm-3.22 2.738c.05-.137-.124-.417-.326-.225-.939.893-1.316 2.863-.976 4.605.547 2.878 2.374 3.526 2.066 6.629-.028.102.176.38.348.154 1.546-2.033.409-4.453-.241-6.006-1.005-2.386-1.087-4.118-.871-5.157z" fill="#08090A"></path>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.622 7.223l8.579-3.68c.598-.256 1.087.547.6.985l-6.618 5.941c.881 2.043 2.738 6.34 2.931 6.775 1.348 3.031-2.055 4.918-3.807 3.583a7.027 7.027 0 01-.623-.574c-.974-.965-2.419-2.398-5.207-1.877.284-2.115-.313-3.737-.883-5.288-.38-1.032-.747-2.032-.837-3.124-.346-3.329 3.763-8.23 4.696-7.953.386.115.326 1.229.266 2.319-.051.948-.102 1.88.143 2.12.145.142.428.43.76.773zM11.5 16.5l2.5.5 2.5 2 1-.5-2-4.5-1.5-4-1.5-1-1-1-1-1.5L10 8l-.5 1.5 1 2.5 1 4.5z"></path>
</svg>

  </span>
  <span class="crayons-reaction__count" id="reaction-number-unicorn"><span class="bg-base-40 opacity-25 p-2 inline-block radius-default"></span></span>
</button>

      <button
  id="reaction-butt-readinglist"
  aria-label="Add to reading list"
  class="crayons-reaction crayons-reaction--readinglist"
  data-category="readinglist"
  title="Saved">
  <span class="crayons-reaction__icon crayons-reaction__icon--inactive">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" class="crayons-icon">
    <path d="M5 2h14a1 1 0 011 1v19.143a.5.5 0 01-.766.424L12 18.03l-7.234 4.536A.5.5 0 014 22.143V3a1 1 0 011-1zm13 2H6v15.432l6-3.761 6 3.761V4z"></path>
</svg>

  </span>
  <span class="crayons-reaction__count" id="reaction-number-readinglist"><span class="bg-base-40 opacity-25 p-2 inline-block radius-default"></span></span>
</button>


    <div class="align-center m:relative">
      <button id="article-show-more-button" class="dropbtn crayons-btn crayons-btn--ghost-dimmed crayons-btn--icon-rounded" aria-label="Toggle dropdown menu">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="aiema6zntviej87rcnjce19ad640urcq" class="dropdown-icon crayons-icon"><title id="aiema6zntviej87rcnjce19ad640urcq">More...</title><path fill-rule="evenodd" clip-rule="evenodd" d="M7 12a2 2 0 11-4 0 2 2 0 014 0zm7 0a2 2 0 11-4 0 2 2 0 014 0zm5 2a2 2 0 100-4 2 2 0 000 4z"></path></svg>

      </button>
      <div class="crayons-dropdown p-1 right-1 left-1 s:left-auto bottom-100 m:bottom-0 m:right-auto m:left-100 fs-base">
        <clipboard-copy for="article-copy-link-input" aria-live="polite" aria-controls="article-copy-link-announcer" class="dropdown-link-row">
          <div class="flex items-center">
            <input type="text" id="article-copy-link-input" value="https://dev.to/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b" class="crayons-textfield" readonly />
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" id="article-copy-icon" role="img" aria-labelledby="aqk0gwj78pxv0c4or79bhyvwmcoql96n" class="crayons-icon mx-2 shrink-0"><title id="aqk0gwj78pxv0c4or79bhyvwmcoql96n">Copy article link to the clipboard</title>
    <path d="M7 6V3a1 1 0 011-1h12a1 1 0 011 1v14a1 1 0 01-1 1h-3v3c0 .552-.45 1-1.007 1H4.007A1 1 0 013 21l.003-14c0-.552.45-1 1.007-1H7zm2 0h8v10h2V4H9v2zm-2 5v2h6v-2H7zm0 4v2h6v-2H7z"></path>
</svg>

          </div>
          <div id="article-copy-link-announcer" class="crayons-notice crayons-notice--success my-2 p-1" aria-live="polite" hidden>Copied to Clipboard</div>
        </clipboard-copy>
        <web-share-wrapper shareurl="https://dev.to/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b" sharetext="A beginner’s journey into software development in Nigeria." template="web-share-button">
          <a
            target="_blank"
            class="dropdown-link-row crayons-link crayons-link--block"
            rel="noopener"
            href='https://twitter.com/intent/tweet?text="A%20beginner%E2%80%99s%20journey%20into%20software%20development%20in%20Nigeria." by @devVGBG %23DEVCommunity https://dev.to/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b'>
            Share to Twitter
          </a>
          <a
            target="_blank"
            class="dropdown-link-row crayons-link crayons-link--block"
            rel="noopener"
            href="https://www.linkedin.com/shareArticle?mini=true&url=https://dev.to/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b&title=A beginner’s journey into software development in Nigeria.&summary=No one really writes about the pain involved in learning to code in Nigeria and I don’t know why.  Fi...&source=DEV Community">
            Share to LinkedIn
          </a>
          <a
            target="_blank"
            class="dropdown-link-row crayons-link crayons-link--block"
            rel="noopener"
            href="https://www.reddit.com/submit?url=https://dev.to/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b&title=A beginner’s journey into software development in Nigeria.">
            Share to Reddit
          </a>
          <a
            target="_blank"
            class="dropdown-link-row crayons-link crayons-link--block"
            rel="noopener"
            href="https://news.ycombinator.com/submitlink?u=https://dev.to/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b&t=A beginner’s journey into software development in Nigeria.">
            Share to Hacker News
          </a>
          <a
            target="_blank"
            class="dropdown-link-row crayons-link crayons-link--block"
            rel="noopener"
            href="https://www.facebook.com/sharer.php?u=https://dev.to/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b">
            Share to Facebook
          </a>
        </web-share-wrapper>
        <template id="web-share-button">
          <a href="#" class="dropdown-link-row crayons-link crayons-link--block">Share Post</a>
        </template>
        <a href="/report-abuse" class="dropdown-link-row crayons-link crayons-link--block">Report Abuse</a>
      </div>
    </div>
  </div>
</div>

      <div class="html-variant-wrapper" id="html-variant-article-show-below-article" data-variant-id="382">
        <div></div>
      </div>

  </aside>

  <main id="main-content" class="crayons-layout__content grid gap-4">
    <div class="article-wrapper">


      <article class="crayons-card crayons-article mb-4"
        id="article-show-container"
        data-author-id="435270"
        data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b"
        data-published="true">
        <header class="crayons-article__header" id="main-title">
            <div class="crayons-article__cover">
              <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--7VrL057e--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/96its06abhsdncffnatu.jpeg" width="1000" height="420" style="background-color:#dddddd;" class="crayons-article__cover__image" alt="Cover image for A beginner’s journey into software development in Nigeria.">
            </div>

          <div class="crayons-article__header__meta">
            <h1 class="fs-3xl m:fs-4xl l:fs-5xl fw-bold s:fw-heavy lh-tight mb-4 medium">
              A beginner’s journey into software development in Nigeria.
            </h1>

              <div class="mb-4 spec__tags">
                  <a class="crayons-tag mr-1" href="/t/beginners" style="background-color:#008335;color:#FFFFFF"><span class="crayons-tag__prefix">#</span>beginners</a>
                  <a class="crayons-tag mr-1" href="/t/webdev" style="background-color:#562765;color:#ffffff"><span class="crayons-tag__prefix">#</span>webdev</a>
                  <a class="crayons-tag mr-1" href="/t/career" style="background-color:#2A2566;color:#FFFFFF"><span class="crayons-tag__prefix">#</span>career</a>
                  <a class="crayons-tag mr-1" href="/t/javascript" style="background-color:#F7DF1E;color:#000000"><span class="crayons-tag__prefix">#</span>javascript</a>
              </div>

            <div class="crayons-article__subheader">
              <a href="/resourcefulmind" class="flex items-center mr-4 mb-4 s:mb-0 fw-medium crayons-link">
                <span class="crayons-avatar crayons-avatar--l mr-2"><img class="crayons-avatar__image" src="https://res.cloudinary.com/practicaldev/image/fetch/s--6y949wgP--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/435270/7ca3876e-ca85-478e-a2fa-c634f4a78121.png" alt="resourcefulmind profile image" /></span>
                Opeyemi Stephen
              </a>

              <span class="fs-s mb-4 s:mb-0">
                  <time datetime="2021-04-29T07:36:32Z" class="date-no-year">Apr 29</time>


                <span class="mr-4">・3 min read</span>
              </span>
              <span id="action-space" class="mb-4 s:mb-0"></span>
            </div>
          </div>
        </header>

        <div class="crayons-article__main">

          <div class="crayons-article__body text-styles spec__body" data-article-id="682090" id="article-body">
            <p>No one really writes about the pain involved in learning to code in Nigeria and I don’t know why.</p>

<p>First of all, peep the the cover picture on this post, it represents an art-work for a song by a music artiste in Nigeria titled “Thunder Fire You” by Ric Hassani. Literal meaning...may thunder strike a person dead. </p>

<p>It was sung as a song for a heartbroken man but I put that up there because there’s a lot of forces designed to frustrate the average young Nigerian mind by the Government.</p>

<p>I started my developer journey, no prior computer science degree, delving into a new career because well, there are simply not enough jobs. I said what I said.</p>

<p>And now, it has only gotten worse...</p>

<ul>
<li><p>Laptop prices have doubled and are now tripling due to the weak strength of the Naira against the dollar. Some developer advocates like Hack Sultan, Prosper Otemuyiwa and Adora Nwodo have been doing their best to help the Nigerian community but for how long? Trust the government to try and take the plaudits when a Nigerian dev builds a world class product tho.</p></li>
<li><p>Data!!!! A successful developer needs to learn to know how to ask the right questions on Google and StackOverflow yeah? </p></li>
</ul>

<p>But you see,in order to use Google, you actually have to be connected to the internet...Now the average Nigerian earns 2000 naira daily and the least internet plans go for half that price!<br>
Funny story? Many people do not even earn that...tell me again how it’s supposed to be easy to just be in the “zone” to code? </p>

<p>The way I see it, to use YouTube and the plenty resources available online for self-study, you’ve got to have access to the internet and how are you supposed to cope with spending at least 12-20 thousand naira on data monthly when you haven’t even started getting paid? And to plunge you into further depression, you’re given an option of “borrowing” data...sighs.</p>

<ul>
<li>Now to the most annoying part...EPILEPTIC...nah scratch that...NO POWER SUPPLY!!! Paint this scenario in your head...</li>
</ul>

<p>Young and defiant newbie dev who is trying their best to scale through, has been able to get a laptop, buy/borrow data and joined a free boot camp or tried to do some self study. This young developer wants to maximize their time and draws up a study schedule so they can also get their tasks and assignments submitted early enough. <br>
There’s a problem tho...”PHCN”(the corrupt organization in charge of supplying power) only gives them electricity 3 hours(phased irregularly) daily and coupled with that, they still have to “share” light in their street because the transformer is not powerful enough to supply the 12 streets using it.<br>
Their street uses the epileptic power for two days and there’s a total blackout for the third day. <br>
In total they have +/- 6 hours of a possible 72hours to power their devices, get studies in and also do their assignments. Then you find them at Bet9ja shops (sports betting kiosks) trying to charge and learning to code with street kings(agbero and urchins) shouting in the background trying to stake bets on virtual football games.</p>

<p>That is just a peek into the life of most newbie Nigerian developers. I just thought you should know. I deliberately excluded some parts because it gets ugly as you go. Feel free to add your experiences and draw strength from each other. Selah.</p>

<p>Despite all this, we still do our best yeah? But think of the talents being wasted because they do not have the psychological capacity to cope with these kinds of problems...just think about it for a minute?</p>


          </div>

        </div>
          <section id="comments" data-updated-at="2021-05-26 18:50:57 UTC" class="text-padding mb-4 border-t-1 border-0 border-solid border-base-10">
      <header class="relative flex justify-between items-center mb-6">
        <h2 class="crayons-subtitle-1">Discussion <span class="js-comments-count" data-comments-count="108">(108)</span></h2>
        <div id="comment-subscription" class="print-hidden">
          <div role="presentation" class="crayons-btn-group">
            <span class="crayons-btn crayons-btn--outlined">Subscribe</span>
          </div>
        </div>
      </header>

      <div
        id="comments-container"
        data-testid="comments-container"
        data-commentable-id="682090"
        data-commentable-type="Article"
        data-has-recent-comment-activity="true">
        <div id="response-templates-data" class="hidden"></div>
<script src="https://dev.to/packs/js/runtime~validateFileInputs-4afb2cb9579ea843a53d.js" defer="defer"></script>
<script src="https://dev.to/packs/js/validateFileInputs-81bd332e262ca205ccde.chunk.js" defer="defer"></script>
<script src="https://dev.to/packs/js/runtime~responseTemplates-7029638bb8e24f2ec530.js" defer="defer"></script>
<script src="https://dev.to/packs/js/responseTemplates-11eb5b6876fc342c9a29.chunk.js" defer="defer"></script>


<form class="comment-form print-hidden" id="new_comment" action="/comments" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" />

  <input type="hidden" name="authenticity_token" value="NOTHING" id="new_comment_authenticity_token">

    <input value="682090" type="hidden" name="comment[commentable_id]" id="comment_commentable_id" />
    <input value="Article" type="hidden" name="comment[commentable_type]" id="comment_commentable_type" />


  <span class="crayons-avatar m:crayons-avatar--l mr-2 shrink-0">
    <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--RmY55OKL--/c_limit,f_auto,fl_progressive,q_auto,w_256/https://practicaldev-herokuapp-com.freetls.fastly.net/assets/devlogo-pwa-512.png" width="32" height="32" alt="pic" class="crayons-avatar__image overflow-hidden" id="comment-primary-user-profile--avatar">
  </span>
  <div class="comment-form__inner">
    <div class="comment-form__field">
      <textarea placeholder="Add to the discussion" onfocus="handleFocus(event)" onkeyup="handleKeyUp(event)" onkeydown="handleKeyDown(event)" oninput="handleChange(event)" id="text-area" required="required" class="crayons-textfield comment-textarea crayons-textfield--ghost" aria-label="Add a comment to the discussion" name="comment[body_markdown]">
</textarea>
      <div class="comment-form__toolbar">
        <div class="editor-image-upload">
          <input type="file" id="image-upload-main" name="file" accept="image/*" style="display:none">
          <button type="button" class="crayons-btn crayons-btn--s crayons-btn--icon-left crayons-btn--ghost-dimmed" onclick="handleImageUpload(event,'main')">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" class="crayons-icon">
    <path d="M20 5H4v14l9.292-9.294a1 1 0 011.414 0L20 15.01V5zM2 3.993A1 1 0 012.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 01-.992.993H2.992A.993.993 0 012 20.007V3.993zM8 11a2 2 0 110-4 2 2 0 010 4z"></path>
</svg>

            <span class="hidden s:inline-block" aria-hidden="false">Upload image</span>
          </button>
          <label class="image-upload-file-label" id="image-upload-file-label-main"></label>
          <input type="submit" id='image-upload-submit-main' value="Upload" style="display:none">
          <input class="hidden" id="uploaded-image-main" />
        </div>

        <button type="button" class="crayons-btn crayons-btn--s crayons-btn--icon-left crayons-btn--ghost-dimmed response-templates-button" title="Use a response template" data-has-listener="false" data-form-id="new_comment">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" class="crayons-icon">
    <path d="M3 18.5V5a3 3 0 013-3h14a1 1 0 011 1v18a1 1 0 01-1 1H6.5A3.5 3.5 0 013 18.5zM19 20v-3H6.5a1.5 1.5 0 100 3H19zM10 4H6a1 1 0 00-1 1v10.337A3.485 3.485 0 016.5 15H19V4h-2v8l-3.5-2-3.5 2V4z"></path>
</svg>

          <span class="hidden s:inline-block" aria-hidden="false">Templates</span>
        </button>

        <a href="/p/editor_guide" class="crayons-btn crayons-btn--ghost-dimmed crayons-btn--icon crayons-btn--s ml-auto" target="_blank" rel="noopener" title="Markdown Guide">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" role="img" aria-labelledby="ast4xk7636kokg8k0m1hg3us4o00uumr" class="crayons-icon"><title id="ast4xk7636kokg8k0m1hg3us4o00uumr">Editor guide</title>
    <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16zM11 7h2v2h-2V7zm0 4h2v6h-2v-6z"></path>
</svg>

        </a>
      </div>
    </div>

    <div class="response-templates-container crayons-card crayons-card--secondary p-4 mb-4 comment-form__templates fs-base hidden">
      <header>
        <button type="button" class="personal-template-button active" data-target-type="personal" data-form-id="new_comment">Personal</button>
        <button type="button" class="moderator-template-button hidden" data-target-type="moderator" data-form-id="new_comment">Moderator</button>
      </header>

      <img class="loading-img hidden" src="https://dev.to/assets/loading-ellipsis-b714cf681fd66c853ff6f03dd161b77aa3c80e03cdc06f478b695f42770421e9.svg" alt="loading">

      <div class="personal-responses-container">
      </div>
      <div class="moderator-responses-container hidden">
      </div>

      <a target="_blank" rel="noopener nofollow" href="/settings/response-templates">
        Create template
      </a>
      <p>Templates let you quickly answer FAQs or store snippets for re-use.</p>
    </div>

    <div class="comment-form__preview text-styles text-styles--secondary" id="preview-div"></div>

    <div class="comment-form__buttons mb-4">
      <button type="submit" class="crayons-btn mr-2 js-btn-enable" onclick="validateField(event)" disabled>Submit</button>
      <button type="button" class="preview-toggle crayons-btn crayons-btn--secondary comment-action-preview js-btn-enable mr-2" disabled>Preview</button>
      <a href="/404.html" class="crayons-btn crayons-btn--ghost js-btn-dismiss hidden">Dismiss</a>
    </div>
  </div>

  <div class="code-of-conduct" id="toggle-code-of-conduct-checkbox"></div>
</form>


        <div class="comments" id="comment-trees-container">
                    <details class="comment-wrapper js-comment-wrapper comment-wrapper--deep-0 root" open>
      <summary>
        <span class="m:mx-1 inline-block align-middle">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="aksn51rs7r77rdzzu0v9sa8hteie8cva" class="crayons-icon expanded"><title id="aksn51rs7r77rdzzu0v9sa8hteie8cva">Collapse</title>
    <path d="M12 10.677L8 6.935 9 6l3 2.807L15 6l1 .935-4 3.742zm0 4.517L9 18l-1-.935 4-3.742 4 3.742-1 .934-3-2.805z"></path>
</svg>

          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="a5vxlgpv3kfmil9ps8lb789u5b62v9oj" class="crayons-icon collapsed"><title id="a5vxlgpv3kfmil9ps8lb789u5b62v9oj">Expand</title>
    <path d="M12 18l-4-3.771 1-.943 3 2.829 3-2.829 1 .943L12 18zm0-10.115l-3 2.829-1-.943L12 6l4 3.771-1 .942-3-2.828z"></path>
</svg>

        </span>
        <span class="js-collapse-comment-content inline-block align-middle"></span>
      </summary>
      <div
        id="comment-node-704277"
        class="
          comment single-comment-node

          root
          comment--deep-0

        "
        data-comment-id="704277"
        data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e1lf"
        data-comment-author-id="622811"
        data-content-user-id="622811">

<div class="comment__inner">
    <a href="https://dev.to/tracycod3r" class="shrink-0 crayons-avatar m:crayons-avatar--l mt-4 m:mt-3">
    <img class="crayons-avatar__image" width="32" height="32" src="https://res.cloudinary.com/practicaldev/image/fetch/s--qyGNhyyC--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/622811/86d24789-1692-4452-b360-15c7b09f3349.jpeg" alt="tracycod3r profile image" />
  </a>


  <div class="inner-comment comment__details">
    <div class="comment__content crayons-card">



        <header class="comment__header">
  <a href="https://dev.to/tracycod3r" class="crayons-link crayons-link--secondary flex items-center fw-medium">
    <span class="js-comment-username">Tracy Nuwagaba</span>
  </a>

  <span class="color-base-30 px-2" role="presentation">&bull;</span>

<a href="https://dev.to/tracycod3r/comment/1e1lf" class="comment-date crayons-link crayons-link--secondary fs-s">
  <time datetime="2021-04-29T08:11:45Z">
    Apr 29
  </time>

</a>


  <div class="comment__dropdown">
    <button class="dropbtn comment__dropdown-trigger crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon" aria-label="Toggle dropdown menu" aria-haspopup="true">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="a9fevzxr56gc63f0gybjjvqbphwpcp1t" class="crayons-icon pointer-events-none"><title id="a9fevzxr56gc63f0gybjjvqbphwpcp1t">Dropdown menu</title>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.25 12a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm5.25 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm3.75 1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
</svg>

    </button>
    <ul class="crayons-dropdown p-1 right-1 s:right-0 s:left-auto fs-base dropdown">
      <li><a href="https://dev.to/tracycod3r/comment/1e1lf" class="crayons-link crayons-link--block permalink-copybtn" aria-label="Copy link to Tracy Nuwagaba's comment" data-no-instant>Copy link</a></li>
      <li class="comment-actions hidden" data-user-id="622811" data-action="settings-button" data-path="https://dev.to/tracycod3r/comment/1e1lf/settings" aria-label="Go to Tracy Nuwagaba's comment settings"></li>
      <li class="comment-actions hidden" data-action="hide-button" data-commentable-user-id="435270" data-user-id="622811">
        <a href="#" class="crayons-link crayons-link--block hide-comment" data-hide-type="hide" data-comment-id="704277" aria-label="Hide Tracy Nuwagaba's comment">
          Hide
        </a>
      </li>
      <li class="mod-actions hidden mod-actions-comment-button" data-path="https://dev.to/tracycod3r/comment/1e1lf/mod" aria-label="Moderate Tracy Nuwagaba's comment"></li>
      <li class="report-abuse-link-wrapper" data-path="/report-abuse?url=https://dev.to/tracycod3r/comment/1e1lf" aria-label="Report Tracy Nuwagaba's comment as abusive or violating our code of conduct and/or terms and conditions"></li>
      <li class="current-user-actions"></li>
    </ul>
  </div>
</header>


        <div
          class="
            comment__body
            text-styles
            text-styles--secondary
            body

          ">
          <p>All the above happens in Uganda, however on top of that we pay taxes for the internet. If you don't pay internet tax which is going to be increased soon, no internet services 🤦‍♀️.</p>

<p>It takes God's grace to be an African youth.</p>


        </div>
    </div>

    <footer class="comment__footer print-hidden">
  <button
    class="crayons-btn crayons-btn--ghost crayons-btn--icon-left crayons-btn--s mr-1 reaction-like inline-flex reaction-button"
    id="button-for-comment-704277"
    data-comment-id="704277"
    title="heart">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="a3ckh5uhly2wz0trkyl62lili9gtfj4t" class="crayons-icon reaction-icon not-reacted"><title id="a3ckh5uhly2wz0trkyl62lili9gtfj4t">Favorite heart outline button</title><path d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"></path></svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="akra0znv1nbwemhka8wstzu3fgpwn96l" class="crayons-icon reaction-icon--like reaction-icon reacted"><title id="akra0znv1nbwemhka8wstzu3fgpwn96l">Favorite heart outline button</title>
    <path d="M5.116 12.595a4.875 4.875 0 015.56-7.68h-.002L7.493 8.098l1.06 1.061 3.181-3.182a4.875 4.875 0 016.895 6.894L12 19.5l-6.894-6.894.01-.01z"></path>
</svg>

    <span class="reactions-count">
      26
    </span>
    <span class="reactions-label hidden m:inline-block">
      &nbsp;likes
    </span>
  </button>

    <a
      class="actions crayons-btn crayons-btn--ghost crayons-btn--s crayons-btn--icon-left toggle-reply-form mr-1 inline-flex"
      href="#/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/new/1e1lf"
      data-comment-id="704277"
      data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e1lf"
      rel="nofollow">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="a3j4x68bkkui7swbgxiah5m0ouuurir5" class="crayons-icon reaction-icon not-reacted"><title id="a3j4x68bkkui7swbgxiah5m0ouuurir5">Comment button</title><path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path></svg>

      <span class="hidden m:inline-block">Reply</span>
    </a>

</footer>

  </div>
</div>
    <details class="comment-wrapper js-comment-wrapper comment-wrapper--deep-1 child" open>
      <summary>
        <span class="mx-0 inline-block align-middle">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="acihyvrl9tantbwvjtyar28puqpzaghh" class="crayons-icon expanded"><title id="acihyvrl9tantbwvjtyar28puqpzaghh">Collapse</title>
    <path d="M12 10.677L8 6.935 9 6l3 2.807L15 6l1 .935-4 3.742zm0 4.517L9 18l-1-.935 4-3.742 4 3.742-1 .934-3-2.805z"></path>
</svg>

          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="ajwzqw3u24ydr33mrtb68p6fl3k0267z" class="crayons-icon collapsed"><title id="ajwzqw3u24ydr33mrtb68p6fl3k0267z">Expand</title>
    <path d="M12 18l-4-3.771 1-.943 3 2.829 3-2.829 1 .943L12 18zm0-10.115l-3 2.829-1-.943L12 6l4 3.771-1 .942-3-2.828z"></path>
</svg>

        </span>
        <span class="js-collapse-comment-content inline-block align-middle"></span>
      </summary>
      <div
        id="comment-node-704350"
        class="
          comment single-comment-node

          child
          comment--deep-1

        "
        data-comment-id="704350"
        data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e1oa"
        data-comment-author-id="435270"
        data-content-user-id="435270">

<div class="comment__inner">
    <a href="https://dev.to/resourcefulmind" class="shrink-0 crayons-avatar mt-4">
    <img class="crayons-avatar__image" width="32" height="32" src="https://res.cloudinary.com/practicaldev/image/fetch/s--6y949wgP--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/435270/7ca3876e-ca85-478e-a2fa-c634f4a78121.png" alt="resourcefulmind profile image" />
  </a>


  <div class="inner-comment comment__details">
    <div class="comment__content crayons-card">



        <header class="comment__header">
  <a href="https://dev.to/resourcefulmind" class="crayons-link crayons-link--secondary flex items-center fw-medium">
    <span class="js-comment-username">Opeyemi Stephen</span>
      <span class="crayons-tooltip inline-block spec-op-author -mr-2" data-tooltip="Author">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="a9zn6nht8d5fkzje6ndj69zbuqa8e9pr" class="crayons-icon"><title id="a9zn6nht8d5fkzje6ndj69zbuqa8e9pr">Author</title>
    <path d="M12 8.25a6 6 0 110 12 6 6 0 010-12zm0 2.625l-.992 2.01-2.218.322 1.605 1.564-.379 2.21L12 15.937l1.984 1.043-.379-2.209 1.605-1.564-2.218-.323L12 10.875zm.75-6.376l3.75.001v2.25l-1.022.854a7.45 7.45 0 00-2.728-.817V4.5zm-1.5 0v2.288a7.451 7.451 0 00-2.727.816L7.5 6.75V4.5h3.75z"></path>
</svg>

      </span>
  </a>

  <span class="color-base-30 px-2" role="presentation">&bull;</span>

<a href="https://dev.to/resourcefulmind/comment/1e1oa" class="comment-date crayons-link crayons-link--secondary fs-s">
  <time datetime="2021-04-29T10:55:57Z">
    Apr 29
  </time>

</a>


  <div class="comment__dropdown">
    <button class="dropbtn comment__dropdown-trigger crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon" aria-label="Toggle dropdown menu" aria-haspopup="true">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="a1xtuth2p2lkn24s9bntjjywqrzlzl5v" class="crayons-icon pointer-events-none"><title id="a1xtuth2p2lkn24s9bntjjywqrzlzl5v">Dropdown menu</title>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.25 12a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm5.25 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm3.75 1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
</svg>

    </button>
    <ul class="crayons-dropdown p-1 right-1 s:right-0 s:left-auto fs-base dropdown">
      <li><a href="https://dev.to/resourcefulmind/comment/1e1oa" class="crayons-link crayons-link--block permalink-copybtn" aria-label="Copy link to Opeyemi Stephen's comment" data-no-instant>Copy link</a></li>
      <li class="comment-actions hidden" data-user-id="435270" data-action="settings-button" data-path="https://dev.to/resourcefulmind/comment/1e1oa/settings" aria-label="Go to Opeyemi Stephen's comment settings"></li>
      <li class="comment-actions hidden" data-action="hide-button" data-commentable-user-id="435270" data-user-id="435270">
        <a href="#" class="crayons-link crayons-link--block hide-comment" data-hide-type="hide" data-comment-id="704350" aria-label="Hide Opeyemi Stephen's comment">
          Hide
        </a>
      </li>
      <li class="mod-actions hidden mod-actions-comment-button" data-path="https://dev.to/resourcefulmind/comment/1e1oa/mod" aria-label="Moderate Opeyemi Stephen's comment"></li>
      <li class="report-abuse-link-wrapper" data-path="/report-abuse?url=https://dev.to/resourcefulmind/comment/1e1oa" aria-label="Report Opeyemi Stephen's comment as abusive or violating our code of conduct and/or terms and conditions"></li>
      <li class="current-user-actions"></li>
    </ul>
  </div>
</header>


        <div
          class="
            comment__body
            text-styles
            text-styles--secondary
            body

          ">
          <p>Let’s not even get started on the fact that as soon as you make it either on or off the shores of the country, the government comes with pomp and pageantry to say “that’s a product of our nation”</p>

<p>I think it’s very ridiculous to pay internet taxes and worse of all they still want to increase it?!!</p>


        </div>
    </div>

    <footer class="comment__footer print-hidden">
  <button
    class="crayons-btn crayons-btn--ghost crayons-btn--icon-left crayons-btn--s mr-1 reaction-like inline-flex reaction-button"
    id="button-for-comment-704350"
    data-comment-id="704350"
    title="heart">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="apnnvgyhgwmlqluoocgtcd6cvmwp1s2j" class="crayons-icon reaction-icon not-reacted"><title id="apnnvgyhgwmlqluoocgtcd6cvmwp1s2j">Favorite heart outline button</title><path d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"></path></svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="afehny16silqesme7p4unjd576cqqmdg" class="crayons-icon reaction-icon--like reaction-icon reacted"><title id="afehny16silqesme7p4unjd576cqqmdg">Favorite heart outline button</title>
    <path d="M5.116 12.595a4.875 4.875 0 015.56-7.68h-.002L7.493 8.098l1.06 1.061 3.181-3.182a4.875 4.875 0 016.895 6.894L12 19.5l-6.894-6.894.01-.01z"></path>
</svg>

    <span class="reactions-count">
      14
    </span>
    <span class="reactions-label hidden m:inline-block">
      &nbsp;likes
    </span>
  </button>

    <a
      class="actions crayons-btn crayons-btn--ghost crayons-btn--s crayons-btn--icon-left toggle-reply-form mr-1 inline-flex"
      href="#/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/new/1e1oa"
      data-comment-id="704350"
      data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e1oa"
      rel="nofollow">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="aqhhhbtfextpzaow3cqnzw2305hq7wtt" class="crayons-icon reaction-icon not-reacted"><title id="aqhhhbtfextpzaow3cqnzw2305hq7wtt">Comment button</title><path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path></svg>

      <span class="hidden m:inline-block">Reply</span>
    </a>

</footer>

  </div>
</div>


      </div>
    </details>
    <details class="comment-wrapper js-comment-wrapper comment-wrapper--deep-1 child" open>
      <summary>
        <span class="mx-0 inline-block align-middle">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="aabaicu7ux9kjcsj89vkat4b7ywitm5e" class="crayons-icon expanded"><title id="aabaicu7ux9kjcsj89vkat4b7ywitm5e">Collapse</title>
    <path d="M12 10.677L8 6.935 9 6l3 2.807L15 6l1 .935-4 3.742zm0 4.517L9 18l-1-.935 4-3.742 4 3.742-1 .934-3-2.805z"></path>
</svg>

          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="a9oom6crzj8lmd6mk1ssiam5bos17omh" class="crayons-icon collapsed"><title id="a9oom6crzj8lmd6mk1ssiam5bos17omh">Expand</title>
    <path d="M12 18l-4-3.771 1-.943 3 2.829 3-2.829 1 .943L12 18zm0-10.115l-3 2.829-1-.943L12 6l4 3.771-1 .942-3-2.828z"></path>
</svg>

        </span>
        <span class="js-collapse-comment-content inline-block align-middle"></span>
      </summary>
      <div
        id="comment-node-704385"
        class="
          comment single-comment-node

          child
          comment--deep-1

        "
        data-comment-id="704385"
        data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e1pj"
        data-comment-author-id="127311"
        data-content-user-id="127311">

<div class="comment__inner">
    <a href="https://dev.to/garrett" class="shrink-0 crayons-avatar mt-4">
    <img class="crayons-avatar__image" width="32" height="32" src="https://res.cloudinary.com/practicaldev/image/fetch/s--oMljllsB--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/127311/973db5c2-aaf4-4663-ad12-737ccc518667.jpeg" alt="garrett profile image" />
  </a>


  <div class="inner-comment comment__details">
    <div class="comment__content crayons-card">



        <header class="comment__header">
  <a href="https://dev.to/garrett" class="crayons-link crayons-link--secondary flex items-center fw-medium">
    <span class="js-comment-username">Garrett</span>
  </a>

  <span class="color-base-30 px-2" role="presentation">&bull;</span>

<a href="https://dev.to/garrett/comment/1e1pj" class="comment-date crayons-link crayons-link--secondary fs-s">
  <time datetime="2021-04-29T11:49:54Z">
    Apr 29
  </time>

</a>


  <div class="comment__dropdown">
    <button class="dropbtn comment__dropdown-trigger crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon" aria-label="Toggle dropdown menu" aria-haspopup="true">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="aqgzvlpd7x18u1pjoqdezsrdrr5kt15w" class="crayons-icon pointer-events-none"><title id="aqgzvlpd7x18u1pjoqdezsrdrr5kt15w">Dropdown menu</title>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.25 12a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm5.25 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm3.75 1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
</svg>

    </button>
    <ul class="crayons-dropdown p-1 right-1 s:right-0 s:left-auto fs-base dropdown">
      <li><a href="https://dev.to/garrett/comment/1e1pj" class="crayons-link crayons-link--block permalink-copybtn" aria-label="Copy link to Garrett's comment" data-no-instant>Copy link</a></li>
      <li class="comment-actions hidden" data-user-id="127311" data-action="settings-button" data-path="https://dev.to/garrett/comment/1e1pj/settings" aria-label="Go to Garrett's comment settings"></li>
      <li class="comment-actions hidden" data-action="hide-button" data-commentable-user-id="435270" data-user-id="127311">
        <a href="#" class="crayons-link crayons-link--block hide-comment" data-hide-type="hide" data-comment-id="704385" aria-label="Hide Garrett's comment">
          Hide
        </a>
      </li>
      <li class="mod-actions hidden mod-actions-comment-button" data-path="https://dev.to/garrett/comment/1e1pj/mod" aria-label="Moderate Garrett's comment"></li>
      <li class="report-abuse-link-wrapper" data-path="/report-abuse?url=https://dev.to/garrett/comment/1e1pj" aria-label="Report Garrett's comment as abusive or violating our code of conduct and/or terms and conditions"></li>
      <li class="current-user-actions"></li>
    </ul>
  </div>
</header>


        <div
          class="
            comment__body
            text-styles
            text-styles--secondary
            body

          ">
          <p>I know <a href="https://www.hackersforcharity.org/" rel="nofollow">Hackers for Charity</a> is trying to help but...it's definitely a struggle.</p>


        </div>
    </div>

    <footer class="comment__footer print-hidden">
  <button
    class="crayons-btn crayons-btn--ghost crayons-btn--icon-left crayons-btn--s mr-1 reaction-like inline-flex reaction-button"
    id="button-for-comment-704385"
    data-comment-id="704385"
    title="heart">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="a6ybcajpgsqp85ck0kopkmtmgjbb8610" class="crayons-icon reaction-icon not-reacted"><title id="a6ybcajpgsqp85ck0kopkmtmgjbb8610">Favorite heart outline button</title><path d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"></path></svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="aapkyxxisgojf5rpozr2y0jgmkyg8o78" class="crayons-icon reaction-icon--like reaction-icon reacted"><title id="aapkyxxisgojf5rpozr2y0jgmkyg8o78">Favorite heart outline button</title>
    <path d="M5.116 12.595a4.875 4.875 0 015.56-7.68h-.002L7.493 8.098l1.06 1.061 3.181-3.182a4.875 4.875 0 016.895 6.894L12 19.5l-6.894-6.894.01-.01z"></path>
</svg>

    <span class="reactions-count">
      9
    </span>
    <span class="reactions-label hidden m:inline-block">
      &nbsp;likes
    </span>
  </button>

    <a
      class="actions crayons-btn crayons-btn--ghost crayons-btn--s crayons-btn--icon-left toggle-reply-form mr-1 inline-flex"
      href="#/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/new/1e1pj"
      data-comment-id="704385"
      data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e1pj"
      rel="nofollow">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="akhh7jcl5ana1rqqxrmngbcggom9p4p9" class="crayons-icon reaction-icon not-reacted"><title id="akhh7jcl5ana1rqqxrmngbcggom9p4p9">Comment button</title><path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path></svg>

      <span class="hidden m:inline-block">Reply</span>
    </a>

</footer>

  </div>
</div>
    <details class="comment-wrapper js-comment-wrapper comment-wrapper--deep-2 child" open>
      <summary>
        <span class="mx-0 inline-block align-middle">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="a9k58sikhgqx2z3pvh21k8vtc1wbqh1x" class="crayons-icon expanded"><title id="a9k58sikhgqx2z3pvh21k8vtc1wbqh1x">Collapse</title>
    <path d="M12 10.677L8 6.935 9 6l3 2.807L15 6l1 .935-4 3.742zm0 4.517L9 18l-1-.935 4-3.742 4 3.742-1 .934-3-2.805z"></path>
</svg>

          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="a4i2p77vo2cqzdt85v6phoc68k9khg7i" class="crayons-icon collapsed"><title id="a4i2p77vo2cqzdt85v6phoc68k9khg7i">Expand</title>
    <path d="M12 18l-4-3.771 1-.943 3 2.829 3-2.829 1 .943L12 18zm0-10.115l-3 2.829-1-.943L12 6l4 3.771-1 .942-3-2.828z"></path>
</svg>

        </span>
        <span class="js-collapse-comment-content inline-block align-middle"></span>
      </summary>
      <div
        id="comment-node-704606"
        class="
          comment single-comment-node

          child
          comment--deep-2

        "
        data-comment-id="704606"
        data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e286"
        data-comment-author-id="435270"
        data-content-user-id="435270">

<div class="comment__inner">
    <a href="https://dev.to/resourcefulmind" class="shrink-0 crayons-avatar mt-4">
    <img class="crayons-avatar__image" width="32" height="32" src="https://res.cloudinary.com/practicaldev/image/fetch/s--6y949wgP--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/435270/7ca3876e-ca85-478e-a2fa-c634f4a78121.png" alt="resourcefulmind profile image" />
  </a>


  <div class="inner-comment comment__details">
    <div class="comment__content crayons-card">



        <header class="comment__header">
  <a href="https://dev.to/resourcefulmind" class="crayons-link crayons-link--secondary flex items-center fw-medium">
    <span class="js-comment-username">Opeyemi Stephen</span>
      <span class="crayons-tooltip inline-block spec-op-author -mr-2" data-tooltip="Author">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="aivb2wfe58tnbh8k9nynncu6bh0lujdp" class="crayons-icon"><title id="aivb2wfe58tnbh8k9nynncu6bh0lujdp">Author</title>
    <path d="M12 8.25a6 6 0 110 12 6 6 0 010-12zm0 2.625l-.992 2.01-2.218.322 1.605 1.564-.379 2.21L12 15.937l1.984 1.043-.379-2.209 1.605-1.564-2.218-.323L12 10.875zm.75-6.376l3.75.001v2.25l-1.022.854a7.45 7.45 0 00-2.728-.817V4.5zm-1.5 0v2.288a7.451 7.451 0 00-2.727.816L7.5 6.75V4.5h3.75z"></path>
</svg>

      </span>
  </a>

  <span class="color-base-30 px-2" role="presentation">&bull;</span>

<a href="https://dev.to/resourcefulmind/comment/1e286" class="comment-date crayons-link crayons-link--secondary fs-s">
  <time datetime="2021-04-29T15:51:51Z">
    Apr 29
  </time>

</a>


  <div class="comment__dropdown">
    <button class="dropbtn comment__dropdown-trigger crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon" aria-label="Toggle dropdown menu" aria-haspopup="true">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="arwc7mc5avwpzbrj1rmeb82ornu7hkw" class="crayons-icon pointer-events-none"><title id="arwc7mc5avwpzbrj1rmeb82ornu7hkw">Dropdown menu</title>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.25 12a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm5.25 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm3.75 1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
</svg>

    </button>
    <ul class="crayons-dropdown p-1 right-1 s:right-0 s:left-auto fs-base dropdown">
      <li><a href="https://dev.to/resourcefulmind/comment/1e286" class="crayons-link crayons-link--block permalink-copybtn" aria-label="Copy link to Opeyemi Stephen's comment" data-no-instant>Copy link</a></li>
      <li class="comment-actions hidden" data-user-id="435270" data-action="settings-button" data-path="https://dev.to/resourcefulmind/comment/1e286/settings" aria-label="Go to Opeyemi Stephen's comment settings"></li>
      <li class="comment-actions hidden" data-action="hide-button" data-commentable-user-id="435270" data-user-id="435270">
        <a href="#" class="crayons-link crayons-link--block hide-comment" data-hide-type="hide" data-comment-id="704606" aria-label="Hide Opeyemi Stephen's comment">
          Hide
        </a>
      </li>
      <li class="mod-actions hidden mod-actions-comment-button" data-path="https://dev.to/resourcefulmind/comment/1e286/mod" aria-label="Moderate Opeyemi Stephen's comment"></li>
      <li class="report-abuse-link-wrapper" data-path="/report-abuse?url=https://dev.to/resourcefulmind/comment/1e286" aria-label="Report Opeyemi Stephen's comment as abusive or violating our code of conduct and/or terms and conditions"></li>
      <li class="current-user-actions"></li>
    </ul>
  </div>
</header>


        <div
          class="
            comment__body
            text-styles
            text-styles--secondary
            body

          ">
          <p>Yes they are. There are a host of other people trying to help too but in a country that has over 100 million unemployed youths, the change is not very visible. We can only keep trying Garrett. The African youth wants to thrive but there’s a lot of limitations.</p>


        </div>
    </div>

    <footer class="comment__footer print-hidden">
  <button
    class="crayons-btn crayons-btn--ghost crayons-btn--icon-left crayons-btn--s mr-1 reaction-like inline-flex reaction-button"
    id="button-for-comment-704606"
    data-comment-id="704606"
    title="heart">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="a5zf64ii4hztclgwl404bcxniun63od9" class="crayons-icon reaction-icon not-reacted"><title id="a5zf64ii4hztclgwl404bcxniun63od9">Favorite heart outline button</title><path d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"></path></svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="ap7uq56t0pa8dp0vlgct6l07wqype2qh" class="crayons-icon reaction-icon--like reaction-icon reacted"><title id="ap7uq56t0pa8dp0vlgct6l07wqype2qh">Favorite heart outline button</title>
    <path d="M5.116 12.595a4.875 4.875 0 015.56-7.68h-.002L7.493 8.098l1.06 1.061 3.181-3.182a4.875 4.875 0 016.895 6.894L12 19.5l-6.894-6.894.01-.01z"></path>
</svg>

    <span class="reactions-count">
      5
    </span>
    <span class="reactions-label hidden m:inline-block">
      &nbsp;likes
    </span>
  </button>

    <a
      class="actions crayons-btn crayons-btn--ghost crayons-btn--s crayons-btn--icon-left toggle-reply-form mr-1 inline-flex"
      href="#/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/new/1e286"
      data-comment-id="704606"
      data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e286"
      rel="nofollow">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="a9jtlgwey2vbd7sakc4fcktfmd6uebi9" class="crayons-icon reaction-icon not-reacted"><title id="a9jtlgwey2vbd7sakc4fcktfmd6uebi9">Comment button</title><path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path></svg>

      <span class="hidden m:inline-block">Reply</span>
    </a>

</footer>

  </div>
</div>


      </div>
    </details>


      </div>
    </details>
    <details class="comment-wrapper js-comment-wrapper comment-wrapper--deep-1 child" open>
      <summary>
        <span class="mx-0 inline-block align-middle">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="aj7w4l03feuayxan7j6z6flgsa7fbn29" class="crayons-icon expanded"><title id="aj7w4l03feuayxan7j6z6flgsa7fbn29">Collapse</title>
    <path d="M12 10.677L8 6.935 9 6l3 2.807L15 6l1 .935-4 3.742zm0 4.517L9 18l-1-.935 4-3.742 4 3.742-1 .934-3-2.805z"></path>
</svg>

          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="aj7489e0uvsh381zg0ig7g8opsvhvhzj" class="crayons-icon collapsed"><title id="aj7489e0uvsh381zg0ig7g8opsvhvhzj">Expand</title>
    <path d="M12 18l-4-3.771 1-.943 3 2.829 3-2.829 1 .943L12 18zm0-10.115l-3 2.829-1-.943L12 6l4 3.771-1 .942-3-2.828z"></path>
</svg>

        </span>
        <span class="js-collapse-comment-content inline-block align-middle"></span>
      </summary>
      <div
        id="comment-node-707313"
        class="
          comment single-comment-node

          child
          comment--deep-1

        "
        data-comment-id="707313"
        data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e689"
        data-comment-author-id="164404"
        data-content-user-id="164404">

<div class="comment__inner">
    <a href="https://dev.to/ssenoga" class="shrink-0 crayons-avatar mt-4">
    <img class="crayons-avatar__image" width="32" height="32" src="https://res.cloudinary.com/practicaldev/image/fetch/s--YQKNkB97--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/164404/fc3e50bb-31bd-40da-ad71-87d346f08fd0.jpeg" alt="ssenoga profile image" />
  </a>


  <div class="inner-comment comment__details">
    <div class="comment__content crayons-card">



        <header class="comment__header">
  <a href="https://dev.to/ssenoga" class="crayons-link crayons-link--secondary flex items-center fw-medium">
    <span class="js-comment-username">ssenoga</span>
  </a>

  <span class="color-base-30 px-2" role="presentation">&bull;</span>

<a href="https://dev.to/ssenoga/comment/1e689" class="comment-date crayons-link crayons-link--secondary fs-s">
  <time datetime="2021-05-04T19:16:49Z">
    May 4
  </time>

</a>


  <div class="comment__dropdown">
    <button class="dropbtn comment__dropdown-trigger crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon" aria-label="Toggle dropdown menu" aria-haspopup="true">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="ar8ag34hhvrnlxfxavaucbb0uobpeyr6" class="crayons-icon pointer-events-none"><title id="ar8ag34hhvrnlxfxavaucbb0uobpeyr6">Dropdown menu</title>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.25 12a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm5.25 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm3.75 1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
</svg>

    </button>
    <ul class="crayons-dropdown p-1 right-1 s:right-0 s:left-auto fs-base dropdown">
      <li><a href="https://dev.to/ssenoga/comment/1e689" class="crayons-link crayons-link--block permalink-copybtn" aria-label="Copy link to ssenoga's comment" data-no-instant>Copy link</a></li>
      <li class="comment-actions hidden" data-user-id="164404" data-action="settings-button" data-path="https://dev.to/ssenoga/comment/1e689/settings" aria-label="Go to ssenoga's comment settings"></li>
      <li class="comment-actions hidden" data-action="hide-button" data-commentable-user-id="435270" data-user-id="164404">
        <a href="#" class="crayons-link crayons-link--block hide-comment" data-hide-type="hide" data-comment-id="707313" aria-label="Hide ssenoga's comment">
          Hide
        </a>
      </li>
      <li class="mod-actions hidden mod-actions-comment-button" data-path="https://dev.to/ssenoga/comment/1e689/mod" aria-label="Moderate ssenoga's comment"></li>
      <li class="report-abuse-link-wrapper" data-path="/report-abuse?url=https://dev.to/ssenoga/comment/1e689" aria-label="Report ssenoga's comment as abusive or violating our code of conduct and/or terms and conditions"></li>
      <li class="current-user-actions"></li>
    </ul>
  </div>
</header>


        <div
          class="
            comment__body
            text-styles
            text-styles--secondary
            body

          ">
          <p>I hear you tracy.. It sucks to be an african youth in countries like uganda</p>


        </div>
    </div>

    <footer class="comment__footer print-hidden">
  <button
    class="crayons-btn crayons-btn--ghost crayons-btn--icon-left crayons-btn--s mr-1 reaction-like inline-flex reaction-button"
    id="button-for-comment-707313"
    data-comment-id="707313"
    title="heart">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="ae3g5fzp7r1ksd4itmlja1lmuf78m4th" class="crayons-icon reaction-icon not-reacted"><title id="ae3g5fzp7r1ksd4itmlja1lmuf78m4th">Favorite heart outline button</title><path d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"></path></svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="aoj9qbjdwf72esnvc4z3e5g50x9tmo68" class="crayons-icon reaction-icon--like reaction-icon reacted"><title id="aoj9qbjdwf72esnvc4z3e5g50x9tmo68">Favorite heart outline button</title>
    <path d="M5.116 12.595a4.875 4.875 0 015.56-7.68h-.002L7.493 8.098l1.06 1.061 3.181-3.182a4.875 4.875 0 016.895 6.894L12 19.5l-6.894-6.894.01-.01z"></path>
</svg>

    <span class="reactions-count">
      2
    </span>
    <span class="reactions-label hidden m:inline-block">
      &nbsp;likes
    </span>
  </button>

    <a
      class="actions crayons-btn crayons-btn--ghost crayons-btn--s crayons-btn--icon-left toggle-reply-form mr-1 inline-flex"
      href="#/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/new/1e689"
      data-comment-id="707313"
      data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e689"
      rel="nofollow">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="abafkyqahz17gl81onemzi9yra9sg4pb" class="crayons-icon reaction-icon not-reacted"><title id="abafkyqahz17gl81onemzi9yra9sg4pb">Comment button</title><path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path></svg>

      <span class="hidden m:inline-block">Reply</span>
    </a>

</footer>

  </div>
</div>


      </div>
    </details>


      </div>
    </details>

                    <details class="comment-wrapper js-comment-wrapper comment-wrapper--deep-0 root" open>
      <summary>
        <span class="m:mx-1 inline-block align-middle">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="ah5txtysi1ttu4n58mt9ce2vpof32qkz" class="crayons-icon expanded"><title id="ah5txtysi1ttu4n58mt9ce2vpof32qkz">Collapse</title>
    <path d="M12 10.677L8 6.935 9 6l3 2.807L15 6l1 .935-4 3.742zm0 4.517L9 18l-1-.935 4-3.742 4 3.742-1 .934-3-2.805z"></path>
</svg>

          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="abhzebyinjg5oj5kuef2013kqmngfult" class="crayons-icon collapsed"><title id="abhzebyinjg5oj5kuef2013kqmngfult">Expand</title>
    <path d="M12 18l-4-3.771 1-.943 3 2.829 3-2.829 1 .943L12 18zm0-10.115l-3 2.829-1-.943L12 6l4 3.771-1 .942-3-2.828z"></path>
</svg>

        </span>
        <span class="js-collapse-comment-content inline-block align-middle"></span>
      </summary>
      <div
        id="comment-node-704709"
        class="
          comment single-comment-node

          root
          comment--deep-0

        "
        data-comment-id="704709"
        data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e2c5"
        data-comment-author-id="403922"
        data-content-user-id="403922">

<div class="comment__inner">
    <a href="https://dev.to/brandonwallace" class="shrink-0 crayons-avatar m:crayons-avatar--l mt-4 m:mt-3">
    <img class="crayons-avatar__image" width="32" height="32" src="https://res.cloudinary.com/practicaldev/image/fetch/s--HMeOsel6--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/403922/fae1bd63-d3d1-41c7-a3b8-e92e9fa4df02.png" alt="brandonwallace profile image" />
  </a>


  <div class="inner-comment comment__details">
    <div class="comment__content crayons-card">



        <header class="comment__header">
  <a href="https://dev.to/brandonwallace" class="crayons-link crayons-link--secondary flex items-center fw-medium">
    <span class="js-comment-username">brandon_wallace</span>
  </a>

  <span class="color-base-30 px-2" role="presentation">&bull;</span>

<a href="https://dev.to/brandonwallace/comment/1e2c5" class="comment-date crayons-link crayons-link--secondary fs-s">
  <time datetime="2021-04-29T19:11:44Z">
    Apr 29
  </time>

    &bull; Edited
    <span class="hidden m:inline-block">
      on <time datetime="2021-04-30T15:58:20Z">
      Apr 30</time>
    </span>
</a>


  <div class="comment__dropdown">
    <button class="dropbtn comment__dropdown-trigger crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon" aria-label="Toggle dropdown menu" aria-haspopup="true">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="a42yp3fzjqbjvdjhguobvj38svb4inbo" class="crayons-icon pointer-events-none"><title id="a42yp3fzjqbjvdjhguobvj38svb4inbo">Dropdown menu</title>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.25 12a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm5.25 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm3.75 1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
</svg>

    </button>
    <ul class="crayons-dropdown p-1 right-1 s:right-0 s:left-auto fs-base dropdown">
      <li><a href="https://dev.to/brandonwallace/comment/1e2c5" class="crayons-link crayons-link--block permalink-copybtn" aria-label="Copy link to brandon_wallace's comment" data-no-instant>Copy link</a></li>
      <li class="comment-actions hidden" data-user-id="403922" data-action="settings-button" data-path="https://dev.to/brandonwallace/comment/1e2c5/settings" aria-label="Go to brandon_wallace's comment settings"></li>
      <li class="comment-actions hidden" data-action="hide-button" data-commentable-user-id="435270" data-user-id="403922">
        <a href="#" class="crayons-link crayons-link--block hide-comment" data-hide-type="hide" data-comment-id="704709" aria-label="Hide brandon_wallace's comment">
          Hide
        </a>
      </li>
      <li class="mod-actions hidden mod-actions-comment-button" data-path="https://dev.to/brandonwallace/comment/1e2c5/mod" aria-label="Moderate brandon_wallace's comment"></li>
      <li class="report-abuse-link-wrapper" data-path="/report-abuse?url=https://dev.to/brandonwallace/comment/1e2c5" aria-label="Report brandon_wallace's comment as abusive or violating our code of conduct and/or terms and conditions"></li>
      <li class="current-user-actions"></li>
    </ul>
  </div>
</header>


        <div
          class="
            comment__body
            text-styles
            text-styles--secondary
            body

          ">
          <p>For those that do not know earning 2000 Naira per day is about $5 dollars US.</p>

<h2>
  <a name="200000-nigerian-nairas-" href="#200000-nigerian-nairas-">
  </a>
  2,000.00 Nigerian Nairas =
</h2>

<h3>
  <a name="525-us-dollars" href="#525-us-dollars">
  </a>
  5.25 US Dollars
</h3>

<p><a class="mentioned-user" href="https://dev.to/resourcefulmind">@resourcefulmind</a>
 I hope that people in Nigeria know about Freecodecomp.org . That is a great place to learn a great deal about development without the charge of a bootcamp.</p>


        </div>
    </div>

    <footer class="comment__footer print-hidden">
  <button
    class="crayons-btn crayons-btn--ghost crayons-btn--icon-left crayons-btn--s mr-1 reaction-like inline-flex reaction-button"
    id="button-for-comment-704709"
    data-comment-id="704709"
    title="heart">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="aq3j9piqgjabu1xao8w7w269e3uzvjka" class="crayons-icon reaction-icon not-reacted"><title id="aq3j9piqgjabu1xao8w7w269e3uzvjka">Favorite heart outline button</title><path d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"></path></svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="aa4jpp48f18tc3tiwzw6wrnyjzklmve" class="crayons-icon reaction-icon--like reaction-icon reacted"><title id="aa4jpp48f18tc3tiwzw6wrnyjzklmve">Favorite heart outline button</title>
    <path d="M5.116 12.595a4.875 4.875 0 015.56-7.68h-.002L7.493 8.098l1.06 1.061 3.181-3.182a4.875 4.875 0 016.895 6.894L12 19.5l-6.894-6.894.01-.01z"></path>
</svg>

    <span class="reactions-count">
      14
    </span>
    <span class="reactions-label hidden m:inline-block">
      &nbsp;likes
    </span>
  </button>

    <a
      class="actions crayons-btn crayons-btn--ghost crayons-btn--s crayons-btn--icon-left toggle-reply-form mr-1 inline-flex"
      href="#/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/new/1e2c5"
      data-comment-id="704709"
      data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e2c5"
      rel="nofollow">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="atlpyy1k4dxquhgibk31ph0r08wpjwco" class="crayons-icon reaction-icon not-reacted"><title id="atlpyy1k4dxquhgibk31ph0r08wpjwco">Comment button</title><path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path></svg>

      <span class="hidden m:inline-block">Reply</span>
    </a>

</footer>

  </div>
</div>
    <details class="comment-wrapper js-comment-wrapper comment-wrapper--deep-1 child" open>
      <summary>
        <span class="mx-0 inline-block align-middle">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="asgy468ckkyqr6mnpc6yypapg26z0qrv" class="crayons-icon expanded"><title id="asgy468ckkyqr6mnpc6yypapg26z0qrv">Collapse</title>
    <path d="M12 10.677L8 6.935 9 6l3 2.807L15 6l1 .935-4 3.742zm0 4.517L9 18l-1-.935 4-3.742 4 3.742-1 .934-3-2.805z"></path>
</svg>

          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="a3ejhiv49ts7y3syx9d5l10z0z097qtq" class="crayons-icon collapsed"><title id="a3ejhiv49ts7y3syx9d5l10z0z097qtq">Expand</title>
    <path d="M12 18l-4-3.771 1-.943 3 2.829 3-2.829 1 .943L12 18zm0-10.115l-3 2.829-1-.943L12 6l4 3.771-1 .942-3-2.828z"></path>
</svg>

        </span>
        <span class="js-collapse-comment-content inline-block align-middle"></span>
      </summary>
      <div
        id="comment-node-704894"
        class="
          comment single-comment-node

          child
          comment--deep-1

        "
        data-comment-id="704894"
        data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e2j8"
        data-comment-author-id="435270"
        data-content-user-id="435270">

<div class="comment__inner">
    <a href="https://dev.to/resourcefulmind" class="shrink-0 crayons-avatar mt-4">
    <img class="crayons-avatar__image" width="32" height="32" src="https://res.cloudinary.com/practicaldev/image/fetch/s--6y949wgP--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/435270/7ca3876e-ca85-478e-a2fa-c634f4a78121.png" alt="resourcefulmind profile image" />
  </a>


  <div class="inner-comment comment__details">
    <div class="comment__content crayons-card">



        <header class="comment__header">
  <a href="https://dev.to/resourcefulmind" class="crayons-link crayons-link--secondary flex items-center fw-medium">
    <span class="js-comment-username">Opeyemi Stephen</span>
      <span class="crayons-tooltip inline-block spec-op-author -mr-2" data-tooltip="Author">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="aqum2hhewrzw3tp9shbmey4rm3adew4j" class="crayons-icon"><title id="aqum2hhewrzw3tp9shbmey4rm3adew4j">Author</title>
    <path d="M12 8.25a6 6 0 110 12 6 6 0 010-12zm0 2.625l-.992 2.01-2.218.322 1.605 1.564-.379 2.21L12 15.937l1.984 1.043-.379-2.209 1.605-1.564-2.218-.323L12 10.875zm.75-6.376l3.75.001v2.25l-1.022.854a7.45 7.45 0 00-2.728-.817V4.5zm-1.5 0v2.288a7.451 7.451 0 00-2.727.816L7.5 6.75V4.5h3.75z"></path>
</svg>

      </span>
  </a>

  <span class="color-base-30 px-2" role="presentation">&bull;</span>

<a href="https://dev.to/resourcefulmind/comment/1e2j8" class="comment-date crayons-link crayons-link--secondary fs-s">
  <time datetime="2021-04-30T06:09:45Z">
    Apr 30
  </time>

</a>


  <div class="comment__dropdown">
    <button class="dropbtn comment__dropdown-trigger crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon" aria-label="Toggle dropdown menu" aria-haspopup="true">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="atu5edz7hmh2qmcvdiygr7qhjf3cbv7c" class="crayons-icon pointer-events-none"><title id="atu5edz7hmh2qmcvdiygr7qhjf3cbv7c">Dropdown menu</title>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.25 12a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm5.25 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm3.75 1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
</svg>

    </button>
    <ul class="crayons-dropdown p-1 right-1 s:right-0 s:left-auto fs-base dropdown">
      <li><a href="https://dev.to/resourcefulmind/comment/1e2j8" class="crayons-link crayons-link--block permalink-copybtn" aria-label="Copy link to Opeyemi Stephen's comment" data-no-instant>Copy link</a></li>
      <li class="comment-actions hidden" data-user-id="435270" data-action="settings-button" data-path="https://dev.to/resourcefulmind/comment/1e2j8/settings" aria-label="Go to Opeyemi Stephen's comment settings"></li>
      <li class="comment-actions hidden" data-action="hide-button" data-commentable-user-id="435270" data-user-id="435270">
        <a href="#" class="crayons-link crayons-link--block hide-comment" data-hide-type="hide" data-comment-id="704894" aria-label="Hide Opeyemi Stephen's comment">
          Hide
        </a>
      </li>
      <li class="mod-actions hidden mod-actions-comment-button" data-path="https://dev.to/resourcefulmind/comment/1e2j8/mod" aria-label="Moderate Opeyemi Stephen's comment"></li>
      <li class="report-abuse-link-wrapper" data-path="/report-abuse?url=https://dev.to/resourcefulmind/comment/1e2j8" aria-label="Report Opeyemi Stephen's comment as abusive or violating our code of conduct and/or terms and conditions"></li>
      <li class="current-user-actions"></li>
    </ul>
  </div>
</header>


        <div
          class="
            comment__body
            text-styles
            text-styles--secondary
            body

          ">
          <p>That’s usually one of the first places we start learning from. I am certain Freecodecamp plays a great role in the growth of every young Nigerian developer.</p>


        </div>
    </div>

    <footer class="comment__footer print-hidden">
  <button
    class="crayons-btn crayons-btn--ghost crayons-btn--icon-left crayons-btn--s mr-1 reaction-like inline-flex reaction-button"
    id="button-for-comment-704894"
    data-comment-id="704894"
    title="heart">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="a50l9p6jw1ccbnrrp8ep7b8zzao4rehm" class="crayons-icon reaction-icon not-reacted"><title id="a50l9p6jw1ccbnrrp8ep7b8zzao4rehm">Favorite heart outline button</title><path d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"></path></svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="aerv0aimarfwikzsso8inhe38ykfajbk" class="crayons-icon reaction-icon--like reaction-icon reacted"><title id="aerv0aimarfwikzsso8inhe38ykfajbk">Favorite heart outline button</title>
    <path d="M5.116 12.595a4.875 4.875 0 015.56-7.68h-.002L7.493 8.098l1.06 1.061 3.181-3.182a4.875 4.875 0 016.895 6.894L12 19.5l-6.894-6.894.01-.01z"></path>
</svg>

    <span class="reactions-count">
      13
    </span>
    <span class="reactions-label hidden m:inline-block">
      &nbsp;likes
    </span>
  </button>

    <a
      class="actions crayons-btn crayons-btn--ghost crayons-btn--s crayons-btn--icon-left toggle-reply-form mr-1 inline-flex"
      href="#/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/new/1e2j8"
      data-comment-id="704894"
      data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e2j8"
      rel="nofollow">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="acj7m5dbg2bwvuiikqkudmeoyrilicr" class="crayons-icon reaction-icon not-reacted"><title id="acj7m5dbg2bwvuiikqkudmeoyrilicr">Comment button</title><path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path></svg>

      <span class="hidden m:inline-block">Reply</span>
    </a>

</footer>

  </div>
</div>
    <details class="comment-wrapper js-comment-wrapper comment-wrapper--deep-2 child" open>
      <summary>
        <span class="mx-0 inline-block align-middle">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="aa7zliszgdhas7qlp7ec2s3gmz0hryf4" class="crayons-icon expanded"><title id="aa7zliszgdhas7qlp7ec2s3gmz0hryf4">Collapse</title>
    <path d="M12 10.677L8 6.935 9 6l3 2.807L15 6l1 .935-4 3.742zm0 4.517L9 18l-1-.935 4-3.742 4 3.742-1 .934-3-2.805z"></path>
</svg>

          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="ab6j21ffbjw09cg50hxurp7t7e1qwryz" class="crayons-icon collapsed"><title id="ab6j21ffbjw09cg50hxurp7t7e1qwryz">Expand</title>
    <path d="M12 18l-4-3.771 1-.943 3 2.829 3-2.829 1 .943L12 18zm0-10.115l-3 2.829-1-.943L12 6l4 3.771-1 .942-3-2.828z"></path>
</svg>

        </span>
        <span class="js-collapse-comment-content inline-block align-middle"></span>
      </summary>
      <div
        id="comment-node-707289"
        class="
          comment single-comment-node

          child
          comment--deep-2

        "
        data-comment-id="707289"
        data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e67b"
        data-comment-author-id="362541"
        data-content-user-id="362541">

<div class="comment__inner">
    <a href="https://dev.to/horlamide_jay" class="shrink-0 crayons-avatar mt-4">
    <img class="crayons-avatar__image" width="32" height="32" src="https://res.cloudinary.com/practicaldev/image/fetch/s--ZGoeGR6W--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/362541/675b5e3e-d248-4e45-b583-1daeb85a4f74.jpeg" alt="horlamide_jay profile image" />
  </a>


  <div class="inner-comment comment__details">
    <div class="comment__content crayons-card">



        <header class="comment__header">
  <a href="https://dev.to/horlamide_jay" class="crayons-link crayons-link--secondary flex items-center fw-medium">
    <span class="js-comment-username">Jubril Olamide</span>
  </a>

  <span class="color-base-30 px-2" role="presentation">&bull;</span>

<a href="https://dev.to/horlamide_jay/comment/1e67b" class="comment-date crayons-link crayons-link--secondary fs-s">
  <time datetime="2021-05-04T18:52:07Z">
    May 4
  </time>

</a>


  <div class="comment__dropdown">
    <button class="dropbtn comment__dropdown-trigger crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon" aria-label="Toggle dropdown menu" aria-haspopup="true">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="a5i4dqs5z2yzvd6n71swiuhtp3kt3kqw" class="crayons-icon pointer-events-none"><title id="a5i4dqs5z2yzvd6n71swiuhtp3kt3kqw">Dropdown menu</title>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.25 12a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm5.25 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm3.75 1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
</svg>

    </button>
    <ul class="crayons-dropdown p-1 right-1 s:right-0 s:left-auto fs-base dropdown">
      <li><a href="https://dev.to/horlamide_jay/comment/1e67b" class="crayons-link crayons-link--block permalink-copybtn" aria-label="Copy link to Jubril Olamide's comment" data-no-instant>Copy link</a></li>
      <li class="comment-actions hidden" data-user-id="362541" data-action="settings-button" data-path="https://dev.to/horlamide_jay/comment/1e67b/settings" aria-label="Go to Jubril Olamide's comment settings"></li>
      <li class="comment-actions hidden" data-action="hide-button" data-commentable-user-id="435270" data-user-id="362541">
        <a href="#" class="crayons-link crayons-link--block hide-comment" data-hide-type="hide" data-comment-id="707289" aria-label="Hide Jubril Olamide's comment">
          Hide
        </a>
      </li>
      <li class="mod-actions hidden mod-actions-comment-button" data-path="https://dev.to/horlamide_jay/comment/1e67b/mod" aria-label="Moderate Jubril Olamide's comment"></li>
      <li class="report-abuse-link-wrapper" data-path="/report-abuse?url=https://dev.to/horlamide_jay/comment/1e67b" aria-label="Report Jubril Olamide's comment as abusive or violating our code of conduct and/or terms and conditions"></li>
      <li class="current-user-actions"></li>
    </ul>
  </div>
</header>


        <div
          class="
            comment__body
            text-styles
            text-styles--secondary
            body

          ">
          <p>That very true. But we still need the internet to access this free resource freecodecamp.</p>


        </div>
    </div>

    <footer class="comment__footer print-hidden">
  <button
    class="crayons-btn crayons-btn--ghost crayons-btn--icon-left crayons-btn--s mr-1 reaction-like inline-flex reaction-button"
    id="button-for-comment-707289"
    data-comment-id="707289"
    title="heart">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="akzb03vqqhcfbgn5795m997owug1uh3y" class="crayons-icon reaction-icon not-reacted"><title id="akzb03vqqhcfbgn5795m997owug1uh3y">Favorite heart outline button</title><path d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"></path></svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="alll5xmjhwf4icnw79i0ab9v0m7tmoav" class="crayons-icon reaction-icon--like reaction-icon reacted"><title id="alll5xmjhwf4icnw79i0ab9v0m7tmoav">Favorite heart outline button</title>
    <path d="M5.116 12.595a4.875 4.875 0 015.56-7.68h-.002L7.493 8.098l1.06 1.061 3.181-3.182a4.875 4.875 0 016.895 6.894L12 19.5l-6.894-6.894.01-.01z"></path>
</svg>

    <span class="reactions-count">
      3
    </span>
    <span class="reactions-label hidden m:inline-block">
      &nbsp;likes
    </span>
  </button>

    <span class="fs-s inline-flex items-center fs-italic color-base-50 pl-1">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="a54iptv5zgn7ckycotl3lss0jrbkryp7" class="crayons-icon"><title id="a54iptv5zgn7ckycotl3lss0jrbkryp7">Thread</title>
    <path d="M17 13l-5 6-5-6h3.125c0-3.314 2.798-6 6.25-6 .17 0 .34.006.506.02-1.787.904-3.006 2.705-3.006 4.78V13H17z"></path>
</svg>

      Thread
    </span>

</footer>

  </div>
</div>
      <div
        id="comment-node-707299"
        class="
          comment single-comment-node

          child
          comment--deep-3

        "
        data-comment-id="707299"
        data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e67l"
        data-comment-author-id="169677"
        data-content-user-id="169677">

<div class="comment__inner">
    <a href="https://dev.to/ribab" class="shrink-0 crayons-avatar mt-4">
    <img class="crayons-avatar__image" width="32" height="32" src="https://res.cloudinary.com/practicaldev/image/fetch/s--nV44SYDv--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/169677/6b94c99a-3e7c-4bf2-8236-f9f38119ab37.PNG" alt="ribab profile image" />
  </a>


  <div class="inner-comment comment__details">
    <div class="comment__content crayons-card">



        <header class="comment__header">
  <a href="https://dev.to/ribab" class="crayons-link crayons-link--secondary flex items-center fw-medium">
    <span class="js-comment-username">Richard Barella Jr.</span>
  </a>

  <span class="color-base-30 px-2" role="presentation">&bull;</span>

<a href="https://dev.to/ribab/comment/1e67l" class="comment-date crayons-link crayons-link--secondary fs-s">
  <time datetime="2021-05-04T19:02:50Z">
    May 4
  </time>

</a>


  <div class="comment__dropdown">
    <button class="dropbtn comment__dropdown-trigger crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon" aria-label="Toggle dropdown menu" aria-haspopup="true">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="aa7m538339kmip54zz83j1txt7797u9k" class="crayons-icon pointer-events-none"><title id="aa7m538339kmip54zz83j1txt7797u9k">Dropdown menu</title>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.25 12a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm5.25 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm3.75 1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
</svg>

    </button>
    <ul class="crayons-dropdown p-1 right-1 s:right-0 s:left-auto fs-base dropdown">
      <li><a href="https://dev.to/ribab/comment/1e67l" class="crayons-link crayons-link--block permalink-copybtn" aria-label="Copy link to Richard Barella Jr.'s comment" data-no-instant>Copy link</a></li>
      <li class="comment-actions hidden" data-user-id="169677" data-action="settings-button" data-path="https://dev.to/ribab/comment/1e67l/settings" aria-label="Go to Richard Barella Jr.'s comment settings"></li>
      <li class="comment-actions hidden" data-action="hide-button" data-commentable-user-id="435270" data-user-id="169677">
        <a href="#" class="crayons-link crayons-link--block hide-comment" data-hide-type="hide" data-comment-id="707299" aria-label="Hide Richard Barella Jr.'s comment">
          Hide
        </a>
      </li>
      <li class="mod-actions hidden mod-actions-comment-button" data-path="https://dev.to/ribab/comment/1e67l/mod" aria-label="Moderate Richard Barella Jr.'s comment"></li>
      <li class="report-abuse-link-wrapper" data-path="/report-abuse?url=https://dev.to/ribab/comment/1e67l" aria-label="Report Richard Barella Jr.'s comment as abusive or violating our code of conduct and/or terms and conditions"></li>
      <li class="current-user-actions"></li>
    </ul>
  </div>
</header>


        <div
          class="
            comment__body
            text-styles
            text-styles--secondary
            body

          ">
          <p>not necessarily. the entirity of freecodecamp is opensource. I haven't tried to do this, but I believe you can clone the entire repo and host it yourself.</p>


        </div>
    </div>

    <footer class="comment__footer print-hidden">
  <button
    class="crayons-btn crayons-btn--ghost crayons-btn--icon-left crayons-btn--s mr-1 reaction-like inline-flex reaction-button"
    id="button-for-comment-707299"
    data-comment-id="707299"
    title="heart">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="aj21deauwmeld3wlfqn57clc0cftrnkt" class="crayons-icon reaction-icon not-reacted"><title id="aj21deauwmeld3wlfqn57clc0cftrnkt">Favorite heart outline button</title><path d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"></path></svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="aqxmavt9075i5n6hyfdocimmx9h4tm1j" class="crayons-icon reaction-icon--like reaction-icon reacted"><title id="aqxmavt9075i5n6hyfdocimmx9h4tm1j">Favorite heart outline button</title>
    <path d="M5.116 12.595a4.875 4.875 0 015.56-7.68h-.002L7.493 8.098l1.06 1.061 3.181-3.182a4.875 4.875 0 016.895 6.894L12 19.5l-6.894-6.894.01-.01z"></path>
</svg>

    <span class="reactions-count">
      5
    </span>
    <span class="reactions-label hidden m:inline-block">
      &nbsp;likes
    </span>
  </button>

    <span class="fs-s inline-flex items-center fs-italic color-base-50 pl-1">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="aqjwvfm8hr48mvndfqs3zgxswjlvfwb8" class="crayons-icon"><title id="aqjwvfm8hr48mvndfqs3zgxswjlvfwb8">Thread</title>
    <path d="M17 13l-5 6-5-6h3.125c0-3.314 2.798-6 6.25-6 .17 0 .34.006.506.02-1.787.904-3.006 2.705-3.006 4.78V13H17z"></path>
</svg>

      Thread
    </span>

</footer>

  </div>
</div>
      <div
        id="comment-node-707301"
        class="
          comment single-comment-node

          child
          comment--deep-4
          comment--too-deep
        "
        data-comment-id="707301"
        data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e67n"
        data-comment-author-id="169677"
        data-content-user-id="169677">

<div class="comment__inner">
    <a href="https://dev.to/ribab" class="shrink-0 crayons-avatar mt-4">
    <img class="crayons-avatar__image" width="32" height="32" src="https://res.cloudinary.com/practicaldev/image/fetch/s--nV44SYDv--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/169677/6b94c99a-3e7c-4bf2-8236-f9f38119ab37.PNG" alt="ribab profile image" />
  </a>


  <div class="inner-comment comment__details">
    <div class="comment__content crayons-card">



        <header class="comment__header">
  <a href="https://dev.to/ribab" class="crayons-link crayons-link--secondary flex items-center fw-medium">
    <span class="js-comment-username">Richard Barella Jr.</span>
  </a>

  <span class="color-base-30 px-2" role="presentation">&bull;</span>

<a href="https://dev.to/ribab/comment/1e67n" class="comment-date crayons-link crayons-link--secondary fs-s">
  <time datetime="2021-05-04T19:04:01Z">
    May 4
  </time>

</a>


  <div class="comment__dropdown">
    <button class="dropbtn comment__dropdown-trigger crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon" aria-label="Toggle dropdown menu" aria-haspopup="true">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="aqwiyqvv0hdr6qieciyq34esd6wtw19k" class="crayons-icon pointer-events-none"><title id="aqwiyqvv0hdr6qieciyq34esd6wtw19k">Dropdown menu</title>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.25 12a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm5.25 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm3.75 1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
</svg>

    </button>
    <ul class="crayons-dropdown p-1 right-1 s:right-0 s:left-auto fs-base dropdown">
      <li><a href="https://dev.to/ribab/comment/1e67n" class="crayons-link crayons-link--block permalink-copybtn" aria-label="Copy link to Richard Barella Jr.'s comment" data-no-instant>Copy link</a></li>
      <li class="comment-actions hidden" data-user-id="169677" data-action="settings-button" data-path="https://dev.to/ribab/comment/1e67n/settings" aria-label="Go to Richard Barella Jr.'s comment settings"></li>
      <li class="comment-actions hidden" data-action="hide-button" data-commentable-user-id="435270" data-user-id="169677">
        <a href="#" class="crayons-link crayons-link--block hide-comment" data-hide-type="hide" data-comment-id="707301" aria-label="Hide Richard Barella Jr.'s comment">
          Hide
        </a>
      </li>
      <li class="mod-actions hidden mod-actions-comment-button" data-path="https://dev.to/ribab/comment/1e67n/mod" aria-label="Moderate Richard Barella Jr.'s comment"></li>
      <li class="report-abuse-link-wrapper" data-path="/report-abuse?url=https://dev.to/ribab/comment/1e67n" aria-label="Report Richard Barella Jr.'s comment as abusive or violating our code of conduct and/or terms and conditions"></li>
      <li class="current-user-actions"></li>
    </ul>
  </div>
</header>


        <div
          class="
            comment__body
            text-styles
            text-styles--secondary
            body

          ">
          <p><a href="https://github.com/freeCodeCamp/freeCodeCamp/blob/main/docs/how-to-setup-freecodecamp-locally.md" rel="nofollow">github.com/freeCodeCamp/freeCodeCa...</a></p>


        </div>
    </div>

    <footer class="comment__footer print-hidden">
  <button
    class="crayons-btn crayons-btn--ghost crayons-btn--icon-left crayons-btn--s mr-1 reaction-like inline-flex reaction-button"
    id="button-for-comment-707301"
    data-comment-id="707301"
    title="heart">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="apk5po5bkjjcuzw9kvpz2tzjpmynnyf3" class="crayons-icon reaction-icon not-reacted"><title id="apk5po5bkjjcuzw9kvpz2tzjpmynnyf3">Favorite heart outline button</title><path d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"></path></svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="ahgsosxl5f0eh9a7x3teuzoot3o9u6m4" class="crayons-icon reaction-icon--like reaction-icon reacted"><title id="ahgsosxl5f0eh9a7x3teuzoot3o9u6m4">Favorite heart outline button</title>
    <path d="M5.116 12.595a4.875 4.875 0 015.56-7.68h-.002L7.493 8.098l1.06 1.061 3.181-3.182a4.875 4.875 0 016.895 6.894L12 19.5l-6.894-6.894.01-.01z"></path>
</svg>

    <span class="reactions-count">
      3
    </span>
    <span class="reactions-label hidden m:inline-block">
      &nbsp;likes
    </span>
  </button>

    <span class="fs-s inline-flex items-center fs-italic color-base-50 pl-1">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="acm8nj9stf72hop4kxu8wwvqgeg8b7qx" class="crayons-icon"><title id="acm8nj9stf72hop4kxu8wwvqgeg8b7qx">Thread</title>
    <path d="M17 13l-5 6-5-6h3.125c0-3.314 2.798-6 6.25-6 .17 0 .34.006.506.02-1.787.904-3.006 2.705-3.006 4.78V13H17z"></path>
</svg>

      Thread
    </span>

</footer>

  </div>
</div>
      <div
        id="comment-node-707302"
        class="
          comment single-comment-node

          child
          comment--deep-5
          comment--too-deep
        "
        data-comment-id="707302"
        data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e67o"
        data-comment-author-id="362541"
        data-content-user-id="362541">

<div class="comment__inner">
    <a href="https://dev.to/horlamide_jay" class="shrink-0 crayons-avatar mt-4">
    <img class="crayons-avatar__image" width="32" height="32" src="https://res.cloudinary.com/practicaldev/image/fetch/s--ZGoeGR6W--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/362541/675b5e3e-d248-4e45-b583-1daeb85a4f74.jpeg" alt="horlamide_jay profile image" />
  </a>


  <div class="inner-comment comment__details">
    <div class="comment__content crayons-card">



        <header class="comment__header">
  <a href="https://dev.to/horlamide_jay" class="crayons-link crayons-link--secondary flex items-center fw-medium">
    <span class="js-comment-username">Jubril Olamide</span>
  </a>

  <span class="color-base-30 px-2" role="presentation">&bull;</span>

<a href="https://dev.to/horlamide_jay/comment/1e67o" class="comment-date crayons-link crayons-link--secondary fs-s">
  <time datetime="2021-05-04T19:04:44Z">
    May 4
  </time>

</a>


  <div class="comment__dropdown">
    <button class="dropbtn comment__dropdown-trigger crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon" aria-label="Toggle dropdown menu" aria-haspopup="true">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="a65q5b47fsltzlkdayykndvhm3uc94hy" class="crayons-icon pointer-events-none"><title id="a65q5b47fsltzlkdayykndvhm3uc94hy">Dropdown menu</title>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.25 12a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm5.25 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm3.75 1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
</svg>

    </button>
    <ul class="crayons-dropdown p-1 right-1 s:right-0 s:left-auto fs-base dropdown">
      <li><a href="https://dev.to/horlamide_jay/comment/1e67o" class="crayons-link crayons-link--block permalink-copybtn" aria-label="Copy link to Jubril Olamide's comment" data-no-instant>Copy link</a></li>
      <li class="comment-actions hidden" data-user-id="362541" data-action="settings-button" data-path="https://dev.to/horlamide_jay/comment/1e67o/settings" aria-label="Go to Jubril Olamide's comment settings"></li>
      <li class="comment-actions hidden" data-action="hide-button" data-commentable-user-id="435270" data-user-id="362541">
        <a href="#" class="crayons-link crayons-link--block hide-comment" data-hide-type="hide" data-comment-id="707302" aria-label="Hide Jubril Olamide's comment">
          Hide
        </a>
      </li>
      <li class="mod-actions hidden mod-actions-comment-button" data-path="https://dev.to/horlamide_jay/comment/1e67o/mod" aria-label="Moderate Jubril Olamide's comment"></li>
      <li class="report-abuse-link-wrapper" data-path="/report-abuse?url=https://dev.to/horlamide_jay/comment/1e67o" aria-label="Report Jubril Olamide's comment as abusive or violating our code of conduct and/or terms and conditions"></li>
      <li class="current-user-actions"></li>
    </ul>
  </div>
</header>


        <div
          class="
            comment__body
            text-styles
            text-styles--secondary
            body

          ">
          <p>Wow I never knew about this. Thanks <a class="mentioned-user" href="https://dev.to/richard">@richard</a>
 Barella Jr.</p>


        </div>
    </div>

    <footer class="comment__footer print-hidden">
  <button
    class="crayons-btn crayons-btn--ghost crayons-btn--icon-left crayons-btn--s mr-1 reaction-like inline-flex reaction-button"
    id="button-for-comment-707302"
    data-comment-id="707302"
    title="heart">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="anb76kvkglv6mckfhios8utulkqwnl27" class="crayons-icon reaction-icon not-reacted"><title id="anb76kvkglv6mckfhios8utulkqwnl27">Favorite heart outline button</title><path d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"></path></svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="ab2r90u513mndlrip3ovmprkfl8omeo8" class="crayons-icon reaction-icon--like reaction-icon reacted"><title id="ab2r90u513mndlrip3ovmprkfl8omeo8">Favorite heart outline button</title>
    <path d="M5.116 12.595a4.875 4.875 0 015.56-7.68h-.002L7.493 8.098l1.06 1.061 3.181-3.182a4.875 4.875 0 016.895 6.894L12 19.5l-6.894-6.894.01-.01z"></path>
</svg>

    <span class="reactions-count">
      1
    </span>
    <span class="reactions-label hidden m:inline-block">
      &nbsp;like
    </span>
  </button>

    <span class="fs-s inline-flex items-center fs-italic color-base-50 pl-1">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="aou1mq8uqameuz9951ah6n9pazxitnc7" class="crayons-icon"><title id="aou1mq8uqameuz9951ah6n9pazxitnc7">Thread</title>
    <path d="M17 13l-5 6-5-6h3.125c0-3.314 2.798-6 6.25-6 .17 0 .34.006.506.02-1.787.904-3.006 2.705-3.006 4.78V13H17z"></path>
</svg>

      Thread
    </span>

</footer>

  </div>
</div>
      <div
        id="comment-node-714534"
        class="
          comment single-comment-node

          child
          comment--deep-6
          comment--too-deep
        "
        data-comment-id="714534"
        data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1eh02"
        data-comment-author-id="169677"
        data-content-user-id="169677">

<div class="comment__inner">
    <a href="https://dev.to/ribab" class="shrink-0 crayons-avatar mt-4">
    <img class="crayons-avatar__image" width="32" height="32" src="https://res.cloudinary.com/practicaldev/image/fetch/s--nV44SYDv--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/169677/6b94c99a-3e7c-4bf2-8236-f9f38119ab37.PNG" alt="ribab profile image" />
  </a>


  <div class="inner-comment comment__details">
    <div class="comment__content crayons-card">



        <header class="comment__header">
  <a href="https://dev.to/ribab" class="crayons-link crayons-link--secondary flex items-center fw-medium">
    <span class="js-comment-username">Richard Barella Jr.</span>
  </a>

  <span class="color-base-30 px-2" role="presentation">&bull;</span>

<a href="https://dev.to/ribab/comment/1eh02" class="comment-date crayons-link crayons-link--secondary fs-s">
  <time datetime="2021-05-17T04:02:23Z">
    May 17
  </time>

</a>


  <div class="comment__dropdown">
    <button class="dropbtn comment__dropdown-trigger crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon" aria-label="Toggle dropdown menu" aria-haspopup="true">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="a8e224bs16j4ojkgwht2fevz3q2crdwt" class="crayons-icon pointer-events-none"><title id="a8e224bs16j4ojkgwht2fevz3q2crdwt">Dropdown menu</title>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.25 12a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm5.25 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm3.75 1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
</svg>

    </button>
    <ul class="crayons-dropdown p-1 right-1 s:right-0 s:left-auto fs-base dropdown">
      <li><a href="https://dev.to/ribab/comment/1eh02" class="crayons-link crayons-link--block permalink-copybtn" aria-label="Copy link to Richard Barella Jr.'s comment" data-no-instant>Copy link</a></li>
      <li class="comment-actions hidden" data-user-id="169677" data-action="settings-button" data-path="https://dev.to/ribab/comment/1eh02/settings" aria-label="Go to Richard Barella Jr.'s comment settings"></li>
      <li class="comment-actions hidden" data-action="hide-button" data-commentable-user-id="435270" data-user-id="169677">
        <a href="#" class="crayons-link crayons-link--block hide-comment" data-hide-type="hide" data-comment-id="714534" aria-label="Hide Richard Barella Jr.'s comment">
          Hide
        </a>
      </li>
      <li class="mod-actions hidden mod-actions-comment-button" data-path="https://dev.to/ribab/comment/1eh02/mod" aria-label="Moderate Richard Barella Jr.'s comment"></li>
      <li class="report-abuse-link-wrapper" data-path="/report-abuse?url=https://dev.to/ribab/comment/1eh02" aria-label="Report Richard Barella Jr.'s comment as abusive or violating our code of conduct and/or terms and conditions"></li>
      <li class="current-user-actions"></li>
    </ul>
  </div>
</header>


        <div
          class="
            comment__body
            text-styles
            text-styles--secondary
            body

          ">
          <p>I set this up on my own laptop and made an article on how to do so <a href="https://www.codingwithricky.com/2021/05/15/freecodecamp-offline/" rel="nofollow">codingwithricky.com/2021/05/15/fre...</a></p>


        </div>
    </div>

    <footer class="comment__footer print-hidden">
  <button
    class="crayons-btn crayons-btn--ghost crayons-btn--icon-left crayons-btn--s mr-1 reaction-like inline-flex reaction-button"
    id="button-for-comment-714534"
    data-comment-id="714534"
    title="heart">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="aa4yrwa9gr2h58xi7usiocsw5hhr5l5e" class="crayons-icon reaction-icon not-reacted"><title id="aa4yrwa9gr2h58xi7usiocsw5hhr5l5e">Favorite heart outline button</title><path d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"></path></svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="a1yykevnyor2krvvsm50xo714hz72yhb" class="crayons-icon reaction-icon--like reaction-icon reacted"><title id="a1yykevnyor2krvvsm50xo714hz72yhb">Favorite heart outline button</title>
    <path d="M5.116 12.595a4.875 4.875 0 015.56-7.68h-.002L7.493 8.098l1.06 1.061 3.181-3.182a4.875 4.875 0 016.895 6.894L12 19.5l-6.894-6.894.01-.01z"></path>
</svg>

    <span class="reactions-count">
      2
    </span>
    <span class="reactions-label hidden m:inline-block">
      &nbsp;likes
    </span>
  </button>

    <a
      class="actions crayons-btn crayons-btn--ghost crayons-btn--s crayons-btn--icon-left toggle-reply-form mr-1 inline-flex"
      href="#/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/new/1eh02"
      data-comment-id="714534"
      data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1eh02"
      rel="nofollow">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="anjrnrmwd2i9uotq9pilagpnzvqyhfl6" class="crayons-icon reaction-icon not-reacted"><title id="anjrnrmwd2i9uotq9pilagpnzvqyhfl6">Comment button</title><path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path></svg>

      <span class="hidden m:inline-block">Reply</span>
    </a>

</footer>

  </div>
</div>


      </div>


      </div>


      </div>


      </div>


      </div>
    </details>


      </div>
    </details>
    <details class="comment-wrapper js-comment-wrapper comment-wrapper--deep-1 child" open>
      <summary>
        <span class="mx-0 inline-block align-middle">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="aki6gyy1vbpoa4y4ksbjtlxsfh4eqsrb" class="crayons-icon expanded"><title id="aki6gyy1vbpoa4y4ksbjtlxsfh4eqsrb">Collapse</title>
    <path d="M12 10.677L8 6.935 9 6l3 2.807L15 6l1 .935-4 3.742zm0 4.517L9 18l-1-.935 4-3.742 4 3.742-1 .934-3-2.805z"></path>
</svg>

          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="a3fgz6e4qci02k0uebxibdauwwgkximh" class="crayons-icon collapsed"><title id="a3fgz6e4qci02k0uebxibdauwwgkximh">Expand</title>
    <path d="M12 18l-4-3.771 1-.943 3 2.829 3-2.829 1 .943L12 18zm0-10.115l-3 2.829-1-.943L12 6l4 3.771-1 .942-3-2.828z"></path>
</svg>

        </span>
        <span class="js-collapse-comment-content inline-block align-middle"></span>
      </summary>
      <div
        id="comment-node-707356"
        class="
          comment single-comment-node

          child
          comment--deep-1

        "
        data-comment-id="707356"
        data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e6a0"
        data-comment-author-id="69382"
        data-content-user-id="69382">

<div class="comment__inner">
    <a href="https://dev.to/realsammy" class="shrink-0 crayons-avatar mt-4">
    <img class="crayons-avatar__image" width="32" height="32" src="https://res.cloudinary.com/practicaldev/image/fetch/s--cXyckNOG--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/69382/b09acf23-dbfb-41b8-89ae-fd3dff2b39fe.jpeg" alt="realsammy profile image" />
  </a>


  <div class="inner-comment comment__details">
    <div class="comment__content crayons-card">



        <header class="comment__header">
  <a href="https://dev.to/realsammy" class="crayons-link crayons-link--secondary flex items-center fw-medium">
    <span class="js-comment-username">Realsammy</span>
  </a>

  <span class="color-base-30 px-2" role="presentation">&bull;</span>

<a href="https://dev.to/realsammy/comment/1e6a0" class="comment-date crayons-link crayons-link--secondary fs-s">
  <time datetime="2021-05-04T20:54:13Z">
    May 4
  </time>

</a>


  <div class="comment__dropdown">
    <button class="dropbtn comment__dropdown-trigger crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon" aria-label="Toggle dropdown menu" aria-haspopup="true">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="aof836htbgzkyhdcde5anbsg2mc8cvzy" class="crayons-icon pointer-events-none"><title id="aof836htbgzkyhdcde5anbsg2mc8cvzy">Dropdown menu</title>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.25 12a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm5.25 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm3.75 1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
</svg>

    </button>
    <ul class="crayons-dropdown p-1 right-1 s:right-0 s:left-auto fs-base dropdown">
      <li><a href="https://dev.to/realsammy/comment/1e6a0" class="crayons-link crayons-link--block permalink-copybtn" aria-label="Copy link to Realsammy's comment" data-no-instant>Copy link</a></li>
      <li class="comment-actions hidden" data-user-id="69382" data-action="settings-button" data-path="https://dev.to/realsammy/comment/1e6a0/settings" aria-label="Go to Realsammy's comment settings"></li>
      <li class="comment-actions hidden" data-action="hide-button" data-commentable-user-id="435270" data-user-id="69382">
        <a href="#" class="crayons-link crayons-link--block hide-comment" data-hide-type="hide" data-comment-id="707356" aria-label="Hide Realsammy's comment">
          Hide
        </a>
      </li>
      <li class="mod-actions hidden mod-actions-comment-button" data-path="https://dev.to/realsammy/comment/1e6a0/mod" aria-label="Moderate Realsammy's comment"></li>
      <li class="report-abuse-link-wrapper" data-path="/report-abuse?url=https://dev.to/realsammy/comment/1e6a0" aria-label="Report Realsammy's comment as abusive or violating our code of conduct and/or terms and conditions"></li>
      <li class="current-user-actions"></li>
    </ul>
  </div>
</header>


        <div
          class="
            comment__body
            text-styles
            text-styles--secondary
            body

          ">
          <p>Freecodecamp is actually not free in Nigeria, you need to buy power and data to access the resource. </p>


        </div>
    </div>

    <footer class="comment__footer print-hidden">
  <button
    class="crayons-btn crayons-btn--ghost crayons-btn--icon-left crayons-btn--s mr-1 reaction-like inline-flex reaction-button"
    id="button-for-comment-707356"
    data-comment-id="707356"
    title="heart">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="agxv48296h6csvpftp1845lvg387wxzf" class="crayons-icon reaction-icon not-reacted"><title id="agxv48296h6csvpftp1845lvg387wxzf">Favorite heart outline button</title><path d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"></path></svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="actj05xctxiz1iilgdahhygeq8t83rjt" class="crayons-icon reaction-icon--like reaction-icon reacted"><title id="actj05xctxiz1iilgdahhygeq8t83rjt">Favorite heart outline button</title>
    <path d="M5.116 12.595a4.875 4.875 0 015.56-7.68h-.002L7.493 8.098l1.06 1.061 3.181-3.182a4.875 4.875 0 016.895 6.894L12 19.5l-6.894-6.894.01-.01z"></path>
</svg>

    <span class="reactions-count">
      3
    </span>
    <span class="reactions-label hidden m:inline-block">
      &nbsp;likes
    </span>
  </button>

    <a
      class="actions crayons-btn crayons-btn--ghost crayons-btn--s crayons-btn--icon-left toggle-reply-form mr-1 inline-flex"
      href="#/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/new/1e6a0"
      data-comment-id="707356"
      data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e6a0"
      rel="nofollow">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="anbtgvtg1stc8yw0u7223twux9t7z1zn" class="crayons-icon reaction-icon not-reacted"><title id="anbtgvtg1stc8yw0u7223twux9t7z1zn">Comment button</title><path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path></svg>

      <span class="hidden m:inline-block">Reply</span>
    </a>

</footer>

  </div>
</div>


      </div>
    </details>


      </div>
    </details>

                    <details class="comment-wrapper js-comment-wrapper comment-wrapper--deep-0 root" open>
      <summary>
        <span class="m:mx-1 inline-block align-middle">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="ahutyvpodoz5snxxv99wwyc95d534del" class="crayons-icon expanded"><title id="ahutyvpodoz5snxxv99wwyc95d534del">Collapse</title>
    <path d="M12 10.677L8 6.935 9 6l3 2.807L15 6l1 .935-4 3.742zm0 4.517L9 18l-1-.935 4-3.742 4 3.742-1 .934-3-2.805z"></path>
</svg>

          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="a4rdsj7geqp3zslbc6l3j1s0jd4guai2" class="crayons-icon collapsed"><title id="a4rdsj7geqp3zslbc6l3j1s0jd4guai2">Expand</title>
    <path d="M12 18l-4-3.771 1-.943 3 2.829 3-2.829 1 .943L12 18zm0-10.115l-3 2.829-1-.943L12 6l4 3.771-1 .942-3-2.828z"></path>
</svg>

        </span>
        <span class="js-collapse-comment-content inline-block align-middle"></span>
      </summary>
      <div
        id="comment-node-704870"
        class="
          comment single-comment-node

          root
          comment--deep-0

        "
        data-comment-id="704870"
        data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e2ia"
        data-comment-author-id="0"
        data-content-user-id="0">

<div class="comment__inner">
    <span class="shrink-0 crayons-avatar m:crayons-avatar--l mt-4 m:mt-3">
    <img class="crayons-avatar__image overflow-hidden" alt="Sloan, the sloth mascot" loading="lazy" src="https://res.cloudinary.com/practicaldev/image/fetch/s--cIrC7iqR--/c_imagga_scale,f_auto,fl_progressive,h_32,q_auto,w_32/https://dev-to-uploads.s3.amazonaws.com/i/y5767q6brm62skiyywvc.png" />
  </span>


  <div class="inner-comment comment__details">
    <div class="comment__content crayons-card">
        <div class="p-6 align-center opacity-50 fs-s">
          <span class="js-comment-username">Comment deleted</span>
        </div>
    </div>


  </div>
</div>
    <details class="comment-wrapper js-comment-wrapper comment-wrapper--deep-1 child" open>
      <summary>
        <span class="mx-0 inline-block align-middle">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="aifouj2kx0mneepz45y5basnqsdv1ujc" class="crayons-icon expanded"><title id="aifouj2kx0mneepz45y5basnqsdv1ujc">Collapse</title>
    <path d="M12 10.677L8 6.935 9 6l3 2.807L15 6l1 .935-4 3.742zm0 4.517L9 18l-1-.935 4-3.742 4 3.742-1 .934-3-2.805z"></path>
</svg>

          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="aj5kzazxdjs1y3pbk9uhnzap4h38nmw0" class="crayons-icon collapsed"><title id="aj5kzazxdjs1y3pbk9uhnzap4h38nmw0">Expand</title>
    <path d="M12 18l-4-3.771 1-.943 3 2.829 3-2.829 1 .943L12 18zm0-10.115l-3 2.829-1-.943L12 6l4 3.771-1 .942-3-2.828z"></path>
</svg>

        </span>
        <span class="js-collapse-comment-content inline-block align-middle"></span>
      </summary>
      <div
        id="comment-node-704925"
        class="
          comment single-comment-node

          child
          comment--deep-1

        "
        data-comment-id="704925"
        data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e2kd"
        data-comment-author-id="435270"
        data-content-user-id="435270">

<div class="comment__inner">
    <a href="https://dev.to/resourcefulmind" class="shrink-0 crayons-avatar mt-4">
    <img class="crayons-avatar__image" width="32" height="32" src="https://res.cloudinary.com/practicaldev/image/fetch/s--6y949wgP--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/435270/7ca3876e-ca85-478e-a2fa-c634f4a78121.png" alt="resourcefulmind profile image" />
  </a>


  <div class="inner-comment comment__details">
    <div class="comment__content crayons-card">



        <header class="comment__header">
  <a href="https://dev.to/resourcefulmind" class="crayons-link crayons-link--secondary flex items-center fw-medium">
    <span class="js-comment-username">Opeyemi Stephen</span>
      <span class="crayons-tooltip inline-block spec-op-author -mr-2" data-tooltip="Author">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="a2affln7srzc4g8p8obb9kp13dqr7zdt" class="crayons-icon"><title id="a2affln7srzc4g8p8obb9kp13dqr7zdt">Author</title>
    <path d="M12 8.25a6 6 0 110 12 6 6 0 010-12zm0 2.625l-.992 2.01-2.218.322 1.605 1.564-.379 2.21L12 15.937l1.984 1.043-.379-2.209 1.605-1.564-2.218-.323L12 10.875zm.75-6.376l3.75.001v2.25l-1.022.854a7.45 7.45 0 00-2.728-.817V4.5zm-1.5 0v2.288a7.451 7.451 0 00-2.727.816L7.5 6.75V4.5h3.75z"></path>
</svg>

      </span>
  </a>

  <span class="color-base-30 px-2" role="presentation">&bull;</span>

<a href="https://dev.to/resourcefulmind/comment/1e2kd" class="comment-date crayons-link crayons-link--secondary fs-s">
  <time datetime="2021-04-30T07:11:28Z">
    Apr 30
  </time>

</a>


  <div class="comment__dropdown">
    <button class="dropbtn comment__dropdown-trigger crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon" aria-label="Toggle dropdown menu" aria-haspopup="true">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="a1uburdrj6plbukfmuoblhrk7msm6ks" class="crayons-icon pointer-events-none"><title id="a1uburdrj6plbukfmuoblhrk7msm6ks">Dropdown menu</title>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.25 12a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm5.25 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm3.75 1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
</svg>

    </button>
    <ul class="crayons-dropdown p-1 right-1 s:right-0 s:left-auto fs-base dropdown">
      <li><a href="https://dev.to/resourcefulmind/comment/1e2kd" class="crayons-link crayons-link--block permalink-copybtn" aria-label="Copy link to Opeyemi Stephen's comment" data-no-instant>Copy link</a></li>
      <li class="comment-actions hidden" data-user-id="435270" data-action="settings-button" data-path="https://dev.to/resourcefulmind/comment/1e2kd/settings" aria-label="Go to Opeyemi Stephen's comment settings"></li>
      <li class="comment-actions hidden" data-action="hide-button" data-commentable-user-id="435270" data-user-id="435270">
        <a href="#" class="crayons-link crayons-link--block hide-comment" data-hide-type="hide" data-comment-id="704925" aria-label="Hide Opeyemi Stephen's comment">
          Hide
        </a>
      </li>
      <li class="mod-actions hidden mod-actions-comment-button" data-path="https://dev.to/resourcefulmind/comment/1e2kd/mod" aria-label="Moderate Opeyemi Stephen's comment"></li>
      <li class="report-abuse-link-wrapper" data-path="/report-abuse?url=https://dev.to/resourcefulmind/comment/1e2kd" aria-label="Report Opeyemi Stephen's comment as abusive or violating our code of conduct and/or terms and conditions"></li>
      <li class="current-user-actions"></li>
    </ul>
  </div>
</header>


        <div
          class="
            comment__body
            text-styles
            text-styles--secondary
            body

          ">
          <p>I can totally resonate. I’ll send some openings your way and if you want I could teach you how to optimize your LinkedIn too</p>


        </div>
    </div>

    <footer class="comment__footer print-hidden">
  <button
    class="crayons-btn crayons-btn--ghost crayons-btn--icon-left crayons-btn--s mr-1 reaction-like inline-flex reaction-button"
    id="button-for-comment-704925"
    data-comment-id="704925"
    title="heart">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="aqk5yt9jy6zx9o9owmxbtb4y4ojpwgni" class="crayons-icon reaction-icon not-reacted"><title id="aqk5yt9jy6zx9o9owmxbtb4y4ojpwgni">Favorite heart outline button</title><path d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"></path></svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="ad7dvz5vk5w0d14rw2vj6wt3oyyh746b" class="crayons-icon reaction-icon--like reaction-icon reacted"><title id="ad7dvz5vk5w0d14rw2vj6wt3oyyh746b">Favorite heart outline button</title>
    <path d="M5.116 12.595a4.875 4.875 0 015.56-7.68h-.002L7.493 8.098l1.06 1.061 3.181-3.182a4.875 4.875 0 016.895 6.894L12 19.5l-6.894-6.894.01-.01z"></path>
</svg>

    <span class="reactions-count">
      4
    </span>
    <span class="reactions-label hidden m:inline-block">
      &nbsp;likes
    </span>
  </button>

    <a
      class="actions crayons-btn crayons-btn--ghost crayons-btn--s crayons-btn--icon-left toggle-reply-form mr-1 inline-flex"
      href="#/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/new/1e2kd"
      data-comment-id="704925"
      data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e2kd"
      rel="nofollow">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="acmssbwlv4ci1rjt5jsr0cjdumklez5e" class="crayons-icon reaction-icon not-reacted"><title id="acmssbwlv4ci1rjt5jsr0cjdumklez5e">Comment button</title><path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path></svg>

      <span class="hidden m:inline-block">Reply</span>
    </a>

</footer>

  </div>
</div>
    <details class="comment-wrapper js-comment-wrapper comment-wrapper--deep-2 child" open>
      <summary>
        <span class="mx-0 inline-block align-middle">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="afnsyqlriljr8q5c0oahip2tnkj95ep7" class="crayons-icon expanded"><title id="afnsyqlriljr8q5c0oahip2tnkj95ep7">Collapse</title>
    <path d="M12 10.677L8 6.935 9 6l3 2.807L15 6l1 .935-4 3.742zm0 4.517L9 18l-1-.935 4-3.742 4 3.742-1 .934-3-2.805z"></path>
</svg>

          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="an7qykvslrrr0eqoevnwo5g772i9jqgf" class="crayons-icon collapsed"><title id="an7qykvslrrr0eqoevnwo5g772i9jqgf">Expand</title>
    <path d="M12 18l-4-3.771 1-.943 3 2.829 3-2.829 1 .943L12 18zm0-10.115l-3 2.829-1-.943L12 6l4 3.771-1 .942-3-2.828z"></path>
</svg>

        </span>
        <span class="js-collapse-comment-content inline-block align-middle"></span>
      </summary>
      <div
        id="comment-node-707450"
        class="
          comment single-comment-node

          child
          comment--deep-2

        "
        data-comment-id="707450"
        data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e6dg"
        data-comment-author-id="359075"
        data-content-user-id="359075">

<div class="comment__inner">
    <a href="https://dev.to/mzkenna" class="shrink-0 crayons-avatar mt-4">
    <img class="crayons-avatar__image" width="32" height="32" src="https://res.cloudinary.com/practicaldev/image/fetch/s--9imv-MW2--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/359075/3858eaf5-7179-4f0c-94d4-7fbc3b494143.png" alt="mzkenna profile image" />
  </a>


  <div class="inner-comment comment__details">
    <div class="comment__content crayons-card">



        <header class="comment__header">
  <a href="https://dev.to/mzkenna" class="crayons-link crayons-link--secondary flex items-center fw-medium">
    <span class="js-comment-username">mzkenna</span>
  </a>

  <span class="color-base-30 px-2" role="presentation">&bull;</span>

<a href="https://dev.to/mzkenna/comment/1e6dg" class="comment-date crayons-link crayons-link--secondary fs-s">
  <time datetime="2021-05-05T04:10:39Z">
    May 5
  </time>

</a>


  <div class="comment__dropdown">
    <button class="dropbtn comment__dropdown-trigger crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon" aria-label="Toggle dropdown menu" aria-haspopup="true">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="a4ei93dlrk3ifqhduz0lr90mz4v9ty9u" class="crayons-icon pointer-events-none"><title id="a4ei93dlrk3ifqhduz0lr90mz4v9ty9u">Dropdown menu</title>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.25 12a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm5.25 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm3.75 1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
</svg>

    </button>
    <ul class="crayons-dropdown p-1 right-1 s:right-0 s:left-auto fs-base dropdown">
      <li><a href="https://dev.to/mzkenna/comment/1e6dg" class="crayons-link crayons-link--block permalink-copybtn" aria-label="Copy link to mzkenna's comment" data-no-instant>Copy link</a></li>
      <li class="comment-actions hidden" data-user-id="359075" data-action="settings-button" data-path="https://dev.to/mzkenna/comment/1e6dg/settings" aria-label="Go to mzkenna's comment settings"></li>
      <li class="comment-actions hidden" data-action="hide-button" data-commentable-user-id="435270" data-user-id="359075">
        <a href="#" class="crayons-link crayons-link--block hide-comment" data-hide-type="hide" data-comment-id="707450" aria-label="Hide mzkenna's comment">
          Hide
        </a>
      </li>
      <li class="mod-actions hidden mod-actions-comment-button" data-path="https://dev.to/mzkenna/comment/1e6dg/mod" aria-label="Moderate mzkenna's comment"></li>
      <li class="report-abuse-link-wrapper" data-path="/report-abuse?url=https://dev.to/mzkenna/comment/1e6dg" aria-label="Report mzkenna's comment as abusive or violating our code of conduct and/or terms and conditions"></li>
      <li class="current-user-actions"></li>
    </ul>
  </div>
</header>


        <div
          class="
            comment__body
            text-styles
            text-styles--secondary
            body

          ">
          <p>Hello Opeyemi , so well written and here we are with our minds made up we will keep fighting till it is bright and we reach our goal, yes we are Spartans..... I'd like to learn how to optimize my LinkedIn pleaae</p>


        </div>
    </div>

    <footer class="comment__footer print-hidden">
  <button
    class="crayons-btn crayons-btn--ghost crayons-btn--icon-left crayons-btn--s mr-1 reaction-like inline-flex reaction-button"
    id="button-for-comment-707450"
    data-comment-id="707450"
    title="heart">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="albld2hqqeatx0y69705xl4pe5uhdwoi" class="crayons-icon reaction-icon not-reacted"><title id="albld2hqqeatx0y69705xl4pe5uhdwoi">Favorite heart outline button</title><path d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"></path></svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="al5e69kxguvsyv0huude311cxygaw2kn" class="crayons-icon reaction-icon--like reaction-icon reacted"><title id="al5e69kxguvsyv0huude311cxygaw2kn">Favorite heart outline button</title>
    <path d="M5.116 12.595a4.875 4.875 0 015.56-7.68h-.002L7.493 8.098l1.06 1.061 3.181-3.182a4.875 4.875 0 016.895 6.894L12 19.5l-6.894-6.894.01-.01z"></path>
</svg>

    <span class="reactions-count">

    </span>
    <span class="reactions-label hidden m:inline-block">
      Like
    </span>
  </button>

    <a
      class="actions crayons-btn crayons-btn--ghost crayons-btn--s crayons-btn--icon-left toggle-reply-form mr-1 inline-flex"
      href="#/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/new/1e6dg"
      data-comment-id="707450"
      data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e6dg"
      rel="nofollow">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="aicqz0p7tgjrda2g1qwkhovyqwptdat4" class="crayons-icon reaction-icon not-reacted"><title id="aicqz0p7tgjrda2g1qwkhovyqwptdat4">Comment button</title><path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path></svg>

      <span class="hidden m:inline-block">Reply</span>
    </a>

</footer>

  </div>
</div>


      </div>
    </details>
    <details class="comment-wrapper js-comment-wrapper comment-wrapper--deep-2 child" open>
      <summary>
        <span class="mx-0 inline-block align-middle">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="al6ab3ls2atfywoxw4ajjs7mzdogvq9n" class="crayons-icon expanded"><title id="al6ab3ls2atfywoxw4ajjs7mzdogvq9n">Collapse</title>
    <path d="M12 10.677L8 6.935 9 6l3 2.807L15 6l1 .935-4 3.742zm0 4.517L9 18l-1-.935 4-3.742 4 3.742-1 .934-3-2.805z"></path>
</svg>

          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="am0zr0i4cycvueg5d5vs4iqy2ik5etrj" class="crayons-icon collapsed"><title id="am0zr0i4cycvueg5d5vs4iqy2ik5etrj">Expand</title>
    <path d="M12 18l-4-3.771 1-.943 3 2.829 3-2.829 1 .943L12 18zm0-10.115l-3 2.829-1-.943L12 6l4 3.771-1 .942-3-2.828z"></path>
</svg>

        </span>
        <span class="js-collapse-comment-content inline-block align-middle"></span>
      </summary>
      <div
        id="comment-node-705297"
        class="
          comment single-comment-node

          child
          comment--deep-2

        "
        data-comment-id="705297"
        data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e38l"
        data-comment-author-id="623231"
        data-content-user-id="623231">

<div class="comment__inner">
    <a href="https://dev.to/dammyreginal" class="shrink-0 crayons-avatar mt-4">
    <img class="crayons-avatar__image" width="32" height="32" src="https://res.cloudinary.com/practicaldev/image/fetch/s--PAJ_AAG1--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/623231/702125ba-6fff-45c7-b396-a25fade749bf.jpeg" alt="dammyreginal profile image" />
  </a>


  <div class="inner-comment comment__details">
    <div class="comment__content crayons-card">



        <header class="comment__header">
  <a href="https://dev.to/dammyreginal" class="crayons-link crayons-link--secondary flex items-center fw-medium">
    <span class="js-comment-username">dammyreginal</span>
  </a>

  <span class="color-base-30 px-2" role="presentation">&bull;</span>

<a href="https://dev.to/dammyreginal/comment/1e38l" class="comment-date crayons-link crayons-link--secondary fs-s">
  <time datetime="2021-04-30T19:16:32Z">
    Apr 30
  </time>

</a>


  <div class="comment__dropdown">
    <button class="dropbtn comment__dropdown-trigger crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon" aria-label="Toggle dropdown menu" aria-haspopup="true">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="atkhgqw392d8bmn1z5c8lqj4n0ol9x1o" class="crayons-icon pointer-events-none"><title id="atkhgqw392d8bmn1z5c8lqj4n0ol9x1o">Dropdown menu</title>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.25 12a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm5.25 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm3.75 1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
</svg>

    </button>
    <ul class="crayons-dropdown p-1 right-1 s:right-0 s:left-auto fs-base dropdown">
      <li><a href="https://dev.to/dammyreginal/comment/1e38l" class="crayons-link crayons-link--block permalink-copybtn" aria-label="Copy link to dammyreginal's comment" data-no-instant>Copy link</a></li>
      <li class="comment-actions hidden" data-user-id="623231" data-action="settings-button" data-path="https://dev.to/dammyreginal/comment/1e38l/settings" aria-label="Go to dammyreginal's comment settings"></li>
      <li class="comment-actions hidden" data-action="hide-button" data-commentable-user-id="435270" data-user-id="623231">
        <a href="#" class="crayons-link crayons-link--block hide-comment" data-hide-type="hide" data-comment-id="705297" aria-label="Hide dammyreginal's comment">
          Hide
        </a>
      </li>
      <li class="mod-actions hidden mod-actions-comment-button" data-path="https://dev.to/dammyreginal/comment/1e38l/mod" aria-label="Moderate dammyreginal's comment"></li>
      <li class="report-abuse-link-wrapper" data-path="/report-abuse?url=https://dev.to/dammyreginal/comment/1e38l" aria-label="Report dammyreginal's comment as abusive or violating our code of conduct and/or terms and conditions"></li>
      <li class="current-user-actions"></li>
    </ul>
  </div>
</header>


        <div
          class="
            comment__body
            text-styles
            text-styles--secondary
            body

          ">
          <p>Yes, I will apappreciate </p>


        </div>
    </div>

    <footer class="comment__footer print-hidden">
  <button
    class="crayons-btn crayons-btn--ghost crayons-btn--icon-left crayons-btn--s mr-1 reaction-like inline-flex reaction-button"
    id="button-for-comment-705297"
    data-comment-id="705297"
    title="heart">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="a9pgqxye8bapoja9h78twymtktjkl2ws" class="crayons-icon reaction-icon not-reacted"><title id="a9pgqxye8bapoja9h78twymtktjkl2ws">Favorite heart outline button</title><path d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"></path></svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="a2qr1cagsnbmdvzr5tos0frr84nuuwfr" class="crayons-icon reaction-icon--like reaction-icon reacted"><title id="a2qr1cagsnbmdvzr5tos0frr84nuuwfr">Favorite heart outline button</title>
    <path d="M5.116 12.595a4.875 4.875 0 015.56-7.68h-.002L7.493 8.098l1.06 1.061 3.181-3.182a4.875 4.875 0 016.895 6.894L12 19.5l-6.894-6.894.01-.01z"></path>
</svg>

    <span class="reactions-count">
      1
    </span>
    <span class="reactions-label hidden m:inline-block">
      &nbsp;like
    </span>
  </button>

    <a
      class="actions crayons-btn crayons-btn--ghost crayons-btn--s crayons-btn--icon-left toggle-reply-form mr-1 inline-flex"
      href="#/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/new/1e38l"
      data-comment-id="705297"
      data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e38l"
      rel="nofollow">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="a5vl2sxpxw3gg1s8e13fmhcpwy8l78d5" class="crayons-icon reaction-icon not-reacted"><title id="a5vl2sxpxw3gg1s8e13fmhcpwy8l78d5">Comment button</title><path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path></svg>

      <span class="hidden m:inline-block">Reply</span>
    </a>

</footer>

  </div>
</div>


      </div>
    </details>


      </div>
    </details>


      </div>
    </details>

                    <details class="comment-wrapper js-comment-wrapper comment-wrapper--deep-0 root" open>
      <summary>
        <span class="m:mx-1 inline-block align-middle">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="abdc6llxq4plipud85l5cv65tnaub7g4" class="crayons-icon expanded"><title id="abdc6llxq4plipud85l5cv65tnaub7g4">Collapse</title>
    <path d="M12 10.677L8 6.935 9 6l3 2.807L15 6l1 .935-4 3.742zm0 4.517L9 18l-1-.935 4-3.742 4 3.742-1 .934-3-2.805z"></path>
</svg>

          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="a93dlo9sq9immslb2h5piqtpzbdu7lgn" class="crayons-icon collapsed"><title id="a93dlo9sq9immslb2h5piqtpzbdu7lgn">Expand</title>
    <path d="M12 18l-4-3.771 1-.943 3 2.829 3-2.829 1 .943L12 18zm0-10.115l-3 2.829-1-.943L12 6l4 3.771-1 .942-3-2.828z"></path>
</svg>

        </span>
        <span class="js-collapse-comment-content inline-block align-middle"></span>
      </summary>
      <div
        id="comment-node-704375"
        class="
          comment single-comment-node

          root
          comment--deep-0

        "
        data-comment-id="704375"
        data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e1p9"
        data-comment-author-id="622888"
        data-content-user-id="622888">

<div class="comment__inner">
    <a href="https://dev.to/kwennb" class="shrink-0 crayons-avatar m:crayons-avatar--l mt-4 m:mt-3">
    <img class="crayons-avatar__image" width="32" height="32" src="https://res.cloudinary.com/practicaldev/image/fetch/s--RdhDLOV3--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/622888/df244098-81ed-4f40-931e-613a078bc62c.jpeg" alt="kwennb profile image" />
  </a>


  <div class="inner-comment comment__details">
    <div class="comment__content crayons-card">



        <header class="comment__header">
  <a href="https://dev.to/kwennb" class="crayons-link crayons-link--secondary flex items-center fw-medium">
    <span class="js-comment-username">KwennB</span>
  </a>

  <span class="color-base-30 px-2" role="presentation">&bull;</span>

<a href="https://dev.to/kwennb/comment/1e1p9" class="comment-date crayons-link crayons-link--secondary fs-s">
  <time datetime="2021-04-29T11:41:18Z">
    Apr 29
  </time>

</a>


  <div class="comment__dropdown">
    <button class="dropbtn comment__dropdown-trigger crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon" aria-label="Toggle dropdown menu" aria-haspopup="true">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="adaliu7s768wbtbsjka15mxm0pgmlqh0" class="crayons-icon pointer-events-none"><title id="adaliu7s768wbtbsjka15mxm0pgmlqh0">Dropdown menu</title>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.25 12a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm5.25 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm3.75 1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
</svg>

    </button>
    <ul class="crayons-dropdown p-1 right-1 s:right-0 s:left-auto fs-base dropdown">
      <li><a href="https://dev.to/kwennb/comment/1e1p9" class="crayons-link crayons-link--block permalink-copybtn" aria-label="Copy link to KwennB's comment" data-no-instant>Copy link</a></li>
      <li class="comment-actions hidden" data-user-id="622888" data-action="settings-button" data-path="https://dev.to/kwennb/comment/1e1p9/settings" aria-label="Go to KwennB's comment settings"></li>
      <li class="comment-actions hidden" data-action="hide-button" data-commentable-user-id="435270" data-user-id="622888">
        <a href="#" class="crayons-link crayons-link--block hide-comment" data-hide-type="hide" data-comment-id="704375" aria-label="Hide KwennB's comment">
          Hide
        </a>
      </li>
      <li class="mod-actions hidden mod-actions-comment-button" data-path="https://dev.to/kwennb/comment/1e1p9/mod" aria-label="Moderate KwennB's comment"></li>
      <li class="report-abuse-link-wrapper" data-path="/report-abuse?url=https://dev.to/kwennb/comment/1e1p9" aria-label="Report KwennB's comment as abusive or violating our code of conduct and/or terms and conditions"></li>
      <li class="current-user-actions"></li>
    </ul>
  </div>
</header>


        <div
          class="
            comment__body
            text-styles
            text-styles--secondary
            body

          ">
          <p>Thank you for putting this out there. I sincerely hope that we that are grooming ourselves now, would scale through faster, so we can help newbies who cannot really assist themselves (Financially and otherwise).</p>


        </div>
    </div>

    <footer class="comment__footer print-hidden">
  <button
    class="crayons-btn crayons-btn--ghost crayons-btn--icon-left crayons-btn--s mr-1 reaction-like inline-flex reaction-button"
    id="button-for-comment-704375"
    data-comment-id="704375"
    title="heart">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="asdde6xjo0quj8ysdybaguezd87pw20d" class="crayons-icon reaction-icon not-reacted"><title id="asdde6xjo0quj8ysdybaguezd87pw20d">Favorite heart outline button</title><path d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"></path></svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="a1bde26l9vudvx2tv2st8tero1areq3g" class="crayons-icon reaction-icon--like reaction-icon reacted"><title id="a1bde26l9vudvx2tv2st8tero1areq3g">Favorite heart outline button</title>
    <path d="M5.116 12.595a4.875 4.875 0 015.56-7.68h-.002L7.493 8.098l1.06 1.061 3.181-3.182a4.875 4.875 0 016.895 6.894L12 19.5l-6.894-6.894.01-.01z"></path>
</svg>

    <span class="reactions-count">
      6
    </span>
    <span class="reactions-label hidden m:inline-block">
      &nbsp;likes
    </span>
  </button>

    <a
      class="actions crayons-btn crayons-btn--ghost crayons-btn--s crayons-btn--icon-left toggle-reply-form mr-1 inline-flex"
      href="#/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/new/1e1p9"
      data-comment-id="704375"
      data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e1p9"
      rel="nofollow">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="apycmssz280u32yu3kbmne58n6hhlw15" class="crayons-icon reaction-icon not-reacted"><title id="apycmssz280u32yu3kbmne58n6hhlw15">Comment button</title><path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path></svg>

      <span class="hidden m:inline-block">Reply</span>
    </a>

</footer>

  </div>
</div>
    <details class="comment-wrapper js-comment-wrapper comment-wrapper--deep-1 child" open>
      <summary>
        <span class="mx-0 inline-block align-middle">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="atp9d5tosuzrb6e4gcidvygwg8nve6ia" class="crayons-icon expanded"><title id="atp9d5tosuzrb6e4gcidvygwg8nve6ia">Collapse</title>
    <path d="M12 10.677L8 6.935 9 6l3 2.807L15 6l1 .935-4 3.742zm0 4.517L9 18l-1-.935 4-3.742 4 3.742-1 .934-3-2.805z"></path>
</svg>

          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="afa0q99flmo3taqnoxcwucr5b9cjaye9" class="crayons-icon collapsed"><title id="afa0q99flmo3taqnoxcwucr5b9cjaye9">Expand</title>
    <path d="M12 18l-4-3.771 1-.943 3 2.829 3-2.829 1 .943L12 18zm0-10.115l-3 2.829-1-.943L12 6l4 3.771-1 .942-3-2.828z"></path>
</svg>

        </span>
        <span class="js-collapse-comment-content inline-block align-middle"></span>
      </summary>
      <div
        id="comment-node-704610"
        class="
          comment single-comment-node

          child
          comment--deep-1

        "
        data-comment-id="704610"
        data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e28a"
        data-comment-author-id="435270"
        data-content-user-id="435270">

<div class="comment__inner">
    <a href="https://dev.to/resourcefulmind" class="shrink-0 crayons-avatar mt-4">
    <img class="crayons-avatar__image" width="32" height="32" src="https://res.cloudinary.com/practicaldev/image/fetch/s--6y949wgP--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/435270/7ca3876e-ca85-478e-a2fa-c634f4a78121.png" alt="resourcefulmind profile image" />
  </a>


  <div class="inner-comment comment__details">
    <div class="comment__content crayons-card">



        <header class="comment__header">
  <a href="https://dev.to/resourcefulmind" class="crayons-link crayons-link--secondary flex items-center fw-medium">
    <span class="js-comment-username">Opeyemi Stephen</span>
      <span class="crayons-tooltip inline-block spec-op-author -mr-2" data-tooltip="Author">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="afw9tkkev9cbdkaggno93252ht6x6hy5" class="crayons-icon"><title id="afw9tkkev9cbdkaggno93252ht6x6hy5">Author</title>
    <path d="M12 8.25a6 6 0 110 12 6 6 0 010-12zm0 2.625l-.992 2.01-2.218.322 1.605 1.564-.379 2.21L12 15.937l1.984 1.043-.379-2.209 1.605-1.564-2.218-.323L12 10.875zm.75-6.376l3.75.001v2.25l-1.022.854a7.45 7.45 0 00-2.728-.817V4.5zm-1.5 0v2.288a7.451 7.451 0 00-2.727.816L7.5 6.75V4.5h3.75z"></path>
</svg>

      </span>
  </a>

  <span class="color-base-30 px-2" role="presentation">&bull;</span>

<a href="https://dev.to/resourcefulmind/comment/1e28a" class="comment-date crayons-link crayons-link--secondary fs-s">
  <time datetime="2021-04-29T15:54:08Z">
    Apr 29
  </time>

</a>


  <div class="comment__dropdown">
    <button class="dropbtn comment__dropdown-trigger crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon" aria-label="Toggle dropdown menu" aria-haspopup="true">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="ac3fzz9xwz37g3l5wyr4fbewk6o3g7sv" class="crayons-icon pointer-events-none"><title id="ac3fzz9xwz37g3l5wyr4fbewk6o3g7sv">Dropdown menu</title>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.25 12a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm5.25 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm3.75 1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
</svg>

    </button>
    <ul class="crayons-dropdown p-1 right-1 s:right-0 s:left-auto fs-base dropdown">
      <li><a href="https://dev.to/resourcefulmind/comment/1e28a" class="crayons-link crayons-link--block permalink-copybtn" aria-label="Copy link to Opeyemi Stephen's comment" data-no-instant>Copy link</a></li>
      <li class="comment-actions hidden" data-user-id="435270" data-action="settings-button" data-path="https://dev.to/resourcefulmind/comment/1e28a/settings" aria-label="Go to Opeyemi Stephen's comment settings"></li>
      <li class="comment-actions hidden" data-action="hide-button" data-commentable-user-id="435270" data-user-id="435270">
        <a href="#" class="crayons-link crayons-link--block hide-comment" data-hide-type="hide" data-comment-id="704610" aria-label="Hide Opeyemi Stephen's comment">
          Hide
        </a>
      </li>
      <li class="mod-actions hidden mod-actions-comment-button" data-path="https://dev.to/resourcefulmind/comment/1e28a/mod" aria-label="Moderate Opeyemi Stephen's comment"></li>
      <li class="report-abuse-link-wrapper" data-path="/report-abuse?url=https://dev.to/resourcefulmind/comment/1e28a" aria-label="Report Opeyemi Stephen's comment as abusive or violating our code of conduct and/or terms and conditions"></li>
      <li class="current-user-actions"></li>
    </ul>
  </div>
</header>


        <div
          class="
            comment__body
            text-styles
            text-styles--secondary
            body

          ">
          <p>That’s one of my long-term goals. I want to make sure all we have to do is look for talent. They won’t have to worry about other factors like having electricity or buying data and other things which slowly but surely messes up the mind. </p>

<p>It’s a collective effort though and one person cannot do it all but we can start by touching lives in our own little spaces.</p>


        </div>
    </div>

    <footer class="comment__footer print-hidden">
  <button
    class="crayons-btn crayons-btn--ghost crayons-btn--icon-left crayons-btn--s mr-1 reaction-like inline-flex reaction-button"
    id="button-for-comment-704610"
    data-comment-id="704610"
    title="heart">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="askka68o0e4ycdw84mfcqafo4aay3v71" class="crayons-icon reaction-icon not-reacted"><title id="askka68o0e4ycdw84mfcqafo4aay3v71">Favorite heart outline button</title><path d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"></path></svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="ah30twmetcfc491paok992g1ji54189v" class="crayons-icon reaction-icon--like reaction-icon reacted"><title id="ah30twmetcfc491paok992g1ji54189v">Favorite heart outline button</title>
    <path d="M5.116 12.595a4.875 4.875 0 015.56-7.68h-.002L7.493 8.098l1.06 1.061 3.181-3.182a4.875 4.875 0 016.895 6.894L12 19.5l-6.894-6.894.01-.01z"></path>
</svg>

    <span class="reactions-count">
      8
    </span>
    <span class="reactions-label hidden m:inline-block">
      &nbsp;likes
    </span>
  </button>

    <a
      class="actions crayons-btn crayons-btn--ghost crayons-btn--s crayons-btn--icon-left toggle-reply-form mr-1 inline-flex"
      href="#/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/new/1e28a"
      data-comment-id="704610"
      data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e28a"
      rel="nofollow">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="asib06ciwehj95dpoo8squawbmxncsc8" class="crayons-icon reaction-icon not-reacted"><title id="asib06ciwehj95dpoo8squawbmxncsc8">Comment button</title><path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path></svg>

      <span class="hidden m:inline-block">Reply</span>
    </a>

</footer>

  </div>
</div>
    <details class="comment-wrapper js-comment-wrapper comment-wrapper--deep-2 child" open>
      <summary>
        <span class="mx-0 inline-block align-middle">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="ait6hfmvupu02duvjbsikx8zrlgtwrom" class="crayons-icon expanded"><title id="ait6hfmvupu02duvjbsikx8zrlgtwrom">Collapse</title>
    <path d="M12 10.677L8 6.935 9 6l3 2.807L15 6l1 .935-4 3.742zm0 4.517L9 18l-1-.935 4-3.742 4 3.742-1 .934-3-2.805z"></path>
</svg>

          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="a5p0mlnob6k15c2cdj1jbe5nzglt7wp8" class="crayons-icon collapsed"><title id="a5p0mlnob6k15c2cdj1jbe5nzglt7wp8">Expand</title>
    <path d="M12 18l-4-3.771 1-.943 3 2.829 3-2.829 1 .943L12 18zm0-10.115l-3 2.829-1-.943L12 6l4 3.771-1 .942-3-2.828z"></path>
</svg>

        </span>
        <span class="js-collapse-comment-content inline-block align-middle"></span>
      </summary>
      <div
        id="comment-node-704617"
        class="
          comment single-comment-node

          child
          comment--deep-2

        "
        data-comment-id="704617"
        data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e28h"
        data-comment-author-id="622888"
        data-content-user-id="622888">

<div class="comment__inner">
    <a href="https://dev.to/kwennb" class="shrink-0 crayons-avatar mt-4">
    <img class="crayons-avatar__image" width="32" height="32" src="https://res.cloudinary.com/practicaldev/image/fetch/s--RdhDLOV3--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/622888/df244098-81ed-4f40-931e-613a078bc62c.jpeg" alt="kwennb profile image" />
  </a>


  <div class="inner-comment comment__details">
    <div class="comment__content crayons-card">



        <header class="comment__header">
  <a href="https://dev.to/kwennb" class="crayons-link crayons-link--secondary flex items-center fw-medium">
    <span class="js-comment-username">KwennB</span>
  </a>

  <span class="color-base-30 px-2" role="presentation">&bull;</span>

<a href="https://dev.to/kwennb/comment/1e28h" class="comment-date crayons-link crayons-link--secondary fs-s">
  <time datetime="2021-04-29T16:00:01Z">
    Apr 29
  </time>

</a>


  <div class="comment__dropdown">
    <button class="dropbtn comment__dropdown-trigger crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon" aria-label="Toggle dropdown menu" aria-haspopup="true">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="aa9gxj1rv7ie5gd29qtb94jmcvim0pr4" class="crayons-icon pointer-events-none"><title id="aa9gxj1rv7ie5gd29qtb94jmcvim0pr4">Dropdown menu</title>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.25 12a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm5.25 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm3.75 1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
</svg>

    </button>
    <ul class="crayons-dropdown p-1 right-1 s:right-0 s:left-auto fs-base dropdown">
      <li><a href="https://dev.to/kwennb/comment/1e28h" class="crayons-link crayons-link--block permalink-copybtn" aria-label="Copy link to KwennB's comment" data-no-instant>Copy link</a></li>
      <li class="comment-actions hidden" data-user-id="622888" data-action="settings-button" data-path="https://dev.to/kwennb/comment/1e28h/settings" aria-label="Go to KwennB's comment settings"></li>
      <li class="comment-actions hidden" data-action="hide-button" data-commentable-user-id="435270" data-user-id="622888">
        <a href="#" class="crayons-link crayons-link--block hide-comment" data-hide-type="hide" data-comment-id="704617" aria-label="Hide KwennB's comment">
          Hide
        </a>
      </li>
      <li class="mod-actions hidden mod-actions-comment-button" data-path="https://dev.to/kwennb/comment/1e28h/mod" aria-label="Moderate KwennB's comment"></li>
      <li class="report-abuse-link-wrapper" data-path="/report-abuse?url=https://dev.to/kwennb/comment/1e28h" aria-label="Report KwennB's comment as abusive or violating our code of conduct and/or terms and conditions"></li>
      <li class="current-user-actions"></li>
    </ul>
  </div>
</header>


        <div
          class="
            comment__body
            text-styles
            text-styles--secondary
            body

          ">
          <p>Yes we can.</p>


        </div>
    </div>

    <footer class="comment__footer print-hidden">
  <button
    class="crayons-btn crayons-btn--ghost crayons-btn--icon-left crayons-btn--s mr-1 reaction-like inline-flex reaction-button"
    id="button-for-comment-704617"
    data-comment-id="704617"
    title="heart">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="a5ph7431cosklsv6xaqqhg5ne082pv5v" class="crayons-icon reaction-icon not-reacted"><title id="a5ph7431cosklsv6xaqqhg5ne082pv5v">Favorite heart outline button</title><path d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"></path></svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="a6wu2n4zmfz6k3zwl4sj5xu04lqhpmz8" class="crayons-icon reaction-icon--like reaction-icon reacted"><title id="a6wu2n4zmfz6k3zwl4sj5xu04lqhpmz8">Favorite heart outline button</title>
    <path d="M5.116 12.595a4.875 4.875 0 015.56-7.68h-.002L7.493 8.098l1.06 1.061 3.181-3.182a4.875 4.875 0 016.895 6.894L12 19.5l-6.894-6.894.01-.01z"></path>
</svg>

    <span class="reactions-count">
      1
    </span>
    <span class="reactions-label hidden m:inline-block">
      &nbsp;like
    </span>
  </button>

    <span class="fs-s inline-flex items-center fs-italic color-base-50 pl-1">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="abdxvrcxqxhv3bnqj4u5hewb6yy1oib3" class="crayons-icon"><title id="abdxvrcxqxhv3bnqj4u5hewb6yy1oib3">Thread</title>
    <path d="M17 13l-5 6-5-6h3.125c0-3.314 2.798-6 6.25-6 .17 0 .34.006.506.02-1.787.904-3.006 2.705-3.006 4.78V13H17z"></path>
</svg>

      Thread
    </span>

</footer>

  </div>
</div>
      <div
        id="comment-node-704946"
        class="
          comment single-comment-node

          child
          comment--deep-3

        "
        data-comment-id="704946"
        data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e2l8"
        data-comment-author-id="0"
        data-content-user-id="0">

<div class="comment__inner">
    <span class="shrink-0 crayons-avatar mt-4">
    <img class="crayons-avatar__image overflow-hidden" alt="Sloan, the sloth mascot" loading="lazy" src="https://res.cloudinary.com/practicaldev/image/fetch/s--cIrC7iqR--/c_imagga_scale,f_auto,fl_progressive,h_32,q_auto,w_32/https://dev-to-uploads.s3.amazonaws.com/i/y5767q6brm62skiyywvc.png" />
  </span>


  <div class="inner-comment comment__details">
    <div class="comment__content crayons-card">
        <div class="p-6 align-center opacity-50 fs-s">
          <span class="js-comment-username">Comment deleted</span>
        </div>
    </div>


  </div>
</div>
      <div
        id="comment-node-705171"
        class="
          comment single-comment-node

          child
          comment--deep-4
          comment--too-deep
        "
        data-comment-id="705171"
        data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e33p"
        data-comment-author-id="523109"
        data-content-user-id="523109">

<div class="comment__inner">
    <a href="https://dev.to/brainiacm" class="shrink-0 crayons-avatar mt-4">
    <img class="crayons-avatar__image" width="32" height="32" src="https://res.cloudinary.com/practicaldev/image/fetch/s--wGCY5ZWU--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/523109/4922cb65-2de4-4e82-8bb1-d40419d12dc0.jpeg" alt="brainiacm profile image" />
  </a>


  <div class="inner-comment comment__details">
    <div class="comment__content crayons-card">



        <header class="comment__header">
  <a href="https://dev.to/brainiacm" class="crayons-link crayons-link--secondary flex items-center fw-medium">
    <span class="js-comment-username">Fox_Coder508</span>
  </a>

  <span class="color-base-30 px-2" role="presentation">&bull;</span>

<a href="https://dev.to/brainiacm/comment/1e33p" class="comment-date crayons-link crayons-link--secondary fs-s">
  <time datetime="2021-04-30T15:22:02Z">
    Apr 30
  </time>

</a>


  <div class="comment__dropdown">
    <button class="dropbtn comment__dropdown-trigger crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon" aria-label="Toggle dropdown menu" aria-haspopup="true">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="a8g0a5dq40k2qm1sbpb1hx69j98j6xqx" class="crayons-icon pointer-events-none"><title id="a8g0a5dq40k2qm1sbpb1hx69j98j6xqx">Dropdown menu</title>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.25 12a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm5.25 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm3.75 1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
</svg>

    </button>
    <ul class="crayons-dropdown p-1 right-1 s:right-0 s:left-auto fs-base dropdown">
      <li><a href="https://dev.to/brainiacm/comment/1e33p" class="crayons-link crayons-link--block permalink-copybtn" aria-label="Copy link to Fox_Coder508's comment" data-no-instant>Copy link</a></li>
      <li class="comment-actions hidden" data-user-id="523109" data-action="settings-button" data-path="https://dev.to/brainiacm/comment/1e33p/settings" aria-label="Go to Fox_Coder508's comment settings"></li>
      <li class="comment-actions hidden" data-action="hide-button" data-commentable-user-id="435270" data-user-id="523109">
        <a href="#" class="crayons-link crayons-link--block hide-comment" data-hide-type="hide" data-comment-id="705171" aria-label="Hide Fox_Coder508's comment">
          Hide
        </a>
      </li>
      <li class="mod-actions hidden mod-actions-comment-button" data-path="https://dev.to/brainiacm/comment/1e33p/mod" aria-label="Moderate Fox_Coder508's comment"></li>
      <li class="report-abuse-link-wrapper" data-path="/report-abuse?url=https://dev.to/brainiacm/comment/1e33p" aria-label="Report Fox_Coder508's comment as abusive or violating our code of conduct and/or terms and conditions"></li>
      <li class="current-user-actions"></li>
    </ul>
  </div>
</header>


        <div
          class="
            comment__body
            text-styles
            text-styles--secondary
            body

          ">
          <p>Sir, kindly refrain from posting your contact details publically. It can be used against you. </p>


        </div>
    </div>

    <footer class="comment__footer print-hidden">
  <button
    class="crayons-btn crayons-btn--ghost crayons-btn--icon-left crayons-btn--s mr-1 reaction-like inline-flex reaction-button"
    id="button-for-comment-705171"
    data-comment-id="705171"
    title="heart">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="ad6gv7ixfhp292542m9yse0lev22woi3" class="crayons-icon reaction-icon not-reacted"><title id="ad6gv7ixfhp292542m9yse0lev22woi3">Favorite heart outline button</title><path d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"></path></svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="a13indnubmtbk7ef1x1hwu9m5uylspvt" class="crayons-icon reaction-icon--like reaction-icon reacted"><title id="a13indnubmtbk7ef1x1hwu9m5uylspvt">Favorite heart outline button</title>
    <path d="M5.116 12.595a4.875 4.875 0 015.56-7.68h-.002L7.493 8.098l1.06 1.061 3.181-3.182a4.875 4.875 0 016.895 6.894L12 19.5l-6.894-6.894.01-.01z"></path>
</svg>

    <span class="reactions-count">
      3
    </span>
    <span class="reactions-label hidden m:inline-block">
      &nbsp;likes
    </span>
  </button>

    <span class="fs-s inline-flex items-center fs-italic color-base-50 pl-1">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="a14de1xthe6v56fsxju8rlxyul9jbd9w" class="crayons-icon"><title id="a14de1xthe6v56fsxju8rlxyul9jbd9w">Thread</title>
    <path d="M17 13l-5 6-5-6h3.125c0-3.314 2.798-6 6.25-6 .17 0 .34.006.506.02-1.787.904-3.006 2.705-3.006 4.78V13H17z"></path>
</svg>

      Thread
    </span>

</footer>

  </div>
</div>
      <div
        id="comment-node-706568"
        class="
          comment single-comment-node

          child
          comment--deep-5
          comment--too-deep
        "
        data-comment-id="706568"
        data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e55i"
        data-comment-author-id="622888"
        data-content-user-id="622888">

<div class="comment__inner">
    <a href="https://dev.to/kwennb" class="shrink-0 crayons-avatar mt-4">
    <img class="crayons-avatar__image" width="32" height="32" src="https://res.cloudinary.com/practicaldev/image/fetch/s--RdhDLOV3--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/622888/df244098-81ed-4f40-931e-613a078bc62c.jpeg" alt="kwennb profile image" />
  </a>


  <div class="inner-comment comment__details">
    <div class="comment__content crayons-card">



        <header class="comment__header">
  <a href="https://dev.to/kwennb" class="crayons-link crayons-link--secondary flex items-center fw-medium">
    <span class="js-comment-username">KwennB</span>
  </a>

  <span class="color-base-30 px-2" role="presentation">&bull;</span>

<a href="https://dev.to/kwennb/comment/1e55i" class="comment-date crayons-link crayons-link--secondary fs-s">
  <time datetime="2021-05-03T11:30:47Z">
    May 3
  </time>

</a>


  <div class="comment__dropdown">
    <button class="dropbtn comment__dropdown-trigger crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon" aria-label="Toggle dropdown menu" aria-haspopup="true">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="ad683502rk9s6y8un2sjzj2u7hobtz8p" class="crayons-icon pointer-events-none"><title id="ad683502rk9s6y8un2sjzj2u7hobtz8p">Dropdown menu</title>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.25 12a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm5.25 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm3.75 1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
</svg>

    </button>
    <ul class="crayons-dropdown p-1 right-1 s:right-0 s:left-auto fs-base dropdown">
      <li><a href="https://dev.to/kwennb/comment/1e55i" class="crayons-link crayons-link--block permalink-copybtn" aria-label="Copy link to KwennB's comment" data-no-instant>Copy link</a></li>
      <li class="comment-actions hidden" data-user-id="622888" data-action="settings-button" data-path="https://dev.to/kwennb/comment/1e55i/settings" aria-label="Go to KwennB's comment settings"></li>
      <li class="comment-actions hidden" data-action="hide-button" data-commentable-user-id="435270" data-user-id="622888">
        <a href="#" class="crayons-link crayons-link--block hide-comment" data-hide-type="hide" data-comment-id="706568" aria-label="Hide KwennB's comment">
          Hide
        </a>
      </li>
      <li class="mod-actions hidden mod-actions-comment-button" data-path="https://dev.to/kwennb/comment/1e55i/mod" aria-label="Moderate KwennB's comment"></li>
      <li class="report-abuse-link-wrapper" data-path="/report-abuse?url=https://dev.to/kwennb/comment/1e55i" aria-label="Report KwennB's comment as abusive or violating our code of conduct and/or terms and conditions"></li>
      <li class="current-user-actions"></li>
    </ul>
  </div>
</header>


        <div
          class="
            comment__body
            text-styles
            text-styles--secondary
            body

          ">
          <p>Hey segun. Text me on the slack channel. Sorry for replying this late.<br>
And please remove your contact details here<br>
It’s not too safe.<br>
Cheers</p>


        </div>
    </div>

    <footer class="comment__footer print-hidden">
  <button
    class="crayons-btn crayons-btn--ghost crayons-btn--icon-left crayons-btn--s mr-1 reaction-like inline-flex reaction-button"
    id="button-for-comment-706568"
    data-comment-id="706568"
    title="heart">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="a6k8f5qx4fq8o9zb7ufttej4g6d1ynoe" class="crayons-icon reaction-icon not-reacted"><title id="a6k8f5qx4fq8o9zb7ufttej4g6d1ynoe">Favorite heart outline button</title><path d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"></path></svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="ae6hq1ot65ijsyfziuyla1g1r6f89ufk" class="crayons-icon reaction-icon--like reaction-icon reacted"><title id="ae6hq1ot65ijsyfziuyla1g1r6f89ufk">Favorite heart outline button</title>
    <path d="M5.116 12.595a4.875 4.875 0 015.56-7.68h-.002L7.493 8.098l1.06 1.061 3.181-3.182a4.875 4.875 0 016.895 6.894L12 19.5l-6.894-6.894.01-.01z"></path>
</svg>

    <span class="reactions-count">
      1
    </span>
    <span class="reactions-label hidden m:inline-block">
      &nbsp;like
    </span>
  </button>

    <span class="fs-s inline-flex items-center fs-italic color-base-50 pl-1">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="a6tx196pqezu6ekofq0b3m6ksgnp37ve" class="crayons-icon"><title id="a6tx196pqezu6ekofq0b3m6ksgnp37ve">Thread</title>
    <path d="M17 13l-5 6-5-6h3.125c0-3.314 2.798-6 6.25-6 .17 0 .34.006.506.02-1.787.904-3.006 2.705-3.006 4.78V13H17z"></path>
</svg>

      Thread
    </span>

</footer>

  </div>
</div>
      <div
        id="comment-node-709009"
        class="
          comment single-comment-node

          child
          comment--deep-6
          comment--too-deep
        "
        data-comment-id="709009"
        data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e8lf"
        data-comment-author-id="453645"
        data-content-user-id="453645">

<div class="comment__inner">
    <a href="https://dev.to/segunbol" class="shrink-0 crayons-avatar mt-4">
    <img class="crayons-avatar__image" width="32" height="32" src="https://res.cloudinary.com/practicaldev/image/fetch/s--chnvzYWL--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/453645/80459059-7a63-4390-a466-74dd84309faf.png" alt="segunbol profile image" />
  </a>


  <div class="inner-comment comment__details">
    <div class="comment__content crayons-card">



        <header class="comment__header">
  <a href="https://dev.to/segunbol" class="crayons-link crayons-link--secondary flex items-center fw-medium">
    <span class="js-comment-username">segunbol</span>
  </a>

  <span class="color-base-30 px-2" role="presentation">&bull;</span>

<a href="https://dev.to/segunbol/comment/1e8lf" class="comment-date crayons-link crayons-link--secondary fs-s">
  <time datetime="2021-05-07T18:49:25Z">
    May 7
  </time>

</a>


  <div class="comment__dropdown">
    <button class="dropbtn comment__dropdown-trigger crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon" aria-label="Toggle dropdown menu" aria-haspopup="true">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="aamftg9m63pw5hx87bzj0mkd3f1q3ogw" class="crayons-icon pointer-events-none"><title id="aamftg9m63pw5hx87bzj0mkd3f1q3ogw">Dropdown menu</title>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.25 12a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm5.25 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm3.75 1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
</svg>

    </button>
    <ul class="crayons-dropdown p-1 right-1 s:right-0 s:left-auto fs-base dropdown">
      <li><a href="https://dev.to/segunbol/comment/1e8lf" class="crayons-link crayons-link--block permalink-copybtn" aria-label="Copy link to segunbol's comment" data-no-instant>Copy link</a></li>
      <li class="comment-actions hidden" data-user-id="453645" data-action="settings-button" data-path="https://dev.to/segunbol/comment/1e8lf/settings" aria-label="Go to segunbol's comment settings"></li>
      <li class="comment-actions hidden" data-action="hide-button" data-commentable-user-id="435270" data-user-id="453645">
        <a href="#" class="crayons-link crayons-link--block hide-comment" data-hide-type="hide" data-comment-id="709009" aria-label="Hide segunbol's comment">
          Hide
        </a>
      </li>
      <li class="mod-actions hidden mod-actions-comment-button" data-path="https://dev.to/segunbol/comment/1e8lf/mod" aria-label="Moderate segunbol's comment"></li>
      <li class="report-abuse-link-wrapper" data-path="/report-abuse?url=https://dev.to/segunbol/comment/1e8lf" aria-label="Report segunbol's comment as abusive or violating our code of conduct and/or terms and conditions"></li>
      <li class="current-user-actions"></li>
    </ul>
  </div>
</header>


        <div
          class="
            comment__body
            text-styles
            text-styles--secondary
            body

          ">
          <p>Great... But I don't know the slack channel. How do. I go about that </p>


        </div>
    </div>

    <footer class="comment__footer print-hidden">
  <button
    class="crayons-btn crayons-btn--ghost crayons-btn--icon-left crayons-btn--s mr-1 reaction-like inline-flex reaction-button"
    id="button-for-comment-709009"
    data-comment-id="709009"
    title="heart">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="afjyx0yjr78cexc4ze9qfpg2cqeanmsr" class="crayons-icon reaction-icon not-reacted"><title id="afjyx0yjr78cexc4ze9qfpg2cqeanmsr">Favorite heart outline button</title><path d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"></path></svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="a6fkagmaph3p2so2xu1ichfkcaxvck47" class="crayons-icon reaction-icon--like reaction-icon reacted"><title id="a6fkagmaph3p2so2xu1ichfkcaxvck47">Favorite heart outline button</title>
    <path d="M5.116 12.595a4.875 4.875 0 015.56-7.68h-.002L7.493 8.098l1.06 1.061 3.181-3.182a4.875 4.875 0 016.895 6.894L12 19.5l-6.894-6.894.01-.01z"></path>
</svg>

    <span class="reactions-count">
      1
    </span>
    <span class="reactions-label hidden m:inline-block">
      &nbsp;like
    </span>
  </button>

    <span class="fs-s inline-flex items-center fs-italic color-base-50 pl-1">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="al0v7yyxzvho3lv4eq0j122x6igzhua7" class="crayons-icon"><title id="al0v7yyxzvho3lv4eq0j122x6igzhua7">Thread</title>
    <path d="M17 13l-5 6-5-6h3.125c0-3.314 2.798-6 6.25-6 .17 0 .34.006.506.02-1.787.904-3.006 2.705-3.006 4.78V13H17z"></path>
</svg>

      Thread
    </span>

</footer>

  </div>
</div>
      <div
        id="comment-node-709010"
        class="
          comment single-comment-node

          child
          comment--deep-7
          comment--too-deep
        "
        data-comment-id="709010"
        data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e8lg"
        data-comment-author-id="453645"
        data-content-user-id="453645">

<div class="comment__inner">
    <a href="https://dev.to/segunbol" class="shrink-0 crayons-avatar mt-4">
    <img class="crayons-avatar__image" width="32" height="32" src="https://res.cloudinary.com/practicaldev/image/fetch/s--chnvzYWL--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/453645/80459059-7a63-4390-a466-74dd84309faf.png" alt="segunbol profile image" />
  </a>


  <div class="inner-comment comment__details">
    <div class="comment__content crayons-card">



        <header class="comment__header">
  <a href="https://dev.to/segunbol" class="crayons-link crayons-link--secondary flex items-center fw-medium">
    <span class="js-comment-username">segunbol</span>
  </a>

  <span class="color-base-30 px-2" role="presentation">&bull;</span>

<a href="https://dev.to/segunbol/comment/1e8lg" class="comment-date crayons-link crayons-link--secondary fs-s">
  <time datetime="2021-05-07T18:50:19Z">
    May 7
  </time>

</a>


  <div class="comment__dropdown">
    <button class="dropbtn comment__dropdown-trigger crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon" aria-label="Toggle dropdown menu" aria-haspopup="true">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="ag8no4djt462m1kmm2kq2r7v71nxc1by" class="crayons-icon pointer-events-none"><title id="ag8no4djt462m1kmm2kq2r7v71nxc1by">Dropdown menu</title>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.25 12a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm5.25 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm3.75 1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
</svg>

    </button>
    <ul class="crayons-dropdown p-1 right-1 s:right-0 s:left-auto fs-base dropdown">
      <li><a href="https://dev.to/segunbol/comment/1e8lg" class="crayons-link crayons-link--block permalink-copybtn" aria-label="Copy link to segunbol's comment" data-no-instant>Copy link</a></li>
      <li class="comment-actions hidden" data-user-id="453645" data-action="settings-button" data-path="https://dev.to/segunbol/comment/1e8lg/settings" aria-label="Go to segunbol's comment settings"></li>
      <li class="comment-actions hidden" data-action="hide-button" data-commentable-user-id="435270" data-user-id="453645">
        <a href="#" class="crayons-link crayons-link--block hide-comment" data-hide-type="hide" data-comment-id="709010" aria-label="Hide segunbol's comment">
          Hide
        </a>
      </li>
      <li class="mod-actions hidden mod-actions-comment-button" data-path="https://dev.to/segunbol/comment/1e8lg/mod" aria-label="Moderate segunbol's comment"></li>
      <li class="report-abuse-link-wrapper" data-path="/report-abuse?url=https://dev.to/segunbol/comment/1e8lg" aria-label="Report segunbol's comment as abusive or violating our code of conduct and/or terms and conditions"></li>
      <li class="current-user-actions"></li>
    </ul>
  </div>
</header>


        <div
          class="
            comment__body
            text-styles
            text-styles--secondary
            body

          ">
          <p>Thank You.. </p>


        </div>
    </div>

    <footer class="comment__footer print-hidden">
  <button
    class="crayons-btn crayons-btn--ghost crayons-btn--icon-left crayons-btn--s mr-1 reaction-like inline-flex reaction-button"
    id="button-for-comment-709010"
    data-comment-id="709010"
    title="heart">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="av3877hw4zpuc6pnjpnuxbq3nnm9hgi" class="crayons-icon reaction-icon not-reacted"><title id="av3877hw4zpuc6pnjpnuxbq3nnm9hgi">Favorite heart outline button</title><path d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"></path></svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="ah1eoczisgy1gwzgjwli982uqbalt2k0" class="crayons-icon reaction-icon--like reaction-icon reacted"><title id="ah1eoczisgy1gwzgjwli982uqbalt2k0">Favorite heart outline button</title>
    <path d="M5.116 12.595a4.875 4.875 0 015.56-7.68h-.002L7.493 8.098l1.06 1.061 3.181-3.182a4.875 4.875 0 016.895 6.894L12 19.5l-6.894-6.894.01-.01z"></path>
</svg>

    <span class="reactions-count">
      1
    </span>
    <span class="reactions-label hidden m:inline-block">
      &nbsp;like
    </span>
  </button>

    <span class="fs-s inline-flex items-center fs-italic color-base-50 pl-1">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="ah5trb384aa2nstcb1yitamkixcz0def" class="crayons-icon"><title id="ah5trb384aa2nstcb1yitamkixcz0def">Thread</title>
    <path d="M17 13l-5 6-5-6h3.125c0-3.314 2.798-6 6.25-6 .17 0 .34.006.506.02-1.787.904-3.006 2.705-3.006 4.78V13H17z"></path>
</svg>

      Thread
    </span>

</footer>

  </div>
</div>
      <div
        id="comment-node-709048"
        class="
          comment single-comment-node

          child
          comment--deep-8
          comment--too-deep
        "
        data-comment-id="709048"
        data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e8n2"
        data-comment-author-id="622888"
        data-content-user-id="622888">

<div class="comment__inner">
    <a href="https://dev.to/kwennb" class="shrink-0 crayons-avatar mt-4">
    <img class="crayons-avatar__image" width="32" height="32" src="https://res.cloudinary.com/practicaldev/image/fetch/s--RdhDLOV3--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/622888/df244098-81ed-4f40-931e-613a078bc62c.jpeg" alt="kwennb profile image" />
  </a>


  <div class="inner-comment comment__details">
    <div class="comment__content crayons-card">



        <header class="comment__header">
  <a href="https://dev.to/kwennb" class="crayons-link crayons-link--secondary flex items-center fw-medium">
    <span class="js-comment-username">KwennB</span>
  </a>

  <span class="color-base-30 px-2" role="presentation">&bull;</span>

<a href="https://dev.to/kwennb/comment/1e8n2" class="comment-date crayons-link crayons-link--secondary fs-s">
  <time datetime="2021-05-07T19:56:20Z">
    May 7
  </time>

</a>


  <div class="comment__dropdown">
    <button class="dropbtn comment__dropdown-trigger crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon" aria-label="Toggle dropdown menu" aria-haspopup="true">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="adjf081cfid0cc3xhx0p5z3um3740v32" class="crayons-icon pointer-events-none"><title id="adjf081cfid0cc3xhx0p5z3um3740v32">Dropdown menu</title>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.25 12a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm5.25 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm3.75 1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
</svg>

    </button>
    <ul class="crayons-dropdown p-1 right-1 s:right-0 s:left-auto fs-base dropdown">
      <li><a href="https://dev.to/kwennb/comment/1e8n2" class="crayons-link crayons-link--block permalink-copybtn" aria-label="Copy link to KwennB's comment" data-no-instant>Copy link</a></li>
      <li class="comment-actions hidden" data-user-id="622888" data-action="settings-button" data-path="https://dev.to/kwennb/comment/1e8n2/settings" aria-label="Go to KwennB's comment settings"></li>
      <li class="comment-actions hidden" data-action="hide-button" data-commentable-user-id="435270" data-user-id="622888">
        <a href="#" class="crayons-link crayons-link--block hide-comment" data-hide-type="hide" data-comment-id="709048" aria-label="Hide KwennB's comment">
          Hide
        </a>
      </li>
      <li class="mod-actions hidden mod-actions-comment-button" data-path="https://dev.to/kwennb/comment/1e8n2/mod" aria-label="Moderate KwennB's comment"></li>
      <li class="report-abuse-link-wrapper" data-path="/report-abuse?url=https://dev.to/kwennb/comment/1e8n2" aria-label="Report KwennB's comment as abusive or violating our code of conduct and/or terms and conditions"></li>
      <li class="current-user-actions"></li>
    </ul>
  </div>
</header>


        <div
          class="
            comment__body
            text-styles
            text-styles--secondary
            body

          ">
          <p>Okay <br>
Add me on Twitter <br>
<a class="mentioned-user" href="https://dev.to/kwennb">@kwennb</a>
 </p>


        </div>
    </div>

    <footer class="comment__footer print-hidden">
  <button
    class="crayons-btn crayons-btn--ghost crayons-btn--icon-left crayons-btn--s mr-1 reaction-like inline-flex reaction-button"
    id="button-for-comment-709048"
    data-comment-id="709048"
    title="heart">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="acwqz6yleqqkfkiaanue9qqew99s883k" class="crayons-icon reaction-icon not-reacted"><title id="acwqz6yleqqkfkiaanue9qqew99s883k">Favorite heart outline button</title><path d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"></path></svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="a3sie929buzn82v52e4c2c6drwimjs43" class="crayons-icon reaction-icon--like reaction-icon reacted"><title id="a3sie929buzn82v52e4c2c6drwimjs43">Favorite heart outline button</title>
    <path d="M5.116 12.595a4.875 4.875 0 015.56-7.68h-.002L7.493 8.098l1.06 1.061 3.181-3.182a4.875 4.875 0 016.895 6.894L12 19.5l-6.894-6.894.01-.01z"></path>
</svg>

    <span class="reactions-count">
      1
    </span>
    <span class="reactions-label hidden m:inline-block">
      &nbsp;like
    </span>
  </button>

    <span class="fs-s inline-flex items-center fs-italic color-base-50 pl-1">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="ataynponifntagxqi616p64ic44m6pz0" class="crayons-icon"><title id="ataynponifntagxqi616p64ic44m6pz0">Thread</title>
    <path d="M17 13l-5 6-5-6h3.125c0-3.314 2.798-6 6.25-6 .17 0 .34.006.506.02-1.787.904-3.006 2.705-3.006 4.78V13H17z"></path>
</svg>

      Thread
    </span>

</footer>

  </div>
</div>
      <div
        id="comment-node-709573"
        class="
          comment single-comment-node

          child
          comment--deep-9
          comment--too-deep
        "
        data-comment-id="709573"
        data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e9h7"
        data-comment-author-id="453645"
        data-content-user-id="453645">

<div class="comment__inner">
    <a href="https://dev.to/segunbol" class="shrink-0 crayons-avatar mt-4">
    <img class="crayons-avatar__image" width="32" height="32" src="https://res.cloudinary.com/practicaldev/image/fetch/s--chnvzYWL--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/453645/80459059-7a63-4390-a466-74dd84309faf.png" alt="segunbol profile image" />
  </a>


  <div class="inner-comment comment__details">
    <div class="comment__content crayons-card">



        <header class="comment__header">
  <a href="https://dev.to/segunbol" class="crayons-link crayons-link--secondary flex items-center fw-medium">
    <span class="js-comment-username">segunbol</span>
  </a>

  <span class="color-base-30 px-2" role="presentation">&bull;</span>

<a href="https://dev.to/segunbol/comment/1e9h7" class="comment-date crayons-link crayons-link--secondary fs-s">
  <time datetime="2021-05-08T17:50:48Z">
    May 8
  </time>

</a>


  <div class="comment__dropdown">
    <button class="dropbtn comment__dropdown-trigger crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon" aria-label="Toggle dropdown menu" aria-haspopup="true">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="ape6yb3911beat9usju35u3h70gx77f8" class="crayons-icon pointer-events-none"><title id="ape6yb3911beat9usju35u3h70gx77f8">Dropdown menu</title>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.25 12a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm5.25 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm3.75 1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
</svg>

    </button>
    <ul class="crayons-dropdown p-1 right-1 s:right-0 s:left-auto fs-base dropdown">
      <li><a href="https://dev.to/segunbol/comment/1e9h7" class="crayons-link crayons-link--block permalink-copybtn" aria-label="Copy link to segunbol's comment" data-no-instant>Copy link</a></li>
      <li class="comment-actions hidden" data-user-id="453645" data-action="settings-button" data-path="https://dev.to/segunbol/comment/1e9h7/settings" aria-label="Go to segunbol's comment settings"></li>
      <li class="comment-actions hidden" data-action="hide-button" data-commentable-user-id="435270" data-user-id="453645">
        <a href="#" class="crayons-link crayons-link--block hide-comment" data-hide-type="hide" data-comment-id="709573" aria-label="Hide segunbol's comment">
          Hide
        </a>
      </li>
      <li class="mod-actions hidden mod-actions-comment-button" data-path="https://dev.to/segunbol/comment/1e9h7/mod" aria-label="Moderate segunbol's comment"></li>
      <li class="report-abuse-link-wrapper" data-path="/report-abuse?url=https://dev.to/segunbol/comment/1e9h7" aria-label="Report segunbol's comment as abusive or violating our code of conduct and/or terms and conditions"></li>
      <li class="current-user-actions"></li>
    </ul>
  </div>
</header>


        <div
          class="
            comment__body
            text-styles
            text-styles--secondary
            body

          ">
          <p>Did that already, Extramortal_segs</p>


        </div>
    </div>

    <footer class="comment__footer print-hidden">
  <button
    class="crayons-btn crayons-btn--ghost crayons-btn--icon-left crayons-btn--s mr-1 reaction-like inline-flex reaction-button"
    id="button-for-comment-709573"
    data-comment-id="709573"
    title="heart">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="angd11px30paslru0p49j8vdzq72ge9r" class="crayons-icon reaction-icon not-reacted"><title id="angd11px30paslru0p49j8vdzq72ge9r">Favorite heart outline button</title><path d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"></path></svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="abl9yfzkcexto2e5c8ygp4t4n6spoqtg" class="crayons-icon reaction-icon--like reaction-icon reacted"><title id="abl9yfzkcexto2e5c8ygp4t4n6spoqtg">Favorite heart outline button</title>
    <path d="M5.116 12.595a4.875 4.875 0 015.56-7.68h-.002L7.493 8.098l1.06 1.061 3.181-3.182a4.875 4.875 0 016.895 6.894L12 19.5l-6.894-6.894.01-.01z"></path>
</svg>

    <span class="reactions-count">
      1
    </span>
    <span class="reactions-label hidden m:inline-block">
      &nbsp;like
    </span>
  </button>

    <a
      class="actions crayons-btn crayons-btn--ghost crayons-btn--s crayons-btn--icon-left toggle-reply-form mr-1 inline-flex"
      href="#/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/new/1e9h7"
      data-comment-id="709573"
      data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e9h7"
      rel="nofollow">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="at250mn9kre3prx0g1wm3wki30b6rjqx" class="crayons-icon reaction-icon not-reacted"><title id="at250mn9kre3prx0g1wm3wki30b6rjqx">Comment button</title><path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path></svg>

      <span class="hidden m:inline-block">Reply</span>
    </a>

</footer>

  </div>
</div>


      </div>


      </div>


      </div>


      </div>


      </div>


      </div>


      </div>


      </div>
    </details>


      </div>
    </details>


      </div>
    </details>

                    <details class="comment-wrapper js-comment-wrapper comment-wrapper--deep-0 root" open>
      <summary>
        <span class="m:mx-1 inline-block align-middle">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="a9c0e9bpklm43fyl1e64gg8p0vhnh0vd" class="crayons-icon expanded"><title id="a9c0e9bpklm43fyl1e64gg8p0vhnh0vd">Collapse</title>
    <path d="M12 10.677L8 6.935 9 6l3 2.807L15 6l1 .935-4 3.742zm0 4.517L9 18l-1-.935 4-3.742 4 3.742-1 .934-3-2.805z"></path>
</svg>

          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="acnlmc6bow6zgsw5y9trs00lm8we40qh" class="crayons-icon collapsed"><title id="acnlmc6bow6zgsw5y9trs00lm8we40qh">Expand</title>
    <path d="M12 18l-4-3.771 1-.943 3 2.829 3-2.829 1 .943L12 18zm0-10.115l-3 2.829-1-.943L12 6l4 3.771-1 .942-3-2.828z"></path>
</svg>

        </span>
        <span class="js-collapse-comment-content inline-block align-middle"></span>
      </summary>
      <div
        id="comment-node-704765"
        class="
          comment single-comment-node

          root
          comment--deep-0

        "
        data-comment-id="704765"
        data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e2e9"
        data-comment-author-id="620313"
        data-content-user-id="620313">

<div class="comment__inner">
    <a href="https://dev.to/beitist" class="shrink-0 crayons-avatar m:crayons-avatar--l mt-4 m:mt-3">
    <img class="crayons-avatar__image" width="32" height="32" src="https://res.cloudinary.com/practicaldev/image/fetch/s--VfUIsSIJ--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/620313/8ee5dbdc-bd32-49e6-9eef-2e31e2833d7f.jpeg" alt="beitist profile image" />
  </a>


  <div class="inner-comment comment__details">
    <div class="comment__content crayons-card">



        <header class="comment__header">
  <a href="https://dev.to/beitist" class="crayons-link crayons-link--secondary flex items-center fw-medium">
    <span class="js-comment-username">Sebastian Stüwe</span>
  </a>

  <span class="color-base-30 px-2" role="presentation">&bull;</span>

<a href="https://dev.to/beitist/comment/1e2e9" class="comment-date crayons-link crayons-link--secondary fs-s">
  <time datetime="2021-04-29T21:11:56Z">
    Apr 29
  </time>

</a>


  <div class="comment__dropdown">
    <button class="dropbtn comment__dropdown-trigger crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon" aria-label="Toggle dropdown menu" aria-haspopup="true">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="a7c7pncp4ys3w89leinkml23gu54ksow" class="crayons-icon pointer-events-none"><title id="a7c7pncp4ys3w89leinkml23gu54ksow">Dropdown menu</title>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.25 12a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm5.25 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm3.75 1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
</svg>

    </button>
    <ul class="crayons-dropdown p-1 right-1 s:right-0 s:left-auto fs-base dropdown">
      <li><a href="https://dev.to/beitist/comment/1e2e9" class="crayons-link crayons-link--block permalink-copybtn" aria-label="Copy link to Sebastian Stüwe's comment" data-no-instant>Copy link</a></li>
      <li class="comment-actions hidden" data-user-id="620313" data-action="settings-button" data-path="https://dev.to/beitist/comment/1e2e9/settings" aria-label="Go to Sebastian Stüwe's comment settings"></li>
      <li class="comment-actions hidden" data-action="hide-button" data-commentable-user-id="435270" data-user-id="620313">
        <a href="#" class="crayons-link crayons-link--block hide-comment" data-hide-type="hide" data-comment-id="704765" aria-label="Hide Sebastian Stüwe's comment">
          Hide
        </a>
      </li>
      <li class="mod-actions hidden mod-actions-comment-button" data-path="https://dev.to/beitist/comment/1e2e9/mod" aria-label="Moderate Sebastian Stüwe's comment"></li>
      <li class="report-abuse-link-wrapper" data-path="/report-abuse?url=https://dev.to/beitist/comment/1e2e9" aria-label="Report Sebastian Stüwe's comment as abusive or violating our code of conduct and/or terms and conditions"></li>
      <li class="current-user-actions"></li>
    </ul>
  </div>
</header>


        <div
          class="
            comment__body
            text-styles
            text-styles--secondary
            body

          ">
          <p>Very good of you to bring this up, Stephen. Please share your successes and challenges more frequently to make people aware!</p>

<p>I lived and worked in Liberia for the last ten years, and I know your struggle first-hand.</p>

<p>Setting up charities is one thing, but I doubt the impact can reach 100 Million Nigerian youth (or West African youth - even more!). Each one help one is a beginning we all can achieve, and then take it from there.</p>

<p>Technologically: try to get hands on a solar panel. Laptops don't consume much. Could be worth the investment. I can help you calculate the right size.</p>


        </div>
    </div>

    <footer class="comment__footer print-hidden">
  <button
    class="crayons-btn crayons-btn--ghost crayons-btn--icon-left crayons-btn--s mr-1 reaction-like inline-flex reaction-button"
    id="button-for-comment-704765"
    data-comment-id="704765"
    title="heart">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="asxvvdlfb8einhh7cj5cr8a6i7z68y3h" class="crayons-icon reaction-icon not-reacted"><title id="asxvvdlfb8einhh7cj5cr8a6i7z68y3h">Favorite heart outline button</title><path d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"></path></svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="am7n3tuosorfov4wabo0lmp8invztum2" class="crayons-icon reaction-icon--like reaction-icon reacted"><title id="am7n3tuosorfov4wabo0lmp8invztum2">Favorite heart outline button</title>
    <path d="M5.116 12.595a4.875 4.875 0 015.56-7.68h-.002L7.493 8.098l1.06 1.061 3.181-3.182a4.875 4.875 0 016.895 6.894L12 19.5l-6.894-6.894.01-.01z"></path>
</svg>

    <span class="reactions-count">
      5
    </span>
    <span class="reactions-label hidden m:inline-block">
      &nbsp;likes
    </span>
  </button>

    <a
      class="actions crayons-btn crayons-btn--ghost crayons-btn--s crayons-btn--icon-left toggle-reply-form mr-1 inline-flex"
      href="#/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/new/1e2e9"
      data-comment-id="704765"
      data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e2e9"
      rel="nofollow">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="ajf7xw3fr7fxxw7vvm1ifc684e1kkaxr" class="crayons-icon reaction-icon not-reacted"><title id="ajf7xw3fr7fxxw7vvm1ifc684e1kkaxr">Comment button</title><path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path></svg>

      <span class="hidden m:inline-block">Reply</span>
    </a>

</footer>

  </div>
</div>
    <details class="comment-wrapper js-comment-wrapper comment-wrapper--deep-1 child" open>
      <summary>
        <span class="mx-0 inline-block align-middle">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="ajuihy05ty1lxlk906t9hcfv2lnx7kzd" class="crayons-icon expanded"><title id="ajuihy05ty1lxlk906t9hcfv2lnx7kzd">Collapse</title>
    <path d="M12 10.677L8 6.935 9 6l3 2.807L15 6l1 .935-4 3.742zm0 4.517L9 18l-1-.935 4-3.742 4 3.742-1 .934-3-2.805z"></path>
</svg>

          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="adtnv93skefom5lsrkdvjtduyxkxlpcm" class="crayons-icon collapsed"><title id="adtnv93skefom5lsrkdvjtduyxkxlpcm">Expand</title>
    <path d="M12 18l-4-3.771 1-.943 3 2.829 3-2.829 1 .943L12 18zm0-10.115l-3 2.829-1-.943L12 6l4 3.771-1 .942-3-2.828z"></path>
</svg>

        </span>
        <span class="js-collapse-comment-content inline-block align-middle"></span>
      </summary>
      <div
        id="comment-node-704923"
        class="
          comment single-comment-node

          child
          comment--deep-1

        "
        data-comment-id="704923"
        data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e2kb"
        data-comment-author-id="435270"
        data-content-user-id="435270">

<div class="comment__inner">
    <a href="https://dev.to/resourcefulmind" class="shrink-0 crayons-avatar mt-4">
    <img class="crayons-avatar__image" width="32" height="32" src="https://res.cloudinary.com/practicaldev/image/fetch/s--6y949wgP--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/435270/7ca3876e-ca85-478e-a2fa-c634f4a78121.png" alt="resourcefulmind profile image" />
  </a>


  <div class="inner-comment comment__details">
    <div class="comment__content crayons-card">



        <header class="comment__header">
  <a href="https://dev.to/resourcefulmind" class="crayons-link crayons-link--secondary flex items-center fw-medium">
    <span class="js-comment-username">Opeyemi Stephen</span>
      <span class="crayons-tooltip inline-block spec-op-author -mr-2" data-tooltip="Author">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="afkfxnuerd3bq71al1vl1bou5ej4m64h" class="crayons-icon"><title id="afkfxnuerd3bq71al1vl1bou5ej4m64h">Author</title>
    <path d="M12 8.25a6 6 0 110 12 6 6 0 010-12zm0 2.625l-.992 2.01-2.218.322 1.605 1.564-.379 2.21L12 15.937l1.984 1.043-.379-2.209 1.605-1.564-2.218-.323L12 10.875zm.75-6.376l3.75.001v2.25l-1.022.854a7.45 7.45 0 00-2.728-.817V4.5zm-1.5 0v2.288a7.451 7.451 0 00-2.727.816L7.5 6.75V4.5h3.75z"></path>
</svg>

      </span>
  </a>

  <span class="color-base-30 px-2" role="presentation">&bull;</span>

<a href="https://dev.to/resourcefulmind/comment/1e2kb" class="comment-date crayons-link crayons-link--secondary fs-s">
  <time datetime="2021-04-30T07:09:43Z">
    Apr 30
  </time>

</a>


  <div class="comment__dropdown">
    <button class="dropbtn comment__dropdown-trigger crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon" aria-label="Toggle dropdown menu" aria-haspopup="true">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="a4dtui4f0toost4vy6mwam0r7p5iwqax" class="crayons-icon pointer-events-none"><title id="a4dtui4f0toost4vy6mwam0r7p5iwqax">Dropdown menu</title>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.25 12a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm5.25 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm3.75 1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
</svg>

    </button>
    <ul class="crayons-dropdown p-1 right-1 s:right-0 s:left-auto fs-base dropdown">
      <li><a href="https://dev.to/resourcefulmind/comment/1e2kb" class="crayons-link crayons-link--block permalink-copybtn" aria-label="Copy link to Opeyemi Stephen's comment" data-no-instant>Copy link</a></li>
      <li class="comment-actions hidden" data-user-id="435270" data-action="settings-button" data-path="https://dev.to/resourcefulmind/comment/1e2kb/settings" aria-label="Go to Opeyemi Stephen's comment settings"></li>
      <li class="comment-actions hidden" data-action="hide-button" data-commentable-user-id="435270" data-user-id="435270">
        <a href="#" class="crayons-link crayons-link--block hide-comment" data-hide-type="hide" data-comment-id="704923" aria-label="Hide Opeyemi Stephen's comment">
          Hide
        </a>
      </li>
      <li class="mod-actions hidden mod-actions-comment-button" data-path="https://dev.to/resourcefulmind/comment/1e2kb/mod" aria-label="Moderate Opeyemi Stephen's comment"></li>
      <li class="report-abuse-link-wrapper" data-path="/report-abuse?url=https://dev.to/resourcefulmind/comment/1e2kb" aria-label="Report Opeyemi Stephen's comment as abusive or violating our code of conduct and/or terms and conditions"></li>
      <li class="current-user-actions"></li>
    </ul>
  </div>
</header>


        <div
          class="
            comment__body
            text-styles
            text-styles--secondary
            body

          ">
          <p>I really appreciate your kind words. Maybe we can put this into practice. I’m already thinking dev spaces. I’m only but one person but a space powered by solar panels with access to the internet where developers can always come to learn and build stuff looks exciting to me. Now if we have one of such spaces in every town, it could harmonize local developers too. Just a thought in my head</p>


        </div>
    </div>

    <footer class="comment__footer print-hidden">
  <button
    class="crayons-btn crayons-btn--ghost crayons-btn--icon-left crayons-btn--s mr-1 reaction-like inline-flex reaction-button"
    id="button-for-comment-704923"
    data-comment-id="704923"
    title="heart">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="a2p656ai7got8izbo93e8x3o18ubmz07" class="crayons-icon reaction-icon not-reacted"><title id="a2p656ai7got8izbo93e8x3o18ubmz07">Favorite heart outline button</title><path d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"></path></svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="akjhmxc8xkf1enh801qqc5xam89vx0bm" class="crayons-icon reaction-icon--like reaction-icon reacted"><title id="akjhmxc8xkf1enh801qqc5xam89vx0bm">Favorite heart outline button</title>
    <path d="M5.116 12.595a4.875 4.875 0 015.56-7.68h-.002L7.493 8.098l1.06 1.061 3.181-3.182a4.875 4.875 0 016.895 6.894L12 19.5l-6.894-6.894.01-.01z"></path>
</svg>

    <span class="reactions-count">
      7
    </span>
    <span class="reactions-label hidden m:inline-block">
      &nbsp;likes
    </span>
  </button>

    <a
      class="actions crayons-btn crayons-btn--ghost crayons-btn--s crayons-btn--icon-left toggle-reply-form mr-1 inline-flex"
      href="#/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/new/1e2kb"
      data-comment-id="704923"
      data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e2kb"
      rel="nofollow">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="afun64903d83py8o0eatra07dpe7j0a5" class="crayons-icon reaction-icon not-reacted"><title id="afun64903d83py8o0eatra07dpe7j0a5">Comment button</title><path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path></svg>

      <span class="hidden m:inline-block">Reply</span>
    </a>

</footer>

  </div>
</div>
    <details class="comment-wrapper js-comment-wrapper comment-wrapper--deep-2 child" open>
      <summary>
        <span class="mx-0 inline-block align-middle">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="a893lt22x68l91x5bo7urld4ou1zvngw" class="crayons-icon expanded"><title id="a893lt22x68l91x5bo7urld4ou1zvngw">Collapse</title>
    <path d="M12 10.677L8 6.935 9 6l3 2.807L15 6l1 .935-4 3.742zm0 4.517L9 18l-1-.935 4-3.742 4 3.742-1 .934-3-2.805z"></path>
</svg>

          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="aptuv8m6ey3jyfh9z4wvfp3ago3xq5dw" class="crayons-icon collapsed"><title id="aptuv8m6ey3jyfh9z4wvfp3ago3xq5dw">Expand</title>
    <path d="M12 18l-4-3.771 1-.943 3 2.829 3-2.829 1 .943L12 18zm0-10.115l-3 2.829-1-.943L12 6l4 3.771-1 .942-3-2.828z"></path>
</svg>

        </span>
        <span class="js-collapse-comment-content inline-block align-middle"></span>
      </summary>
      <div
        id="comment-node-705027"
        class="
          comment single-comment-node

          child
          comment--deep-2

        "
        data-comment-id="705027"
        data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e2ob"
        data-comment-author-id="620313"
        data-content-user-id="620313">

<div class="comment__inner">
    <a href="https://dev.to/beitist" class="shrink-0 crayons-avatar mt-4">
    <img class="crayons-avatar__image" width="32" height="32" src="https://res.cloudinary.com/practicaldev/image/fetch/s--VfUIsSIJ--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/620313/8ee5dbdc-bd32-49e6-9eef-2e31e2833d7f.jpeg" alt="beitist profile image" />
  </a>


  <div class="inner-comment comment__details">
    <div class="comment__content crayons-card">



        <header class="comment__header">
  <a href="https://dev.to/beitist" class="crayons-link crayons-link--secondary flex items-center fw-medium">
    <span class="js-comment-username">Sebastian Stüwe</span>
  </a>

  <span class="color-base-30 px-2" role="presentation">&bull;</span>

<a href="https://dev.to/beitist/comment/1e2ob" class="comment-date crayons-link crayons-link--secondary fs-s">
  <time datetime="2021-04-30T10:22:03Z">
    Apr 30
  </time>

</a>


  <div class="comment__dropdown">
    <button class="dropbtn comment__dropdown-trigger crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon" aria-label="Toggle dropdown menu" aria-haspopup="true">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="adjnfeluyftg95h354lfhp1at5rmqpan" class="crayons-icon pointer-events-none"><title id="adjnfeluyftg95h354lfhp1at5rmqpan">Dropdown menu</title>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.25 12a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm5.25 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm3.75 1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
</svg>

    </button>
    <ul class="crayons-dropdown p-1 right-1 s:right-0 s:left-auto fs-base dropdown">
      <li><a href="https://dev.to/beitist/comment/1e2ob" class="crayons-link crayons-link--block permalink-copybtn" aria-label="Copy link to Sebastian Stüwe's comment" data-no-instant>Copy link</a></li>
      <li class="comment-actions hidden" data-user-id="620313" data-action="settings-button" data-path="https://dev.to/beitist/comment/1e2ob/settings" aria-label="Go to Sebastian Stüwe's comment settings"></li>
      <li class="comment-actions hidden" data-action="hide-button" data-commentable-user-id="435270" data-user-id="620313">
        <a href="#" class="crayons-link crayons-link--block hide-comment" data-hide-type="hide" data-comment-id="705027" aria-label="Hide Sebastian Stüwe's comment">
          Hide
        </a>
      </li>
      <li class="mod-actions hidden mod-actions-comment-button" data-path="https://dev.to/beitist/comment/1e2ob/mod" aria-label="Moderate Sebastian Stüwe's comment"></li>
      <li class="report-abuse-link-wrapper" data-path="/report-abuse?url=https://dev.to/beitist/comment/1e2ob" aria-label="Report Sebastian Stüwe's comment as abusive or violating our code of conduct and/or terms and conditions"></li>
      <li class="current-user-actions"></li>
    </ul>
  </div>
</header>


        <div
          class="
            comment__body
            text-styles
            text-styles--secondary
            body

          ">
          <p>Let's get in touch about brainstorming ideas! After 10+ years in the NGO-world, I am less a believer in anything free than I was before - but I could imagine combining coder-spaces with some for-profit projects, (free?) classes and maybe a Rachel-pi-like edition of FCC (provided they won't mind) could be something that would work, be resourceful and focused.</p>


        </div>
    </div>

    <footer class="comment__footer print-hidden">
  <button
    class="crayons-btn crayons-btn--ghost crayons-btn--icon-left crayons-btn--s mr-1 reaction-like inline-flex reaction-button"
    id="button-for-comment-705027"
    data-comment-id="705027"
    title="heart">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="a82k7rkwaloy78peyiw9gapqnm264ldh" class="crayons-icon reaction-icon not-reacted"><title id="a82k7rkwaloy78peyiw9gapqnm264ldh">Favorite heart outline button</title><path d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"></path></svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="a9e324lgr7cvp8ag9mgsjwp2slw7nk7e" class="crayons-icon reaction-icon--like reaction-icon reacted"><title id="a9e324lgr7cvp8ag9mgsjwp2slw7nk7e">Favorite heart outline button</title>
    <path d="M5.116 12.595a4.875 4.875 0 015.56-7.68h-.002L7.493 8.098l1.06 1.061 3.181-3.182a4.875 4.875 0 016.895 6.894L12 19.5l-6.894-6.894.01-.01z"></path>
</svg>

    <span class="reactions-count">
      4
    </span>
    <span class="reactions-label hidden m:inline-block">
      &nbsp;likes
    </span>
  </button>

    <span class="fs-s inline-flex items-center fs-italic color-base-50 pl-1">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="a7mip3f86r3lqnlfaj4veqz1iqccgmb5" class="crayons-icon"><title id="a7mip3f86r3lqnlfaj4veqz1iqccgmb5">Thread</title>
    <path d="M17 13l-5 6-5-6h3.125c0-3.314 2.798-6 6.25-6 .17 0 .34.006.506.02-1.787.904-3.006 2.705-3.006 4.78V13H17z"></path>
</svg>

      Thread
    </span>

</footer>

  </div>
</div>
      <div
        id="comment-node-705317"
        class="
          comment single-comment-node

          child
          comment--deep-3

        "
        data-comment-id="705317"
        data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e39f"
        data-comment-author-id="435270"
        data-content-user-id="435270">

<div class="comment__inner">
    <a href="https://dev.to/resourcefulmind" class="shrink-0 crayons-avatar mt-4">
    <img class="crayons-avatar__image" width="32" height="32" src="https://res.cloudinary.com/practicaldev/image/fetch/s--6y949wgP--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/435270/7ca3876e-ca85-478e-a2fa-c634f4a78121.png" alt="resourcefulmind profile image" />
  </a>


  <div class="inner-comment comment__details">
    <div class="comment__content crayons-card">



        <header class="comment__header">
  <a href="https://dev.to/resourcefulmind" class="crayons-link crayons-link--secondary flex items-center fw-medium">
    <span class="js-comment-username">Opeyemi Stephen</span>
      <span class="crayons-tooltip inline-block spec-op-author -mr-2" data-tooltip="Author">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="aa4hs5h05ahubhzdn50nrttoabvzsbka" class="crayons-icon"><title id="aa4hs5h05ahubhzdn50nrttoabvzsbka">Author</title>
    <path d="M12 8.25a6 6 0 110 12 6 6 0 010-12zm0 2.625l-.992 2.01-2.218.322 1.605 1.564-.379 2.21L12 15.937l1.984 1.043-.379-2.209 1.605-1.564-2.218-.323L12 10.875zm.75-6.376l3.75.001v2.25l-1.022.854a7.45 7.45 0 00-2.728-.817V4.5zm-1.5 0v2.288a7.451 7.451 0 00-2.727.816L7.5 6.75V4.5h3.75z"></path>
</svg>

      </span>
  </a>

  <span class="color-base-30 px-2" role="presentation">&bull;</span>

<a href="https://dev.to/resourcefulmind/comment/1e39f" class="comment-date crayons-link crayons-link--secondary fs-s">
  <time datetime="2021-04-30T20:29:47Z">
    Apr 30
  </time>

</a>


  <div class="comment__dropdown">
    <button class="dropbtn comment__dropdown-trigger crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon" aria-label="Toggle dropdown menu" aria-haspopup="true">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="asfh9h4ssgqtxkqncb0zh8cv27fmbm1n" class="crayons-icon pointer-events-none"><title id="asfh9h4ssgqtxkqncb0zh8cv27fmbm1n">Dropdown menu</title>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.25 12a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm5.25 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm3.75 1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
</svg>

    </button>
    <ul class="crayons-dropdown p-1 right-1 s:right-0 s:left-auto fs-base dropdown">
      <li><a href="https://dev.to/resourcefulmind/comment/1e39f" class="crayons-link crayons-link--block permalink-copybtn" aria-label="Copy link to Opeyemi Stephen's comment" data-no-instant>Copy link</a></li>
      <li class="comment-actions hidden" data-user-id="435270" data-action="settings-button" data-path="https://dev.to/resourcefulmind/comment/1e39f/settings" aria-label="Go to Opeyemi Stephen's comment settings"></li>
      <li class="comment-actions hidden" data-action="hide-button" data-commentable-user-id="435270" data-user-id="435270">
        <a href="#" class="crayons-link crayons-link--block hide-comment" data-hide-type="hide" data-comment-id="705317" aria-label="Hide Opeyemi Stephen's comment">
          Hide
        </a>
      </li>
      <li class="mod-actions hidden mod-actions-comment-button" data-path="https://dev.to/resourcefulmind/comment/1e39f/mod" aria-label="Moderate Opeyemi Stephen's comment"></li>
      <li class="report-abuse-link-wrapper" data-path="/report-abuse?url=https://dev.to/resourcefulmind/comment/1e39f" aria-label="Report Opeyemi Stephen's comment as abusive or violating our code of conduct and/or terms and conditions"></li>
      <li class="current-user-actions"></li>
    </ul>
  </div>
</header>


        <div
          class="
            comment__body
            text-styles
            text-styles--secondary
            body

          ">
          <p>I’m open to this. My Twitter is attached to my profile. You can always send me a DM and then we can build a viable plan</p>


        </div>
    </div>

    <footer class="comment__footer print-hidden">
  <button
    class="crayons-btn crayons-btn--ghost crayons-btn--icon-left crayons-btn--s mr-1 reaction-like inline-flex reaction-button"
    id="button-for-comment-705317"
    data-comment-id="705317"
    title="heart">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="a2x0y4cl7kxrmx1x2kkg64h8gqr647rz" class="crayons-icon reaction-icon not-reacted"><title id="a2x0y4cl7kxrmx1x2kkg64h8gqr647rz">Favorite heart outline button</title><path d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"></path></svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="anfmcwmbbqyk9r1i6ht2vxcpymbouggn" class="crayons-icon reaction-icon--like reaction-icon reacted"><title id="anfmcwmbbqyk9r1i6ht2vxcpymbouggn">Favorite heart outline button</title>
    <path d="M5.116 12.595a4.875 4.875 0 015.56-7.68h-.002L7.493 8.098l1.06 1.061 3.181-3.182a4.875 4.875 0 016.895 6.894L12 19.5l-6.894-6.894.01-.01z"></path>
</svg>

    <span class="reactions-count">
      2
    </span>
    <span class="reactions-label hidden m:inline-block">
      &nbsp;likes
    </span>
  </button>

    <span class="fs-s inline-flex items-center fs-italic color-base-50 pl-1">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="apxfduolipbxldqviyzixjmgs31b8hiu" class="crayons-icon"><title id="apxfduolipbxldqviyzixjmgs31b8hiu">Thread</title>
    <path d="M17 13l-5 6-5-6h3.125c0-3.314 2.798-6 6.25-6 .17 0 .34.006.506.02-1.787.904-3.006 2.705-3.006 4.78V13H17z"></path>
</svg>

      Thread
    </span>

</footer>

  </div>
</div>
      <div
        id="comment-node-705333"
        class="
          comment single-comment-node

          child
          comment--deep-4
          comment--too-deep
        "
        data-comment-id="705333"
        data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e3a5"
        data-comment-author-id="620313"
        data-content-user-id="620313">

<div class="comment__inner">
    <a href="https://dev.to/beitist" class="shrink-0 crayons-avatar mt-4">
    <img class="crayons-avatar__image" width="32" height="32" src="https://res.cloudinary.com/practicaldev/image/fetch/s--VfUIsSIJ--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/620313/8ee5dbdc-bd32-49e6-9eef-2e31e2833d7f.jpeg" alt="beitist profile image" />
  </a>


  <div class="inner-comment comment__details">
    <div class="comment__content crayons-card">



        <header class="comment__header">
  <a href="https://dev.to/beitist" class="crayons-link crayons-link--secondary flex items-center fw-medium">
    <span class="js-comment-username">Sebastian Stüwe</span>
  </a>

  <span class="color-base-30 px-2" role="presentation">&bull;</span>

<a href="https://dev.to/beitist/comment/1e3a5" class="comment-date crayons-link crayons-link--secondary fs-s">
  <time datetime="2021-04-30T20:52:43Z">
    Apr 30
  </time>

</a>


  <div class="comment__dropdown">
    <button class="dropbtn comment__dropdown-trigger crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon" aria-label="Toggle dropdown menu" aria-haspopup="true">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="aemipc7hvtkifu4nhbo2tqsune7irzz4" class="crayons-icon pointer-events-none"><title id="aemipc7hvtkifu4nhbo2tqsune7irzz4">Dropdown menu</title>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.25 12a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm5.25 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm3.75 1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
</svg>

    </button>
    <ul class="crayons-dropdown p-1 right-1 s:right-0 s:left-auto fs-base dropdown">
      <li><a href="https://dev.to/beitist/comment/1e3a5" class="crayons-link crayons-link--block permalink-copybtn" aria-label="Copy link to Sebastian Stüwe's comment" data-no-instant>Copy link</a></li>
      <li class="comment-actions hidden" data-user-id="620313" data-action="settings-button" data-path="https://dev.to/beitist/comment/1e3a5/settings" aria-label="Go to Sebastian Stüwe's comment settings"></li>
      <li class="comment-actions hidden" data-action="hide-button" data-commentable-user-id="435270" data-user-id="620313">
        <a href="#" class="crayons-link crayons-link--block hide-comment" data-hide-type="hide" data-comment-id="705333" aria-label="Hide Sebastian Stüwe's comment">
          Hide
        </a>
      </li>
      <li class="mod-actions hidden mod-actions-comment-button" data-path="https://dev.to/beitist/comment/1e3a5/mod" aria-label="Moderate Sebastian Stüwe's comment"></li>
      <li class="report-abuse-link-wrapper" data-path="/report-abuse?url=https://dev.to/beitist/comment/1e3a5" aria-label="Report Sebastian Stüwe's comment as abusive or violating our code of conduct and/or terms and conditions"></li>
      <li class="current-user-actions"></li>
    </ul>
  </div>
</header>


        <div
          class="
            comment__body
            text-styles
            text-styles--secondary
            body

          ">
          <p>I'll do so tomorrow morning!</p>


        </div>
    </div>

    <footer class="comment__footer print-hidden">
  <button
    class="crayons-btn crayons-btn--ghost crayons-btn--icon-left crayons-btn--s mr-1 reaction-like inline-flex reaction-button"
    id="button-for-comment-705333"
    data-comment-id="705333"
    title="heart">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="arsiz60u9g6vios1vrspbv6w7bnzpqrj" class="crayons-icon reaction-icon not-reacted"><title id="arsiz60u9g6vios1vrspbv6w7bnzpqrj">Favorite heart outline button</title><path d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"></path></svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="a2ovkfkoh6c11cva3ujslk7kqe4xde13" class="crayons-icon reaction-icon--like reaction-icon reacted"><title id="a2ovkfkoh6c11cva3ujslk7kqe4xde13">Favorite heart outline button</title>
    <path d="M5.116 12.595a4.875 4.875 0 015.56-7.68h-.002L7.493 8.098l1.06 1.061 3.181-3.182a4.875 4.875 0 016.895 6.894L12 19.5l-6.894-6.894.01-.01z"></path>
</svg>

    <span class="reactions-count">
      1
    </span>
    <span class="reactions-label hidden m:inline-block">
      &nbsp;like
    </span>
  </button>

    <a
      class="actions crayons-btn crayons-btn--ghost crayons-btn--s crayons-btn--icon-left toggle-reply-form mr-1 inline-flex"
      href="#/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/new/1e3a5"
      data-comment-id="705333"
      data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e3a5"
      rel="nofollow">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="a8fz788q6ghaya1hkmijz2cccte9jdxt" class="crayons-icon reaction-icon not-reacted"><title id="a8fz788q6ghaya1hkmijz2cccte9jdxt">Comment button</title><path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path></svg>

      <span class="hidden m:inline-block">Reply</span>
    </a>

</footer>

  </div>
</div>


      </div>


      </div>


      </div>
    </details>
    <details class="comment-wrapper js-comment-wrapper comment-wrapper--deep-2 child" open>
      <summary>
        <span class="mx-0 inline-block align-middle">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="ab2yj3g5pk91hl5sxaoymmzt6wk5hlsd" class="crayons-icon expanded"><title id="ab2yj3g5pk91hl5sxaoymmzt6wk5hlsd">Collapse</title>
    <path d="M12 10.677L8 6.935 9 6l3 2.807L15 6l1 .935-4 3.742zm0 4.517L9 18l-1-.935 4-3.742 4 3.742-1 .934-3-2.805z"></path>
</svg>

          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="albkbvbp5vmugl40uw9wdegdaivxetmw" class="crayons-icon collapsed"><title id="albkbvbp5vmugl40uw9wdegdaivxetmw">Expand</title>
    <path d="M12 18l-4-3.771 1-.943 3 2.829 3-2.829 1 .943L12 18zm0-10.115l-3 2.829-1-.943L12 6l4 3.771-1 .942-3-2.828z"></path>
</svg>

        </span>
        <span class="js-collapse-comment-content inline-block align-middle"></span>
      </summary>
      <div
        id="comment-node-705736"
        class="
          comment single-comment-node

          child
          comment--deep-2

        "
        data-comment-id="705736"
        data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e3pi"
        data-comment-author-id="624023"
        data-content-user-id="624023">

<div class="comment__inner">
    <a href="https://dev.to/justicekazzy" class="shrink-0 crayons-avatar mt-4">
    <img class="crayons-avatar__image" width="32" height="32" src="https://res.cloudinary.com/practicaldev/image/fetch/s--JjhZ_XJb--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/624023/62087d07-873a-40be-88e2-ff02b1086402.png" alt="justicekazzy profile image" />
  </a>


  <div class="inner-comment comment__details">
    <div class="comment__content crayons-card">



        <header class="comment__header">
  <a href="https://dev.to/justicekazzy" class="crayons-link crayons-link--secondary flex items-center fw-medium">
    <span class="js-comment-username">kazzy</span>
  </a>

  <span class="color-base-30 px-2" role="presentation">&bull;</span>

<a href="https://dev.to/justicekazzy/comment/1e3pi" class="comment-date crayons-link crayons-link--secondary fs-s">
  <time datetime="2021-05-01T18:48:57Z">
    May 1
  </time>

</a>


  <div class="comment__dropdown">
    <button class="dropbtn comment__dropdown-trigger crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon" aria-label="Toggle dropdown menu" aria-haspopup="true">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="ap5x3sg2l0ctluuvobgv2m08ds2fq6of" class="crayons-icon pointer-events-none"><title id="ap5x3sg2l0ctluuvobgv2m08ds2fq6of">Dropdown menu</title>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.25 12a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm5.25 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm3.75 1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
</svg>

    </button>
    <ul class="crayons-dropdown p-1 right-1 s:right-0 s:left-auto fs-base dropdown">
      <li><a href="https://dev.to/justicekazzy/comment/1e3pi" class="crayons-link crayons-link--block permalink-copybtn" aria-label="Copy link to kazzy's comment" data-no-instant>Copy link</a></li>
      <li class="comment-actions hidden" data-user-id="624023" data-action="settings-button" data-path="https://dev.to/justicekazzy/comment/1e3pi/settings" aria-label="Go to kazzy's comment settings"></li>
      <li class="comment-actions hidden" data-action="hide-button" data-commentable-user-id="435270" data-user-id="624023">
        <a href="#" class="crayons-link crayons-link--block hide-comment" data-hide-type="hide" data-comment-id="705736" aria-label="Hide kazzy's comment">
          Hide
        </a>
      </li>
      <li class="mod-actions hidden mod-actions-comment-button" data-path="https://dev.to/justicekazzy/comment/1e3pi/mod" aria-label="Moderate kazzy's comment"></li>
      <li class="report-abuse-link-wrapper" data-path="/report-abuse?url=https://dev.to/justicekazzy/comment/1e3pi" aria-label="Report kazzy's comment as abusive or violating our code of conduct and/or terms and conditions"></li>
      <li class="current-user-actions"></li>
    </ul>
  </div>
</header>


        <div
          class="
            comment__body
            text-styles
            text-styles--secondary
            body

          ">
          <p>I think there's a place like this in Asaba. My sister traveled there sometime in 2019 and she found a space that welcomed programmers and developers. <br>
It was more of a hub where you could sit and charge your devices. Also they had free Wi-Fi which when coupled with the serene environment, made her never want to leave.<br>
Environments like these are hard to come by in Nigeria. A space to learn with some basic amenities provided. <br>
No one would grow from there and not want to give back in the long run.</p>


        </div>
    </div>

    <footer class="comment__footer print-hidden">
  <button
    class="crayons-btn crayons-btn--ghost crayons-btn--icon-left crayons-btn--s mr-1 reaction-like inline-flex reaction-button"
    id="button-for-comment-705736"
    data-comment-id="705736"
    title="heart">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="abwe7d4sdcafsgopq9pyema7kme6jmdk" class="crayons-icon reaction-icon not-reacted"><title id="abwe7d4sdcafsgopq9pyema7kme6jmdk">Favorite heart outline button</title><path d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"></path></svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="a8vgzkl30e84xkhkd74s2s2mhztijcrk" class="crayons-icon reaction-icon--like reaction-icon reacted"><title id="a8vgzkl30e84xkhkd74s2s2mhztijcrk">Favorite heart outline button</title>
    <path d="M5.116 12.595a4.875 4.875 0 015.56-7.68h-.002L7.493 8.098l1.06 1.061 3.181-3.182a4.875 4.875 0 016.895 6.894L12 19.5l-6.894-6.894.01-.01z"></path>
</svg>

    <span class="reactions-count">
      3
    </span>
    <span class="reactions-label hidden m:inline-block">
      &nbsp;likes
    </span>
  </button>

    <span class="fs-s inline-flex items-center fs-italic color-base-50 pl-1">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="arb0mys1oxtuvrn0kj9ec9vhzrpoqkox" class="crayons-icon"><title id="arb0mys1oxtuvrn0kj9ec9vhzrpoqkox">Thread</title>
    <path d="M17 13l-5 6-5-6h3.125c0-3.314 2.798-6 6.25-6 .17 0 .34.006.506.02-1.787.904-3.006 2.705-3.006 4.78V13H17z"></path>
</svg>

      Thread
    </span>

</footer>

  </div>
</div>
      <div
        id="comment-node-707291"
        class="
          comment single-comment-node

          child
          comment--deep-3

        "
        data-comment-id="707291"
        data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e67d"
        data-comment-author-id="544060"
        data-content-user-id="544060">

<div class="comment__inner">
    <a href="https://dev.to/tijani0826" class="shrink-0 crayons-avatar mt-4">
    <img class="crayons-avatar__image" width="32" height="32" src="https://res.cloudinary.com/practicaldev/image/fetch/s--MZwC4m16--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/544060/3724849a-c069-4ad8-be67-376b0c41ccea.png" alt="tijani0826 profile image" />
  </a>


  <div class="inner-comment comment__details">
    <div class="comment__content crayons-card">



        <header class="comment__header">
  <a href="https://dev.to/tijani0826" class="crayons-link crayons-link--secondary flex items-center fw-medium">
    <span class="js-comment-username">Tijani Ibrahim</span>
  </a>

  <span class="color-base-30 px-2" role="presentation">&bull;</span>

<a href="https://dev.to/tijani0826/comment/1e67d" class="comment-date crayons-link crayons-link--secondary fs-s">
  <time datetime="2021-05-04T18:55:16Z">
    May 4
  </time>

</a>


  <div class="comment__dropdown">
    <button class="dropbtn comment__dropdown-trigger crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon" aria-label="Toggle dropdown menu" aria-haspopup="true">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="ai4dxfonk4ojaytw4p2zw2bp8aqyyd3z" class="crayons-icon pointer-events-none"><title id="ai4dxfonk4ojaytw4p2zw2bp8aqyyd3z">Dropdown menu</title>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.25 12a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm5.25 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm3.75 1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
</svg>

    </button>
    <ul class="crayons-dropdown p-1 right-1 s:right-0 s:left-auto fs-base dropdown">
      <li><a href="https://dev.to/tijani0826/comment/1e67d" class="crayons-link crayons-link--block permalink-copybtn" aria-label="Copy link to Tijani Ibrahim's comment" data-no-instant>Copy link</a></li>
      <li class="comment-actions hidden" data-user-id="544060" data-action="settings-button" data-path="https://dev.to/tijani0826/comment/1e67d/settings" aria-label="Go to Tijani Ibrahim's comment settings"></li>
      <li class="comment-actions hidden" data-action="hide-button" data-commentable-user-id="435270" data-user-id="544060">
        <a href="#" class="crayons-link crayons-link--block hide-comment" data-hide-type="hide" data-comment-id="707291" aria-label="Hide Tijani Ibrahim's comment">
          Hide
        </a>
      </li>
      <li class="mod-actions hidden mod-actions-comment-button" data-path="https://dev.to/tijani0826/comment/1e67d/mod" aria-label="Moderate Tijani Ibrahim's comment"></li>
      <li class="report-abuse-link-wrapper" data-path="/report-abuse?url=https://dev.to/tijani0826/comment/1e67d" aria-label="Report Tijani Ibrahim's comment as abusive or violating our code of conduct and/or terms and conditions"></li>
      <li class="current-user-actions"></li>
    </ul>
  </div>
</header>


        <div
          class="
            comment__body
            text-styles
            text-styles--secondary
            body

          ">
          <p>That's if they don't start calling it yahoo boys spot. And then one day the police will come parading them or worse put them in cell for offenses the didn't commit</p>


        </div>
    </div>

    <footer class="comment__footer print-hidden">
  <button
    class="crayons-btn crayons-btn--ghost crayons-btn--icon-left crayons-btn--s mr-1 reaction-like inline-flex reaction-button"
    id="button-for-comment-707291"
    data-comment-id="707291"
    title="heart">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="abwx7bmh0s1s2w3w61yxt78xl4bu2ckp" class="crayons-icon reaction-icon not-reacted"><title id="abwx7bmh0s1s2w3w61yxt78xl4bu2ckp">Favorite heart outline button</title><path d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"></path></svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="ak8cug0li53p9zrppmo6afs94fy8ekud" class="crayons-icon reaction-icon--like reaction-icon reacted"><title id="ak8cug0li53p9zrppmo6afs94fy8ekud">Favorite heart outline button</title>
    <path d="M5.116 12.595a4.875 4.875 0 015.56-7.68h-.002L7.493 8.098l1.06 1.061 3.181-3.182a4.875 4.875 0 016.895 6.894L12 19.5l-6.894-6.894.01-.01z"></path>
</svg>

    <span class="reactions-count">
      3
    </span>
    <span class="reactions-label hidden m:inline-block">
      &nbsp;likes
    </span>
  </button>

    <span class="fs-s inline-flex items-center fs-italic color-base-50 pl-1">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="ali83i5paxd2pw1ba8gmpqpw7mg9bojb" class="crayons-icon"><title id="ali83i5paxd2pw1ba8gmpqpw7mg9bojb">Thread</title>
    <path d="M17 13l-5 6-5-6h3.125c0-3.314 2.798-6 6.25-6 .17 0 .34.006.506.02-1.787.904-3.006 2.705-3.006 4.78V13H17z"></path>
</svg>

      Thread
    </span>

</footer>

  </div>
</div>
      <div
        id="comment-node-707603"
        class="
          comment single-comment-node

          child
          comment--deep-4
          comment--too-deep
        "
        data-comment-id="707603"
        data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e6jd"
        data-comment-author-id="624023"
        data-content-user-id="624023">

<div class="comment__inner">
    <a href="https://dev.to/justicekazzy" class="shrink-0 crayons-avatar mt-4">
    <img class="crayons-avatar__image" width="32" height="32" src="https://res.cloudinary.com/practicaldev/image/fetch/s--JjhZ_XJb--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/624023/62087d07-873a-40be-88e2-ff02b1086402.png" alt="justicekazzy profile image" />
  </a>


  <div class="inner-comment comment__details">
    <div class="comment__content crayons-card">



        <header class="comment__header">
  <a href="https://dev.to/justicekazzy" class="crayons-link crayons-link--secondary flex items-center fw-medium">
    <span class="js-comment-username">kazzy</span>
  </a>

  <span class="color-base-30 px-2" role="presentation">&bull;</span>

<a href="https://dev.to/justicekazzy/comment/1e6jd" class="comment-date crayons-link crayons-link--secondary fs-s">
  <time datetime="2021-05-05T10:32:27Z">
    May 5
  </time>

</a>


  <div class="comment__dropdown">
    <button class="dropbtn comment__dropdown-trigger crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon" aria-label="Toggle dropdown menu" aria-haspopup="true">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="a7eckwpmhioif847cfreeuru5dkaschy" class="crayons-icon pointer-events-none"><title id="a7eckwpmhioif847cfreeuru5dkaschy">Dropdown menu</title>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.25 12a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm5.25 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm3.75 1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
</svg>

    </button>
    <ul class="crayons-dropdown p-1 right-1 s:right-0 s:left-auto fs-base dropdown">
      <li><a href="https://dev.to/justicekazzy/comment/1e6jd" class="crayons-link crayons-link--block permalink-copybtn" aria-label="Copy link to kazzy's comment" data-no-instant>Copy link</a></li>
      <li class="comment-actions hidden" data-user-id="624023" data-action="settings-button" data-path="https://dev.to/justicekazzy/comment/1e6jd/settings" aria-label="Go to kazzy's comment settings"></li>
      <li class="comment-actions hidden" data-action="hide-button" data-commentable-user-id="435270" data-user-id="624023">
        <a href="#" class="crayons-link crayons-link--block hide-comment" data-hide-type="hide" data-comment-id="707603" aria-label="Hide kazzy's comment">
          Hide
        </a>
      </li>
      <li class="mod-actions hidden mod-actions-comment-button" data-path="https://dev.to/justicekazzy/comment/1e6jd/mod" aria-label="Moderate kazzy's comment"></li>
      <li class="report-abuse-link-wrapper" data-path="/report-abuse?url=https://dev.to/justicekazzy/comment/1e6jd" aria-label="Report kazzy's comment as abusive or violating our code of conduct and/or terms and conditions"></li>
      <li class="current-user-actions"></li>
    </ul>
  </div>
</header>


        <div
          class="
            comment__body
            text-styles
            text-styles--secondary
            body

          ">
          <p>Honestly, I can picture that happening.</p>


        </div>
    </div>

    <footer class="comment__footer print-hidden">
  <button
    class="crayons-btn crayons-btn--ghost crayons-btn--icon-left crayons-btn--s mr-1 reaction-like inline-flex reaction-button"
    id="button-for-comment-707603"
    data-comment-id="707603"
    title="heart">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="arttvcgjtpf10qexjq2d15lno9jbqulq" class="crayons-icon reaction-icon not-reacted"><title id="arttvcgjtpf10qexjq2d15lno9jbqulq">Favorite heart outline button</title><path d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"></path></svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="a60tvsa5icu0u9qmzaqcbbwlb6q1yhjt" class="crayons-icon reaction-icon--like reaction-icon reacted"><title id="a60tvsa5icu0u9qmzaqcbbwlb6q1yhjt">Favorite heart outline button</title>
    <path d="M5.116 12.595a4.875 4.875 0 015.56-7.68h-.002L7.493 8.098l1.06 1.061 3.181-3.182a4.875 4.875 0 016.895 6.894L12 19.5l-6.894-6.894.01-.01z"></path>
</svg>

    <span class="reactions-count">
      2
    </span>
    <span class="reactions-label hidden m:inline-block">
      &nbsp;likes
    </span>
  </button>

    <a
      class="actions crayons-btn crayons-btn--ghost crayons-btn--s crayons-btn--icon-left toggle-reply-form mr-1 inline-flex"
      href="#/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/new/1e6jd"
      data-comment-id="707603"
      data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e6jd"
      rel="nofollow">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="alle53a330zy97iod48c4a831cf98apk" class="crayons-icon reaction-icon not-reacted"><title id="alle53a330zy97iod48c4a831cf98apk">Comment button</title><path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path></svg>

      <span class="hidden m:inline-block">Reply</span>
    </a>

</footer>

  </div>
</div>


      </div>


      </div>


      </div>
    </details>


      </div>
    </details>


      </div>
    </details>

                    <details class="comment-wrapper js-comment-wrapper comment-wrapper--deep-0 root" open>
      <summary>
        <span class="m:mx-1 inline-block align-middle">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="a4fe6byqesfz40jes1lkvjjqvw22wwrb" class="crayons-icon expanded"><title id="a4fe6byqesfz40jes1lkvjjqvw22wwrb">Collapse</title>
    <path d="M12 10.677L8 6.935 9 6l3 2.807L15 6l1 .935-4 3.742zm0 4.517L9 18l-1-.935 4-3.742 4 3.742-1 .934-3-2.805z"></path>
</svg>

          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="a2dedtvi3v1o79xavn3f4fwjh3852aps" class="crayons-icon collapsed"><title id="a2dedtvi3v1o79xavn3f4fwjh3852aps">Expand</title>
    <path d="M12 18l-4-3.771 1-.943 3 2.829 3-2.829 1 .943L12 18zm0-10.115l-3 2.829-1-.943L12 6l4 3.771-1 .942-3-2.828z"></path>
</svg>

        </span>
        <span class="js-collapse-comment-content inline-block align-middle"></span>
      </summary>
      <div
        id="comment-node-705687"
        class="
          comment single-comment-node

          root
          comment--deep-0

        "
        data-comment-id="705687"
        data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e3nl"
        data-comment-author-id="623985"
        data-content-user-id="623985">

<div class="comment__inner">
    <a href="https://dev.to/colinchidiogo" class="shrink-0 crayons-avatar m:crayons-avatar--l mt-4 m:mt-3">
    <img class="crayons-avatar__image" width="32" height="32" src="https://res.cloudinary.com/practicaldev/image/fetch/s--m9r3kAWv--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/623985/047228c3-2019-4ed3-a88e-499057ac580e.jpg" alt="colinchidiogo profile image" />
  </a>


  <div class="inner-comment comment__details">
    <div class="comment__content crayons-card">



        <header class="comment__header">
  <a href="https://dev.to/colinchidiogo" class="crayons-link crayons-link--secondary flex items-center fw-medium">
    <span class="js-comment-username">Colin Chidiogo</span>
  </a>

  <span class="color-base-30 px-2" role="presentation">&bull;</span>

<a href="https://dev.to/colinchidiogo/comment/1e3nl" class="comment-date crayons-link crayons-link--secondary fs-s">
  <time datetime="2021-05-01T16:40:18Z">
    May 1
  </time>

    &bull; Edited
    <span class="hidden m:inline-block">
      on <time datetime="2021-05-03T21:29:43Z">
      May 3</time>
    </span>
</a>


  <div class="comment__dropdown">
    <button class="dropbtn comment__dropdown-trigger crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon" aria-label="Toggle dropdown menu" aria-haspopup="true">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="atdljjlbie8iia29sl666lnklux8qb9c" class="crayons-icon pointer-events-none"><title id="atdljjlbie8iia29sl666lnklux8qb9c">Dropdown menu</title>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.25 12a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm5.25 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm3.75 1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
</svg>

    </button>
    <ul class="crayons-dropdown p-1 right-1 s:right-0 s:left-auto fs-base dropdown">
      <li><a href="https://dev.to/colinchidiogo/comment/1e3nl" class="crayons-link crayons-link--block permalink-copybtn" aria-label="Copy link to Colin Chidiogo's comment" data-no-instant>Copy link</a></li>
      <li class="comment-actions hidden" data-user-id="623985" data-action="settings-button" data-path="https://dev.to/colinchidiogo/comment/1e3nl/settings" aria-label="Go to Colin Chidiogo's comment settings"></li>
      <li class="comment-actions hidden" data-action="hide-button" data-commentable-user-id="435270" data-user-id="623985">
        <a href="#" class="crayons-link crayons-link--block hide-comment" data-hide-type="hide" data-comment-id="705687" aria-label="Hide Colin Chidiogo's comment">
          Hide
        </a>
      </li>
      <li class="mod-actions hidden mod-actions-comment-button" data-path="https://dev.to/colinchidiogo/comment/1e3nl/mod" aria-label="Moderate Colin Chidiogo's comment"></li>
      <li class="report-abuse-link-wrapper" data-path="/report-abuse?url=https://dev.to/colinchidiogo/comment/1e3nl" aria-label="Report Colin Chidiogo's comment as abusive or violating our code of conduct and/or terms and conditions"></li>
      <li class="current-user-actions"></li>
    </ul>
  </div>
</header>


        <div
          class="
            comment__body
            text-styles
            text-styles--secondary
            body

          ">
          <p>Reading this nearly made me shed tears, because it's what I'm suffering right now, trying to learn to code. <br>
I have about 11 apps to develop, most of them is aimed at fighting poverty, as it's what I've been in all my life.</p>

<p>Around September 2019, I was wondering what one thing to do to improve my life drastically, when a tiny small voice said "LEARN CODING!".</p>

<p>I checked up coding and found out it's what I love doing as I'm very crazy about tech, which also has great potentials for me. In fact, I already have 3 apps ideas then, but I never thought about developing or coding them. </p>

<p>I kept them thinking "if I get rich(which I don't think I will), I will get some Indians to develop them for me".</p>

<p>But after hearing that intuition, I decided to get into software development.</p>

<p>Then comes the challenges. No one in my family believes in my dreams, they call my pursuit, stupid, being lazy, sitting in the village and building useless castles in the air.</p>

<p>Rich men(mostly traders) here in Anambra, I've gone to for support think I'm wasting time, deceiving myself, chasing this white men childish nonsense that is far bigger than me.</p>

<p>The struggle is real and horrible.</p>

<p>I don't know where to get ₦400,000 I need to get;</p>

<ol>
<li>A table.</li>
<li>A 1KVA Solar Gen</li>
<li>A laptop</li>
<li>A tablet (to study my ebooks)</li>
</ol>

<p>I have been trying to save it up since 2019 but I have not reached anywhere.</p>

<p>My little phone accessories trading business, I started after 11years of job search and got nothing, can only just feed me.</p>

<p>Everyday time passes and I sit here looking at my app UI designs, I did on my phone and shake my head.</p>

<p>I use to code on my note book while reading ebooks on my phone but it's so cumbersome and tiring, that I got feed up. That's where I got familiar with HTML and CSS.</p>

<p>I have begged so much for support on Twitter but no one gives a fuck. No one cares. I don't blame them, everyone is passing through hell fire in here.</p>

<p>In my area we see power 3 times a month, once overnight, others maybe 1 hour during the day, that's all.</p>

<p>I'm almost 45yrs, my eyesight is gradually failing me just as my enthusiasm is gradually weaning. </p>

<p>The worst is that a new Intel Celeron (I'm not sure Celeron is powerful enough for coding) laptop is around ₦200,000, thanks to our very weakened useless naira.</p>

<p>I wish I wasn't born into this country(Jungle). I wish I was born in USA. Those guys are lucky, I watch their YouTube videos, see their fancy Coding Setups and salivate.</p>

<p>Those guys are really very lucky, but quick to tell us there's nothing like luck, that's it's all hard work. Nonsense!</p>

<p>If they come to Nigeria and see real hard work will they talk? </p>

<p>Imagine sitting on a bench, with your legs itching of mosquitoes bites, trying to force yourself to study, struggling to figure out the concepts and learn coding, in hot humid very uncomfortable tropical weather(heat), with sweat trickling down your face and every few seconds, a mosquito would buzz pass your ears.</p>

<p>Men, the struggle is fucking real. I'm in it right now. "NO RETREAT NO SURRENDER"! I MUST GET IT OR I DIE TRYING!</p>

<p>But not everyone in Nigeria is passing through hell trying to get into software development. Some are lucky and got great supports from their well to do families and friends or from their jobs. Unfortunately, I'm not such. </p>

<p>But we keep pushing.</p>

<p>THANK YOU SO MUCH FOR GIVING US THE OPPORTUNITY TO VENT OFF OUR FRUSTRATIONS A LIL BIT.</p>

<p>You can reach me on Twitter <a class="mentioned-user" href="https://dev.to/colinchidiogo">@colinchidiogo</a>
.</p>

<p>Thanks. Remain blessed y'all.</p>


        </div>
    </div>

    <footer class="comment__footer print-hidden">
  <button
    class="crayons-btn crayons-btn--ghost crayons-btn--icon-left crayons-btn--s mr-1 reaction-like inline-flex reaction-button"
    id="button-for-comment-705687"
    data-comment-id="705687"
    title="heart">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="adbdokxg0nzdc6s2flrmuvqi4g5bg19l" class="crayons-icon reaction-icon not-reacted"><title id="adbdokxg0nzdc6s2flrmuvqi4g5bg19l">Favorite heart outline button</title><path d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"></path></svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="ajg4sktxx0v9x5psf5p6xk7t6rwm08va" class="crayons-icon reaction-icon--like reaction-icon reacted"><title id="ajg4sktxx0v9x5psf5p6xk7t6rwm08va">Favorite heart outline button</title>
    <path d="M5.116 12.595a4.875 4.875 0 015.56-7.68h-.002L7.493 8.098l1.06 1.061 3.181-3.182a4.875 4.875 0 016.895 6.894L12 19.5l-6.894-6.894.01-.01z"></path>
</svg>

    <span class="reactions-count">
      5
    </span>
    <span class="reactions-label hidden m:inline-block">
      &nbsp;likes
    </span>
  </button>

    <a
      class="actions crayons-btn crayons-btn--ghost crayons-btn--s crayons-btn--icon-left toggle-reply-form mr-1 inline-flex"
      href="#/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/new/1e3nl"
      data-comment-id="705687"
      data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e3nl"
      rel="nofollow">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="an4zo0p3j4xhyqu6pu3bf103g7kkera8" class="crayons-icon reaction-icon not-reacted"><title id="an4zo0p3j4xhyqu6pu3bf103g7kkera8">Comment button</title><path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path></svg>

      <span class="hidden m:inline-block">Reply</span>
    </a>

</footer>

  </div>
</div>
    <details class="comment-wrapper js-comment-wrapper comment-wrapper--deep-1 child" open>
      <summary>
        <span class="mx-0 inline-block align-middle">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="aldu3zjgpb55wfojr2j3h5bjfultqaoe" class="crayons-icon expanded"><title id="aldu3zjgpb55wfojr2j3h5bjfultqaoe">Collapse</title>
    <path d="M12 10.677L8 6.935 9 6l3 2.807L15 6l1 .935-4 3.742zm0 4.517L9 18l-1-.935 4-3.742 4 3.742-1 .934-3-2.805z"></path>
</svg>

          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="a3gps38fvvvgo4pxfwq99jz663u179xe" class="crayons-icon collapsed"><title id="a3gps38fvvvgo4pxfwq99jz663u179xe">Expand</title>
    <path d="M12 18l-4-3.771 1-.943 3 2.829 3-2.829 1 .943L12 18zm0-10.115l-3 2.829-1-.943L12 6l4 3.771-1 .942-3-2.828z"></path>
</svg>

        </span>
        <span class="js-collapse-comment-content inline-block align-middle"></span>
      </summary>
      <div
        id="comment-node-707832"
        class="
          comment single-comment-node

          child
          comment--deep-1

        "
        data-comment-id="707832"
        data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e728"
        data-comment-author-id="420543"
        data-content-user-id="420543">

<div class="comment__inner">
    <a href="https://dev.to/rishitkhandelwal" class="shrink-0 crayons-avatar mt-4">
    <img class="crayons-avatar__image" width="32" height="32" src="https://res.cloudinary.com/practicaldev/image/fetch/s--BSXisC-W--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/420543/5b3d5308-062c-4fbe-b701-5aea11187e78.png" alt="rishitkhandelwal profile image" />
  </a>


  <div class="inner-comment comment__details">
    <div class="comment__content crayons-card">



        <header class="comment__header">
  <a href="https://dev.to/rishitkhandelwal" class="crayons-link crayons-link--secondary flex items-center fw-medium">
    <span class="js-comment-username">Rishit Khandelwal</span>
  </a>

  <span class="color-base-30 px-2" role="presentation">&bull;</span>

<a href="https://dev.to/rishitkhandelwal/comment/1e728" class="comment-date crayons-link crayons-link--secondary fs-s">
  <time datetime="2021-05-05T17:36:35Z">
    May 5
  </time>

</a>


  <div class="comment__dropdown">
    <button class="dropbtn comment__dropdown-trigger crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon" aria-label="Toggle dropdown menu" aria-haspopup="true">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="a7nm0m20o59fkw6m5yptozo09dxl6h88" class="crayons-icon pointer-events-none"><title id="a7nm0m20o59fkw6m5yptozo09dxl6h88">Dropdown menu</title>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.25 12a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm5.25 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm3.75 1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
</svg>

    </button>
    <ul class="crayons-dropdown p-1 right-1 s:right-0 s:left-auto fs-base dropdown">
      <li><a href="https://dev.to/rishitkhandelwal/comment/1e728" class="crayons-link crayons-link--block permalink-copybtn" aria-label="Copy link to Rishit Khandelwal's comment" data-no-instant>Copy link</a></li>
      <li class="comment-actions hidden" data-user-id="420543" data-action="settings-button" data-path="https://dev.to/rishitkhandelwal/comment/1e728/settings" aria-label="Go to Rishit Khandelwal's comment settings"></li>
      <li class="comment-actions hidden" data-action="hide-button" data-commentable-user-id="435270" data-user-id="420543">
        <a href="#" class="crayons-link crayons-link--block hide-comment" data-hide-type="hide" data-comment-id="707832" aria-label="Hide Rishit Khandelwal's comment">
          Hide
        </a>
      </li>
      <li class="mod-actions hidden mod-actions-comment-button" data-path="https://dev.to/rishitkhandelwal/comment/1e728/mod" aria-label="Moderate Rishit Khandelwal's comment"></li>
      <li class="report-abuse-link-wrapper" data-path="/report-abuse?url=https://dev.to/rishitkhandelwal/comment/1e728" aria-label="Report Rishit Khandelwal's comment as abusive or violating our code of conduct and/or terms and conditions"></li>
      <li class="current-user-actions"></li>
    </ul>
  </div>
</header>


        <div
          class="
            comment__body
            text-styles
            text-styles--secondary
            body

          ">
          <p>Now after reading all this, I feel extremely grateful for whatever I have available. I can't imagine my day without accessing the internet or using electricity. I hope the best happens for you. 😀</p>


        </div>
    </div>

    <footer class="comment__footer print-hidden">
  <button
    class="crayons-btn crayons-btn--ghost crayons-btn--icon-left crayons-btn--s mr-1 reaction-like inline-flex reaction-button"
    id="button-for-comment-707832"
    data-comment-id="707832"
    title="heart">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="ahmd8e3y846a1jmgmb10udk46xnpfozp" class="crayons-icon reaction-icon not-reacted"><title id="ahmd8e3y846a1jmgmb10udk46xnpfozp">Favorite heart outline button</title><path d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"></path></svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="asn6h18w8mgsibx51djcbkonx4i00x3d" class="crayons-icon reaction-icon--like reaction-icon reacted"><title id="asn6h18w8mgsibx51djcbkonx4i00x3d">Favorite heart outline button</title>
    <path d="M5.116 12.595a4.875 4.875 0 015.56-7.68h-.002L7.493 8.098l1.06 1.061 3.181-3.182a4.875 4.875 0 016.895 6.894L12 19.5l-6.894-6.894.01-.01z"></path>
</svg>

    <span class="reactions-count">
      2
    </span>
    <span class="reactions-label hidden m:inline-block">
      &nbsp;likes
    </span>
  </button>

    <a
      class="actions crayons-btn crayons-btn--ghost crayons-btn--s crayons-btn--icon-left toggle-reply-form mr-1 inline-flex"
      href="#/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/new/1e728"
      data-comment-id="707832"
      data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e728"
      rel="nofollow">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="admp32xgfl4h9p1r313k7cyo9q1jm5kz" class="crayons-icon reaction-icon not-reacted"><title id="admp32xgfl4h9p1r313k7cyo9q1jm5kz">Comment button</title><path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path></svg>

      <span class="hidden m:inline-block">Reply</span>
    </a>

</footer>

  </div>
</div>
    <details class="comment-wrapper js-comment-wrapper comment-wrapper--deep-2 child" open>
      <summary>
        <span class="mx-0 inline-block align-middle">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="ali2a4hn2c2kzo3b0snksc9btf05zcrd" class="crayons-icon expanded"><title id="ali2a4hn2c2kzo3b0snksc9btf05zcrd">Collapse</title>
    <path d="M12 10.677L8 6.935 9 6l3 2.807L15 6l1 .935-4 3.742zm0 4.517L9 18l-1-.935 4-3.742 4 3.742-1 .934-3-2.805z"></path>
</svg>

          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="acs2bp96jhktf1tf5rsaybghqxkhvoz8" class="crayons-icon collapsed"><title id="acs2bp96jhktf1tf5rsaybghqxkhvoz8">Expand</title>
    <path d="M12 18l-4-3.771 1-.943 3 2.829 3-2.829 1 .943L12 18zm0-10.115l-3 2.829-1-.943L12 6l4 3.771-1 .942-3-2.828z"></path>
</svg>

        </span>
        <span class="js-collapse-comment-content inline-block align-middle"></span>
      </summary>
      <div
        id="comment-node-707940"
        class="
          comment single-comment-node

          child
          comment--deep-2

        "
        data-comment-id="707940"
        data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e76c"
        data-comment-author-id="435270"
        data-content-user-id="435270">

<div class="comment__inner">
    <a href="https://dev.to/resourcefulmind" class="shrink-0 crayons-avatar mt-4">
    <img class="crayons-avatar__image" width="32" height="32" src="https://res.cloudinary.com/practicaldev/image/fetch/s--6y949wgP--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/435270/7ca3876e-ca85-478e-a2fa-c634f4a78121.png" alt="resourcefulmind profile image" />
  </a>


  <div class="inner-comment comment__details">
    <div class="comment__content crayons-card">



        <header class="comment__header">
  <a href="https://dev.to/resourcefulmind" class="crayons-link crayons-link--secondary flex items-center fw-medium">
    <span class="js-comment-username">Opeyemi Stephen</span>
      <span class="crayons-tooltip inline-block spec-op-author -mr-2" data-tooltip="Author">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="ap923po0o1fb3800a90pqp1wpessnt3u" class="crayons-icon"><title id="ap923po0o1fb3800a90pqp1wpessnt3u">Author</title>
    <path d="M12 8.25a6 6 0 110 12 6 6 0 010-12zm0 2.625l-.992 2.01-2.218.322 1.605 1.564-.379 2.21L12 15.937l1.984 1.043-.379-2.209 1.605-1.564-2.218-.323L12 10.875zm.75-6.376l3.75.001v2.25l-1.022.854a7.45 7.45 0 00-2.728-.817V4.5zm-1.5 0v2.288a7.451 7.451 0 00-2.727.816L7.5 6.75V4.5h3.75z"></path>
</svg>

      </span>
  </a>

  <span class="color-base-30 px-2" role="presentation">&bull;</span>

<a href="https://dev.to/resourcefulmind/comment/1e76c" class="comment-date crayons-link crayons-link--secondary fs-s">
  <time datetime="2021-05-05T22:54:46Z">
    May 5
  </time>

</a>


  <div class="comment__dropdown">
    <button class="dropbtn comment__dropdown-trigger crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon" aria-label="Toggle dropdown menu" aria-haspopup="true">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="acf1x8z1eixc6wxz6wgxa9o8oxcnbpt6" class="crayons-icon pointer-events-none"><title id="acf1x8z1eixc6wxz6wgxa9o8oxcnbpt6">Dropdown menu</title>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.25 12a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm5.25 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm3.75 1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
</svg>

    </button>
    <ul class="crayons-dropdown p-1 right-1 s:right-0 s:left-auto fs-base dropdown">
      <li><a href="https://dev.to/resourcefulmind/comment/1e76c" class="crayons-link crayons-link--block permalink-copybtn" aria-label="Copy link to Opeyemi Stephen's comment" data-no-instant>Copy link</a></li>
      <li class="comment-actions hidden" data-user-id="435270" data-action="settings-button" data-path="https://dev.to/resourcefulmind/comment/1e76c/settings" aria-label="Go to Opeyemi Stephen's comment settings"></li>
      <li class="comment-actions hidden" data-action="hide-button" data-commentable-user-id="435270" data-user-id="435270">
        <a href="#" class="crayons-link crayons-link--block hide-comment" data-hide-type="hide" data-comment-id="707940" aria-label="Hide Opeyemi Stephen's comment">
          Hide
        </a>
      </li>
      <li class="mod-actions hidden mod-actions-comment-button" data-path="https://dev.to/resourcefulmind/comment/1e76c/mod" aria-label="Moderate Opeyemi Stephen's comment"></li>
      <li class="report-abuse-link-wrapper" data-path="/report-abuse?url=https://dev.to/resourcefulmind/comment/1e76c" aria-label="Report Opeyemi Stephen's comment as abusive or violating our code of conduct and/or terms and conditions"></li>
      <li class="current-user-actions"></li>
    </ul>
  </div>
</header>


        <div
          class="
            comment__body
            text-styles
            text-styles--secondary
            body

          ">
          <p>We sure hoped so too. Realistically, we know it won’t with the present crop of leaders. It’s left to us to succeed and bring others forth.</p>


        </div>
    </div>

    <footer class="comment__footer print-hidden">
  <button
    class="crayons-btn crayons-btn--ghost crayons-btn--icon-left crayons-btn--s mr-1 reaction-like inline-flex reaction-button"
    id="button-for-comment-707940"
    data-comment-id="707940"
    title="heart">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="a38ojkrih7neik6gu5erpesajdymt74z" class="crayons-icon reaction-icon not-reacted"><title id="a38ojkrih7neik6gu5erpesajdymt74z">Favorite heart outline button</title><path d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"></path></svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="a3bav838vbarz81igiwo5f3uhf6xwq04" class="crayons-icon reaction-icon--like reaction-icon reacted"><title id="a3bav838vbarz81igiwo5f3uhf6xwq04">Favorite heart outline button</title>
    <path d="M5.116 12.595a4.875 4.875 0 015.56-7.68h-.002L7.493 8.098l1.06 1.061 3.181-3.182a4.875 4.875 0 016.895 6.894L12 19.5l-6.894-6.894.01-.01z"></path>
</svg>

    <span class="reactions-count">
      1
    </span>
    <span class="reactions-label hidden m:inline-block">
      &nbsp;like
    </span>
  </button>

    <a
      class="actions crayons-btn crayons-btn--ghost crayons-btn--s crayons-btn--icon-left toggle-reply-form mr-1 inline-flex"
      href="#/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/new/1e76c"
      data-comment-id="707940"
      data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e76c"
      rel="nofollow">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="ancidjm6w9flpjug8m11ho03moqen2o5" class="crayons-icon reaction-icon not-reacted"><title id="ancidjm6w9flpjug8m11ho03moqen2o5">Comment button</title><path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path></svg>

      <span class="hidden m:inline-block">Reply</span>
    </a>

</footer>

  </div>
</div>


      </div>
    </details>
    <details class="comment-wrapper js-comment-wrapper comment-wrapper--deep-2 child" open>
      <summary>
        <span class="mx-0 inline-block align-middle">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="aa5kndssnft081clecly9ucb13324z2v" class="crayons-icon expanded"><title id="aa5kndssnft081clecly9ucb13324z2v">Collapse</title>
    <path d="M12 10.677L8 6.935 9 6l3 2.807L15 6l1 .935-4 3.742zm0 4.517L9 18l-1-.935 4-3.742 4 3.742-1 .934-3-2.805z"></path>
</svg>

          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="ac7l0p0dx41s85ecda1h6qcm3g550oes" class="crayons-icon collapsed"><title id="ac7l0p0dx41s85ecda1h6qcm3g550oes">Expand</title>
    <path d="M12 18l-4-3.771 1-.943 3 2.829 3-2.829 1 .943L12 18zm0-10.115l-3 2.829-1-.943L12 6l4 3.771-1 .942-3-2.828z"></path>
</svg>

        </span>
        <span class="js-collapse-comment-content inline-block align-middle"></span>
      </summary>
      <div
        id="comment-node-709559"
        class="
          comment single-comment-node

          child
          comment--deep-2

        "
        data-comment-id="709559"
        data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e9gj"
        data-comment-author-id="623985"
        data-content-user-id="623985">

<div class="comment__inner">
    <a href="https://dev.to/colinchidiogo" class="shrink-0 crayons-avatar mt-4">
    <img class="crayons-avatar__image" width="32" height="32" src="https://res.cloudinary.com/practicaldev/image/fetch/s--m9r3kAWv--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/623985/047228c3-2019-4ed3-a88e-499057ac580e.jpg" alt="colinchidiogo profile image" />
  </a>


  <div class="inner-comment comment__details">
    <div class="comment__content crayons-card">



        <header class="comment__header">
  <a href="https://dev.to/colinchidiogo" class="crayons-link crayons-link--secondary flex items-center fw-medium">
    <span class="js-comment-username">Colin Chidiogo</span>
  </a>

  <span class="color-base-30 px-2" role="presentation">&bull;</span>

<a href="https://dev.to/colinchidiogo/comment/1e9gj" class="comment-date crayons-link crayons-link--secondary fs-s">
  <time datetime="2021-05-08T17:26:06Z">
    May 8
  </time>

</a>


  <div class="comment__dropdown">
    <button class="dropbtn comment__dropdown-trigger crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon" aria-label="Toggle dropdown menu" aria-haspopup="true">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="acep8nzzxj51oq1jbffz1ipw2bt0ob9t" class="crayons-icon pointer-events-none"><title id="acep8nzzxj51oq1jbffz1ipw2bt0ob9t">Dropdown menu</title>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.25 12a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm5.25 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm3.75 1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
</svg>

    </button>
    <ul class="crayons-dropdown p-1 right-1 s:right-0 s:left-auto fs-base dropdown">
      <li><a href="https://dev.to/colinchidiogo/comment/1e9gj" class="crayons-link crayons-link--block permalink-copybtn" aria-label="Copy link to Colin Chidiogo's comment" data-no-instant>Copy link</a></li>
      <li class="comment-actions hidden" data-user-id="623985" data-action="settings-button" data-path="https://dev.to/colinchidiogo/comment/1e9gj/settings" aria-label="Go to Colin Chidiogo's comment settings"></li>
      <li class="comment-actions hidden" data-action="hide-button" data-commentable-user-id="435270" data-user-id="623985">
        <a href="#" class="crayons-link crayons-link--block hide-comment" data-hide-type="hide" data-comment-id="709559" aria-label="Hide Colin Chidiogo's comment">
          Hide
        </a>
      </li>
      <li class="mod-actions hidden mod-actions-comment-button" data-path="https://dev.to/colinchidiogo/comment/1e9gj/mod" aria-label="Moderate Colin Chidiogo's comment"></li>
      <li class="report-abuse-link-wrapper" data-path="/report-abuse?url=https://dev.to/colinchidiogo/comment/1e9gj" aria-label="Report Colin Chidiogo's comment as abusive or violating our code of conduct and/or terms and conditions"></li>
      <li class="current-user-actions"></li>
    </ul>
  </div>
</header>


        <div
          class="
            comment__body
            text-styles
            text-styles--secondary
            body

          ">
          <p>Feel grateful! Feel very grateful! Because you people are very lucky.</p>

<p>But we keep pushing, till death.</p>

<p>We ain't got no options.</p>


        </div>
    </div>

    <footer class="comment__footer print-hidden">
  <button
    class="crayons-btn crayons-btn--ghost crayons-btn--icon-left crayons-btn--s mr-1 reaction-like inline-flex reaction-button"
    id="button-for-comment-709559"
    data-comment-id="709559"
    title="heart">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="aj4pvyvbdeo4aoy682dss409eqjmm5xg" class="crayons-icon reaction-icon not-reacted"><title id="aj4pvyvbdeo4aoy682dss409eqjmm5xg">Favorite heart outline button</title><path d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"></path></svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="a1azhcbi6v0oid2yyxjnpdve0p7i0f8h" class="crayons-icon reaction-icon--like reaction-icon reacted"><title id="a1azhcbi6v0oid2yyxjnpdve0p7i0f8h">Favorite heart outline button</title>
    <path d="M5.116 12.595a4.875 4.875 0 015.56-7.68h-.002L7.493 8.098l1.06 1.061 3.181-3.182a4.875 4.875 0 016.895 6.894L12 19.5l-6.894-6.894.01-.01z"></path>
</svg>

    <span class="reactions-count">
      1
    </span>
    <span class="reactions-label hidden m:inline-block">
      &nbsp;like
    </span>
  </button>

    <a
      class="actions crayons-btn crayons-btn--ghost crayons-btn--s crayons-btn--icon-left toggle-reply-form mr-1 inline-flex"
      href="#/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/new/1e9gj"
      data-comment-id="709559"
      data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e9gj"
      rel="nofollow">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="at4jlljz3jtxd8u2ol2p8lz1ftlgdx95" class="crayons-icon reaction-icon not-reacted"><title id="at4jlljz3jtxd8u2ol2p8lz1ftlgdx95">Comment button</title><path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path></svg>

      <span class="hidden m:inline-block">Reply</span>
    </a>

</footer>

  </div>
</div>


      </div>
    </details>


      </div>
    </details>
    <details class="comment-wrapper js-comment-wrapper comment-wrapper--deep-1 child" open>
      <summary>
        <span class="mx-0 inline-block align-middle">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="a187scblw64pyvqw0c5ve0teisia03jy" class="crayons-icon expanded"><title id="a187scblw64pyvqw0c5ve0teisia03jy">Collapse</title>
    <path d="M12 10.677L8 6.935 9 6l3 2.807L15 6l1 .935-4 3.742zm0 4.517L9 18l-1-.935 4-3.742 4 3.742-1 .934-3-2.805z"></path>
</svg>

          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="afd0j0lsonflei5i99ugj8hpgjmmsz8l" class="crayons-icon collapsed"><title id="afd0j0lsonflei5i99ugj8hpgjmmsz8l">Expand</title>
    <path d="M12 18l-4-3.771 1-.943 3 2.829 3-2.829 1 .943L12 18zm0-10.115l-3 2.829-1-.943L12 6l4 3.771-1 .942-3-2.828z"></path>
</svg>

        </span>
        <span class="js-collapse-comment-content inline-block align-middle"></span>
      </summary>
      <div
        id="comment-node-707295"
        class="
          comment single-comment-node

          child
          comment--deep-1

        "
        data-comment-id="707295"
        data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e67h"
        data-comment-author-id="544060"
        data-content-user-id="544060">

<div class="comment__inner">
    <a href="https://dev.to/tijani0826" class="shrink-0 crayons-avatar mt-4">
    <img class="crayons-avatar__image" width="32" height="32" src="https://res.cloudinary.com/practicaldev/image/fetch/s--MZwC4m16--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/544060/3724849a-c069-4ad8-be67-376b0c41ccea.png" alt="tijani0826 profile image" />
  </a>


  <div class="inner-comment comment__details">
    <div class="comment__content crayons-card">



        <header class="comment__header">
  <a href="https://dev.to/tijani0826" class="crayons-link crayons-link--secondary flex items-center fw-medium">
    <span class="js-comment-username">Tijani Ibrahim</span>
  </a>

  <span class="color-base-30 px-2" role="presentation">&bull;</span>

<a href="https://dev.to/tijani0826/comment/1e67h" class="comment-date crayons-link crayons-link--secondary fs-s">
  <time datetime="2021-05-04T18:58:25Z">
    May 4
  </time>

</a>


  <div class="comment__dropdown">
    <button class="dropbtn comment__dropdown-trigger crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon" aria-label="Toggle dropdown menu" aria-haspopup="true">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="a2gc9keptjceq4c5o4tavaihhl5j6o36" class="crayons-icon pointer-events-none"><title id="a2gc9keptjceq4c5o4tavaihhl5j6o36">Dropdown menu</title>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.25 12a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm5.25 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm3.75 1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
</svg>

    </button>
    <ul class="crayons-dropdown p-1 right-1 s:right-0 s:left-auto fs-base dropdown">
      <li><a href="https://dev.to/tijani0826/comment/1e67h" class="crayons-link crayons-link--block permalink-copybtn" aria-label="Copy link to Tijani Ibrahim's comment" data-no-instant>Copy link</a></li>
      <li class="comment-actions hidden" data-user-id="544060" data-action="settings-button" data-path="https://dev.to/tijani0826/comment/1e67h/settings" aria-label="Go to Tijani Ibrahim's comment settings"></li>
      <li class="comment-actions hidden" data-action="hide-button" data-commentable-user-id="435270" data-user-id="544060">
        <a href="#" class="crayons-link crayons-link--block hide-comment" data-hide-type="hide" data-comment-id="707295" aria-label="Hide Tijani Ibrahim's comment">
          Hide
        </a>
      </li>
      <li class="mod-actions hidden mod-actions-comment-button" data-path="https://dev.to/tijani0826/comment/1e67h/mod" aria-label="Moderate Tijani Ibrahim's comment"></li>
      <li class="report-abuse-link-wrapper" data-path="/report-abuse?url=https://dev.to/tijani0826/comment/1e67h" aria-label="Report Tijani Ibrahim's comment as abusive or violating our code of conduct and/or terms and conditions"></li>
      <li class="current-user-actions"></li>
    </ul>
  </div>
</header>


        <div
          class="
            comment__body
            text-styles
            text-styles--secondary
            body

          ">
          <p>Me I am cut up between trying to feed my family, do some coding. Then I ventured into teaching, ah, I am already tired.</p>


        </div>
    </div>

    <footer class="comment__footer print-hidden">
  <button
    class="crayons-btn crayons-btn--ghost crayons-btn--icon-left crayons-btn--s mr-1 reaction-like inline-flex reaction-button"
    id="button-for-comment-707295"
    data-comment-id="707295"
    title="heart">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="aet6mhacfnqwb16u19ratm32a0z1qo7c" class="crayons-icon reaction-icon not-reacted"><title id="aet6mhacfnqwb16u19ratm32a0z1qo7c">Favorite heart outline button</title><path d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"></path></svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="apmfrrlwgpzypjla85je18qw34mxe01l" class="crayons-icon reaction-icon--like reaction-icon reacted"><title id="apmfrrlwgpzypjla85je18qw34mxe01l">Favorite heart outline button</title>
    <path d="M5.116 12.595a4.875 4.875 0 015.56-7.68h-.002L7.493 8.098l1.06 1.061 3.181-3.182a4.875 4.875 0 016.895 6.894L12 19.5l-6.894-6.894.01-.01z"></path>
</svg>

    <span class="reactions-count">
      1
    </span>
    <span class="reactions-label hidden m:inline-block">
      &nbsp;like
    </span>
  </button>

    <a
      class="actions crayons-btn crayons-btn--ghost crayons-btn--s crayons-btn--icon-left toggle-reply-form mr-1 inline-flex"
      href="#/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/new/1e67h"
      data-comment-id="707295"
      data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e67h"
      rel="nofollow">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="adsw9w0puzswtryuau6oowctlfqj18f3" class="crayons-icon reaction-icon not-reacted"><title id="adsw9w0puzswtryuau6oowctlfqj18f3">Comment button</title><path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path></svg>

      <span class="hidden m:inline-block">Reply</span>
    </a>

</footer>

  </div>
</div>
    <details class="comment-wrapper js-comment-wrapper comment-wrapper--deep-2 child" open>
      <summary>
        <span class="mx-0 inline-block align-middle">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="ainh3ic74l67dnzto9f86nyohua5srvj" class="crayons-icon expanded"><title id="ainh3ic74l67dnzto9f86nyohua5srvj">Collapse</title>
    <path d="M12 10.677L8 6.935 9 6l3 2.807L15 6l1 .935-4 3.742zm0 4.517L9 18l-1-.935 4-3.742 4 3.742-1 .934-3-2.805z"></path>
</svg>

          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="ahmia9lycvr8t0xcxy6x5ekzlkl962tq" class="crayons-icon collapsed"><title id="ahmia9lycvr8t0xcxy6x5ekzlkl962tq">Expand</title>
    <path d="M12 18l-4-3.771 1-.943 3 2.829 3-2.829 1 .943L12 18zm0-10.115l-3 2.829-1-.943L12 6l4 3.771-1 .942-3-2.828z"></path>
</svg>

        </span>
        <span class="js-collapse-comment-content inline-block align-middle"></span>
      </summary>
      <div
        id="comment-node-709560"
        class="
          comment single-comment-node

          child
          comment--deep-2

        "
        data-comment-id="709560"
        data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e9gk"
        data-comment-author-id="623985"
        data-content-user-id="623985">

<div class="comment__inner">
    <a href="https://dev.to/colinchidiogo" class="shrink-0 crayons-avatar mt-4">
    <img class="crayons-avatar__image" width="32" height="32" src="https://res.cloudinary.com/practicaldev/image/fetch/s--m9r3kAWv--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/623985/047228c3-2019-4ed3-a88e-499057ac580e.jpg" alt="colinchidiogo profile image" />
  </a>


  <div class="inner-comment comment__details">
    <div class="comment__content crayons-card">



        <header class="comment__header">
  <a href="https://dev.to/colinchidiogo" class="crayons-link crayons-link--secondary flex items-center fw-medium">
    <span class="js-comment-username">Colin Chidiogo</span>
  </a>

  <span class="color-base-30 px-2" role="presentation">&bull;</span>

<a href="https://dev.to/colinchidiogo/comment/1e9gk" class="comment-date crayons-link crayons-link--secondary fs-s">
  <time datetime="2021-05-08T17:27:24Z">
    May 8
  </time>

</a>


  <div class="comment__dropdown">
    <button class="dropbtn comment__dropdown-trigger crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon" aria-label="Toggle dropdown menu" aria-haspopup="true">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="a5gh49k89133zg8e8ac16omrc6fnpx7j" class="crayons-icon pointer-events-none"><title id="a5gh49k89133zg8e8ac16omrc6fnpx7j">Dropdown menu</title>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.25 12a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm5.25 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm3.75 1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
</svg>

    </button>
    <ul class="crayons-dropdown p-1 right-1 s:right-0 s:left-auto fs-base dropdown">
      <li><a href="https://dev.to/colinchidiogo/comment/1e9gk" class="crayons-link crayons-link--block permalink-copybtn" aria-label="Copy link to Colin Chidiogo's comment" data-no-instant>Copy link</a></li>
      <li class="comment-actions hidden" data-user-id="623985" data-action="settings-button" data-path="https://dev.to/colinchidiogo/comment/1e9gk/settings" aria-label="Go to Colin Chidiogo's comment settings"></li>
      <li class="comment-actions hidden" data-action="hide-button" data-commentable-user-id="435270" data-user-id="623985">
        <a href="#" class="crayons-link crayons-link--block hide-comment" data-hide-type="hide" data-comment-id="709560" aria-label="Hide Colin Chidiogo's comment">
          Hide
        </a>
      </li>
      <li class="mod-actions hidden mod-actions-comment-button" data-path="https://dev.to/colinchidiogo/comment/1e9gk/mod" aria-label="Moderate Colin Chidiogo's comment"></li>
      <li class="report-abuse-link-wrapper" data-path="/report-abuse?url=https://dev.to/colinchidiogo/comment/1e9gk" aria-label="Report Colin Chidiogo's comment as abusive or violating our code of conduct and/or terms and conditions"></li>
      <li class="current-user-actions"></li>
    </ul>
  </div>
</header>


        <div
          class="
            comment__body
            text-styles
            text-styles--secondary
            body

          ">
          <p>Hold on bro! Keep moving! No matter how small! We ain't got no where else to go.</p>


        </div>
    </div>

    <footer class="comment__footer print-hidden">
  <button
    class="crayons-btn crayons-btn--ghost crayons-btn--icon-left crayons-btn--s mr-1 reaction-like inline-flex reaction-button"
    id="button-for-comment-709560"
    data-comment-id="709560"
    title="heart">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="adw8gg9v4c899rb3ui7p7l4ech2h8ljc" class="crayons-icon reaction-icon not-reacted"><title id="adw8gg9v4c899rb3ui7p7l4ech2h8ljc">Favorite heart outline button</title><path d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"></path></svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="akooq33oro43q0gggtx6xz85p2p5y889" class="crayons-icon reaction-icon--like reaction-icon reacted"><title id="akooq33oro43q0gggtx6xz85p2p5y889">Favorite heart outline button</title>
    <path d="M5.116 12.595a4.875 4.875 0 015.56-7.68h-.002L7.493 8.098l1.06 1.061 3.181-3.182a4.875 4.875 0 016.895 6.894L12 19.5l-6.894-6.894.01-.01z"></path>
</svg>

    <span class="reactions-count">
      1
    </span>
    <span class="reactions-label hidden m:inline-block">
      &nbsp;like
    </span>
  </button>

    <a
      class="actions crayons-btn crayons-btn--ghost crayons-btn--s crayons-btn--icon-left toggle-reply-form mr-1 inline-flex"
      href="#/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/new/1e9gk"
      data-comment-id="709560"
      data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e9gk"
      rel="nofollow">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="alre8urdvatj6azubj0bp5tpalm7sczi" class="crayons-icon reaction-icon not-reacted"><title id="alre8urdvatj6azubj0bp5tpalm7sczi">Comment button</title><path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path></svg>

      <span class="hidden m:inline-block">Reply</span>
    </a>

</footer>

  </div>
</div>


      </div>
    </details>


      </div>
    </details>


      </div>
    </details>

                    <details class="comment-wrapper js-comment-wrapper comment-wrapper--deep-0 root" open>
      <summary>
        <span class="m:mx-1 inline-block align-middle">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="afox9olt7oscpek09u755rzprvbr8j5n" class="crayons-icon expanded"><title id="afox9olt7oscpek09u755rzprvbr8j5n">Collapse</title>
    <path d="M12 10.677L8 6.935 9 6l3 2.807L15 6l1 .935-4 3.742zm0 4.517L9 18l-1-.935 4-3.742 4 3.742-1 .934-3-2.805z"></path>
</svg>

          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="a4m7oi0clifo4xqg40w8lb9kuys3mbk6" class="crayons-icon collapsed"><title id="a4m7oi0clifo4xqg40w8lb9kuys3mbk6">Expand</title>
    <path d="M12 18l-4-3.771 1-.943 3 2.829 3-2.829 1 .943L12 18zm0-10.115l-3 2.829-1-.943L12 6l4 3.771-1 .942-3-2.828z"></path>
</svg>

        </span>
        <span class="js-collapse-comment-content inline-block align-middle"></span>
      </summary>
      <div
        id="comment-node-705490"
        class="
          comment single-comment-node

          root
          comment--deep-0

        "
        data-comment-id="705490"
        data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e3g6"
        data-comment-author-id="462327"
        data-content-user-id="462327">

<div class="comment__inner">
    <a href="https://dev.to/leoloopy" class="shrink-0 crayons-avatar m:crayons-avatar--l mt-4 m:mt-3">
    <img class="crayons-avatar__image" width="32" height="32" src="https://res.cloudinary.com/practicaldev/image/fetch/s--WkT-kGVm--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/462327/eebbfe92-1450-4d6f-8853-d5877c6a8b20.jpg" alt="leoloopy profile image" />
  </a>


  <div class="inner-comment comment__details">
    <div class="comment__content crayons-card">



        <header class="comment__header">
  <a href="https://dev.to/leoloopy" class="crayons-link crayons-link--secondary flex items-center fw-medium">
    <span class="js-comment-username">Leoloopy</span>
  </a>

  <span class="color-base-30 px-2" role="presentation">&bull;</span>

<a href="https://dev.to/leoloopy/comment/1e3g6" class="comment-date crayons-link crayons-link--secondary fs-s">
  <time datetime="2021-05-01T07:07:23Z">
    May 1
  </time>

</a>


  <div class="comment__dropdown">
    <button class="dropbtn comment__dropdown-trigger crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon" aria-label="Toggle dropdown menu" aria-haspopup="true">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="anzzsn6nvertwko1svysdiirztonxteu" class="crayons-icon pointer-events-none"><title id="anzzsn6nvertwko1svysdiirztonxteu">Dropdown menu</title>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.25 12a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm5.25 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm3.75 1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
</svg>

    </button>
    <ul class="crayons-dropdown p-1 right-1 s:right-0 s:left-auto fs-base dropdown">
      <li><a href="https://dev.to/leoloopy/comment/1e3g6" class="crayons-link crayons-link--block permalink-copybtn" aria-label="Copy link to Leoloopy's comment" data-no-instant>Copy link</a></li>
      <li class="comment-actions hidden" data-user-id="462327" data-action="settings-button" data-path="https://dev.to/leoloopy/comment/1e3g6/settings" aria-label="Go to Leoloopy's comment settings"></li>
      <li class="comment-actions hidden" data-action="hide-button" data-commentable-user-id="435270" data-user-id="462327">
        <a href="#" class="crayons-link crayons-link--block hide-comment" data-hide-type="hide" data-comment-id="705490" aria-label="Hide Leoloopy's comment">
          Hide
        </a>
      </li>
      <li class="mod-actions hidden mod-actions-comment-button" data-path="https://dev.to/leoloopy/comment/1e3g6/mod" aria-label="Moderate Leoloopy's comment"></li>
      <li class="report-abuse-link-wrapper" data-path="/report-abuse?url=https://dev.to/leoloopy/comment/1e3g6" aria-label="Report Leoloopy's comment as abusive or violating our code of conduct and/or terms and conditions"></li>
      <li class="current-user-actions"></li>
    </ul>
  </div>
</header>


        <div
          class="
            comment__body
            text-styles
            text-styles--secondary
            body

          ">
          <p>This is a very short and detailed story of the newbie dev journey here in Nigeria which is really disheartening. The environment is set up to make you fail in whatever endeavors you want to do, still you find determined individual scale through all the hurdles. But in the process of finding the ropes, the issue of data and power is the two biggest hurdle you will face. I started this journey 2020 immediately after I finished my degree last year, it has been frustrating but the "why" is the only energy pushing me not to give up. One of the way I was able to overcome the data challenge was by downloading PDF books. After each chapter, I practice all the syntax and solve the exercise on my PC then I move to the next chapter, bit by bit you'll gain more than you can imagine. PDF books are free and reduces the money you'll spend on data for watching YouTube videos or online courses. I've read about four different textbooks on JavaScript alone which has really helped me along the way. In reading those big books and absorbing at least 70% of the information, it means you've already established for yourself a solid foundation which will help you to grab the application of some syntax when watching YouTube videos or other online courses. For the power, I was lucky to have a system that can hold 5 hours battery power when fully charged, so I practice on it everyday for at least 4 hours, which so far has been so fruitful. Then after I've read all what is to be read. I only need constant practise, with the help of vidmate I will download those YouTube videos so I can watch anytime I feel like going back to it. Fortunately for me, I am a graphic designer, so I have the skills to earn some extra cash, which I later used to sort out some bills. In all, we just have to find a way, that's the Nigerian spirit...the government are not ready to do nothing, they're only interested in your milestone achievement, the shameless idiot will call you for pictures after you've arrived. And that does not mean they won't later enact policies to frustrate new tech start-ups. Coding is hard, but the Nigeria government will make it an hellish journey. Stupid set of old fools.</p>


        </div>
    </div>

    <footer class="comment__footer print-hidden">
  <button
    class="crayons-btn crayons-btn--ghost crayons-btn--icon-left crayons-btn--s mr-1 reaction-like inline-flex reaction-button"
    id="button-for-comment-705490"
    data-comment-id="705490"
    title="heart">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="af4r4ijq42qdv3bcn6mnoh0sdz2c6ej1" class="crayons-icon reaction-icon not-reacted"><title id="af4r4ijq42qdv3bcn6mnoh0sdz2c6ej1">Favorite heart outline button</title><path d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"></path></svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="atpr8fq2nqvpj9nunf4lalzg50qcdnwn" class="crayons-icon reaction-icon--like reaction-icon reacted"><title id="atpr8fq2nqvpj9nunf4lalzg50qcdnwn">Favorite heart outline button</title>
    <path d="M5.116 12.595a4.875 4.875 0 015.56-7.68h-.002L7.493 8.098l1.06 1.061 3.181-3.182a4.875 4.875 0 016.895 6.894L12 19.5l-6.894-6.894.01-.01z"></path>
</svg>

    <span class="reactions-count">
      6
    </span>
    <span class="reactions-label hidden m:inline-block">
      &nbsp;likes
    </span>
  </button>

    <a
      class="actions crayons-btn crayons-btn--ghost crayons-btn--s crayons-btn--icon-left toggle-reply-form mr-1 inline-flex"
      href="#/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/new/1e3g6"
      data-comment-id="705490"
      data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e3g6"
      rel="nofollow">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="athhusgh8qhlvkf31016ubau6di7hgzp" class="crayons-icon reaction-icon not-reacted"><title id="athhusgh8qhlvkf31016ubau6di7hgzp">Comment button</title><path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path></svg>

      <span class="hidden m:inline-block">Reply</span>
    </a>

</footer>

  </div>
</div>


      </div>
    </details>

                    <details class="comment-wrapper js-comment-wrapper comment-wrapper--deep-0 root" open>
      <summary>
        <span class="m:mx-1 inline-block align-middle">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="ahqarhbpomdvbkvwsn425p5fcz3dtm3j" class="crayons-icon expanded"><title id="ahqarhbpomdvbkvwsn425p5fcz3dtm3j">Collapse</title>
    <path d="M12 10.677L8 6.935 9 6l3 2.807L15 6l1 .935-4 3.742zm0 4.517L9 18l-1-.935 4-3.742 4 3.742-1 .934-3-2.805z"></path>
</svg>

          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="ahzru8khddj6d08ojjwnv7qno43koqi7" class="crayons-icon collapsed"><title id="ahzru8khddj6d08ojjwnv7qno43koqi7">Expand</title>
    <path d="M12 18l-4-3.771 1-.943 3 2.829 3-2.829 1 .943L12 18zm0-10.115l-3 2.829-1-.943L12 6l4 3.771-1 .942-3-2.828z"></path>
</svg>

        </span>
        <span class="js-collapse-comment-content inline-block align-middle"></span>
      </summary>
      <div
        id="comment-node-704939"
        class="
          comment single-comment-node

          root
          comment--deep-0

        "
        data-comment-id="704939"
        data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e2l1"
        data-comment-author-id="623298"
        data-content-user-id="623298">

<div class="comment__inner">
    <a href="https://dev.to/oyindamolatomo2" class="shrink-0 crayons-avatar m:crayons-avatar--l mt-4 m:mt-3">
    <img class="crayons-avatar__image" width="32" height="32" src="https://res.cloudinary.com/practicaldev/image/fetch/s--yxCEIPL7--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/623298/ed6b2aa4-7ebd-4f68-b276-c6091cdff52a.png" alt="oyindamolatomo2 profile image" />
  </a>


  <div class="inner-comment comment__details">
    <div class="comment__content crayons-card">



        <header class="comment__header">
  <a href="https://dev.to/oyindamolatomo2" class="crayons-link crayons-link--secondary flex items-center fw-medium">
    <span class="js-comment-username">Oyindamola Tomoye</span>
  </a>

  <span class="color-base-30 px-2" role="presentation">&bull;</span>

<a href="https://dev.to/oyindamolatomo2/comment/1e2l1" class="comment-date crayons-link crayons-link--secondary fs-s">
  <time datetime="2021-04-30T07:30:34Z">
    Apr 30
  </time>

</a>


  <div class="comment__dropdown">
    <button class="dropbtn comment__dropdown-trigger crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon" aria-label="Toggle dropdown menu" aria-haspopup="true">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="ae31s8btawn6hf19i20vsr98bkq7jlii" class="crayons-icon pointer-events-none"><title id="ae31s8btawn6hf19i20vsr98bkq7jlii">Dropdown menu</title>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.25 12a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm5.25 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm3.75 1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
</svg>

    </button>
    <ul class="crayons-dropdown p-1 right-1 s:right-0 s:left-auto fs-base dropdown">
      <li><a href="https://dev.to/oyindamolatomo2/comment/1e2l1" class="crayons-link crayons-link--block permalink-copybtn" aria-label="Copy link to Oyindamola Tomoye's comment" data-no-instant>Copy link</a></li>
      <li class="comment-actions hidden" data-user-id="623298" data-action="settings-button" data-path="https://dev.to/oyindamolatomo2/comment/1e2l1/settings" aria-label="Go to Oyindamola Tomoye's comment settings"></li>
      <li class="comment-actions hidden" data-action="hide-button" data-commentable-user-id="435270" data-user-id="623298">
        <a href="#" class="crayons-link crayons-link--block hide-comment" data-hide-type="hide" data-comment-id="704939" aria-label="Hide Oyindamola Tomoye's comment">
          Hide
        </a>
      </li>
      <li class="mod-actions hidden mod-actions-comment-button" data-path="https://dev.to/oyindamolatomo2/comment/1e2l1/mod" aria-label="Moderate Oyindamola Tomoye's comment"></li>
      <li class="report-abuse-link-wrapper" data-path="/report-abuse?url=https://dev.to/oyindamolatomo2/comment/1e2l1" aria-label="Report Oyindamola Tomoye's comment as abusive or violating our code of conduct and/or terms and conditions"></li>
      <li class="current-user-actions"></li>
    </ul>
  </div>
</header>


        <div
          class="
            comment__body
            text-styles
            text-styles--secondary
            body

          ">
          <p>Very apt description. Its like I am reading about myself. Been learning to code for data science for nearly 6 months now. Progress has been slow because I'm unemployed and have no access to constant electricity or funds for the internet.</p>

<p>Really, the govt can do better in this country</p>


        </div>
    </div>

    <footer class="comment__footer print-hidden">
  <button
    class="crayons-btn crayons-btn--ghost crayons-btn--icon-left crayons-btn--s mr-1 reaction-like inline-flex reaction-button"
    id="button-for-comment-704939"
    data-comment-id="704939"
    title="heart">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="a6imm869owcna9uyagplkkt3bfyncdcl" class="crayons-icon reaction-icon not-reacted"><title id="a6imm869owcna9uyagplkkt3bfyncdcl">Favorite heart outline button</title><path d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"></path></svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="abxsz4sek237anmv0mgpff77ckb2hd5b" class="crayons-icon reaction-icon--like reaction-icon reacted"><title id="abxsz4sek237anmv0mgpff77ckb2hd5b">Favorite heart outline button</title>
    <path d="M5.116 12.595a4.875 4.875 0 015.56-7.68h-.002L7.493 8.098l1.06 1.061 3.181-3.182a4.875 4.875 0 016.895 6.894L12 19.5l-6.894-6.894.01-.01z"></path>
</svg>

    <span class="reactions-count">
      5
    </span>
    <span class="reactions-label hidden m:inline-block">
      &nbsp;likes
    </span>
  </button>

    <a
      class="actions crayons-btn crayons-btn--ghost crayons-btn--s crayons-btn--icon-left toggle-reply-form mr-1 inline-flex"
      href="#/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/new/1e2l1"
      data-comment-id="704939"
      data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e2l1"
      rel="nofollow">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="ae8ajh1rt9krhr7rfwk4gf9h9nhxnzq3" class="crayons-icon reaction-icon not-reacted"><title id="ae8ajh1rt9krhr7rfwk4gf9h9nhxnzq3">Comment button</title><path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path></svg>

      <span class="hidden m:inline-block">Reply</span>
    </a>

</footer>

  </div>
</div>
    <details class="comment-wrapper js-comment-wrapper comment-wrapper--deep-1 child" open>
      <summary>
        <span class="mx-0 inline-block align-middle">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="a1spxlit782oqs8w0fh0vx1axvdoy34m" class="crayons-icon expanded"><title id="a1spxlit782oqs8w0fh0vx1axvdoy34m">Collapse</title>
    <path d="M12 10.677L8 6.935 9 6l3 2.807L15 6l1 .935-4 3.742zm0 4.517L9 18l-1-.935 4-3.742 4 3.742-1 .934-3-2.805z"></path>
</svg>

          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="ajoxiroiyul776p92mc8rfok9s8tm7it" class="crayons-icon collapsed"><title id="ajoxiroiyul776p92mc8rfok9s8tm7it">Expand</title>
    <path d="M12 18l-4-3.771 1-.943 3 2.829 3-2.829 1 .943L12 18zm0-10.115l-3 2.829-1-.943L12 6l4 3.771-1 .942-3-2.828z"></path>
</svg>

        </span>
        <span class="js-collapse-comment-content inline-block align-middle"></span>
      </summary>
      <div
        id="comment-node-705319"
        class="
          comment single-comment-node

          child
          comment--deep-1

        "
        data-comment-id="705319"
        data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e39h"
        data-comment-author-id="435270"
        data-content-user-id="435270">

<div class="comment__inner">
    <a href="https://dev.to/resourcefulmind" class="shrink-0 crayons-avatar mt-4">
    <img class="crayons-avatar__image" width="32" height="32" src="https://res.cloudinary.com/practicaldev/image/fetch/s--6y949wgP--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/435270/7ca3876e-ca85-478e-a2fa-c634f4a78121.png" alt="resourcefulmind profile image" />
  </a>


  <div class="inner-comment comment__details">
    <div class="comment__content crayons-card">



        <header class="comment__header">
  <a href="https://dev.to/resourcefulmind" class="crayons-link crayons-link--secondary flex items-center fw-medium">
    <span class="js-comment-username">Opeyemi Stephen</span>
      <span class="crayons-tooltip inline-block spec-op-author -mr-2" data-tooltip="Author">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="a99kkakzb25rh77qx2j5j4n1yo3sjrrj" class="crayons-icon"><title id="a99kkakzb25rh77qx2j5j4n1yo3sjrrj">Author</title>
    <path d="M12 8.25a6 6 0 110 12 6 6 0 010-12zm0 2.625l-.992 2.01-2.218.322 1.605 1.564-.379 2.21L12 15.937l1.984 1.043-.379-2.209 1.605-1.564-2.218-.323L12 10.875zm.75-6.376l3.75.001v2.25l-1.022.854a7.45 7.45 0 00-2.728-.817V4.5zm-1.5 0v2.288a7.451 7.451 0 00-2.727.816L7.5 6.75V4.5h3.75z"></path>
</svg>

      </span>
  </a>

  <span class="color-base-30 px-2" role="presentation">&bull;</span>

<a href="https://dev.to/resourcefulmind/comment/1e39h" class="comment-date crayons-link crayons-link--secondary fs-s">
  <time datetime="2021-04-30T20:33:31Z">
    Apr 30
  </time>

</a>


  <div class="comment__dropdown">
    <button class="dropbtn comment__dropdown-trigger crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon" aria-label="Toggle dropdown menu" aria-haspopup="true">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="a1jalofwyk1vvn86xww3p2xnb5r5g2rn" class="crayons-icon pointer-events-none"><title id="a1jalofwyk1vvn86xww3p2xnb5r5g2rn">Dropdown menu</title>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.25 12a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm5.25 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm3.75 1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
</svg>

    </button>
    <ul class="crayons-dropdown p-1 right-1 s:right-0 s:left-auto fs-base dropdown">
      <li><a href="https://dev.to/resourcefulmind/comment/1e39h" class="crayons-link crayons-link--block permalink-copybtn" aria-label="Copy link to Opeyemi Stephen's comment" data-no-instant>Copy link</a></li>
      <li class="comment-actions hidden" data-user-id="435270" data-action="settings-button" data-path="https://dev.to/resourcefulmind/comment/1e39h/settings" aria-label="Go to Opeyemi Stephen's comment settings"></li>
      <li class="comment-actions hidden" data-action="hide-button" data-commentable-user-id="435270" data-user-id="435270">
        <a href="#" class="crayons-link crayons-link--block hide-comment" data-hide-type="hide" data-comment-id="705319" aria-label="Hide Opeyemi Stephen's comment">
          Hide
        </a>
      </li>
      <li class="mod-actions hidden mod-actions-comment-button" data-path="https://dev.to/resourcefulmind/comment/1e39h/mod" aria-label="Moderate Opeyemi Stephen's comment"></li>
      <li class="report-abuse-link-wrapper" data-path="/report-abuse?url=https://dev.to/resourcefulmind/comment/1e39h" aria-label="Report Opeyemi Stephen's comment as abusive or violating our code of conduct and/or terms and conditions"></li>
      <li class="current-user-actions"></li>
    </ul>
  </div>
</header>


        <div
          class="
            comment__body
            text-styles
            text-styles--secondary
            body

          ">
          <p>You know the truth Oyindamola...the government are not bothered. They only come to claim you when you are “blown”...from Anthony Joshua to Israel Adesanya to Kamaru Usman to Blessing Okagbare...the list is endless and I’m only talking sports ooo. We all just have to find a way. And you know we will because we are fighters.</p>


        </div>
    </div>

    <footer class="comment__footer print-hidden">
  <button
    class="crayons-btn crayons-btn--ghost crayons-btn--icon-left crayons-btn--s mr-1 reaction-like inline-flex reaction-button"
    id="button-for-comment-705319"
    data-comment-id="705319"
    title="heart">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="alhtdl836rbjd45gg9oc69y8vcf4t7f8" class="crayons-icon reaction-icon not-reacted"><title id="alhtdl836rbjd45gg9oc69y8vcf4t7f8">Favorite heart outline button</title><path d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"></path></svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="a1tw6pebn7jpipchw5c62obyo5yhzqhd" class="crayons-icon reaction-icon--like reaction-icon reacted"><title id="a1tw6pebn7jpipchw5c62obyo5yhzqhd">Favorite heart outline button</title>
    <path d="M5.116 12.595a4.875 4.875 0 015.56-7.68h-.002L7.493 8.098l1.06 1.061 3.181-3.182a4.875 4.875 0 016.895 6.894L12 19.5l-6.894-6.894.01-.01z"></path>
</svg>

    <span class="reactions-count">
      5
    </span>
    <span class="reactions-label hidden m:inline-block">
      &nbsp;likes
    </span>
  </button>

    <a
      class="actions crayons-btn crayons-btn--ghost crayons-btn--s crayons-btn--icon-left toggle-reply-form mr-1 inline-flex"
      href="#/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/new/1e39h"
      data-comment-id="705319"
      data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e39h"
      rel="nofollow">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="a4v5gsxo570xw7sa6kpbey8a784wp8sf" class="crayons-icon reaction-icon not-reacted"><title id="a4v5gsxo570xw7sa6kpbey8a784wp8sf">Comment button</title><path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path></svg>

      <span class="hidden m:inline-block">Reply</span>
    </a>

</footer>

  </div>
</div>


      </div>
    </details>


      </div>
    </details>

                    <details class="comment-wrapper js-comment-wrapper comment-wrapper--deep-0 root" open>
      <summary>
        <span class="m:mx-1 inline-block align-middle">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="apeizkzav6qmmd17pocu802d0vtf72t1" class="crayons-icon expanded"><title id="apeizkzav6qmmd17pocu802d0vtf72t1">Collapse</title>
    <path d="M12 10.677L8 6.935 9 6l3 2.807L15 6l1 .935-4 3.742zm0 4.517L9 18l-1-.935 4-3.742 4 3.742-1 .934-3-2.805z"></path>
</svg>

          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="ad92ufu7jkgmx1bhr1i13m6viqmi7orm" class="crayons-icon collapsed"><title id="ad92ufu7jkgmx1bhr1i13m6viqmi7orm">Expand</title>
    <path d="M12 18l-4-3.771 1-.943 3 2.829 3-2.829 1 .943L12 18zm0-10.115l-3 2.829-1-.943L12 6l4 3.771-1 .942-3-2.828z"></path>
</svg>

        </span>
        <span class="js-collapse-comment-content inline-block align-middle"></span>
      </summary>
      <div
        id="comment-node-704378"
        class="
          comment single-comment-node

          root
          comment--deep-0

        "
        data-comment-id="704378"
        data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e1pc"
        data-comment-author-id="616654"
        data-content-user-id="616654">

<div class="comment__inner">
    <a href="https://dev.to/james_palermo_bc208e463e4" class="shrink-0 crayons-avatar m:crayons-avatar--l mt-4 m:mt-3">
    <img class="crayons-avatar__image" width="32" height="32" src="https://res.cloudinary.com/practicaldev/image/fetch/s--NG1mchdi--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/616654/f49bdaa5-4800-4dce-9e1e-631adc41c4c1.png" alt="james_palermo_bc208e463e4 profile image" />
  </a>


  <div class="inner-comment comment__details">
    <div class="comment__content crayons-card">



        <header class="comment__header">
  <a href="https://dev.to/james_palermo_bc208e463e4" class="crayons-link crayons-link--secondary flex items-center fw-medium">
    <span class="js-comment-username">James Palermo</span>
  </a>

  <span class="color-base-30 px-2" role="presentation">&bull;</span>

<a href="https://dev.to/james_palermo_bc208e463e4/comment/1e1pc" class="comment-date crayons-link crayons-link--secondary fs-s">
  <time datetime="2021-04-29T11:43:41Z">
    Apr 29
  </time>

</a>


  <div class="comment__dropdown">
    <button class="dropbtn comment__dropdown-trigger crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon" aria-label="Toggle dropdown menu" aria-haspopup="true">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="a9krs7gm6atrxgy8lh95qswbhhgea5k0" class="crayons-icon pointer-events-none"><title id="a9krs7gm6atrxgy8lh95qswbhhgea5k0">Dropdown menu</title>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.25 12a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm5.25 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm3.75 1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
</svg>

    </button>
    <ul class="crayons-dropdown p-1 right-1 s:right-0 s:left-auto fs-base dropdown">
      <li><a href="https://dev.to/james_palermo_bc208e463e4/comment/1e1pc" class="crayons-link crayons-link--block permalink-copybtn" aria-label="Copy link to James Palermo's comment" data-no-instant>Copy link</a></li>
      <li class="comment-actions hidden" data-user-id="616654" data-action="settings-button" data-path="https://dev.to/james_palermo_bc208e463e4/comment/1e1pc/settings" aria-label="Go to James Palermo's comment settings"></li>
      <li class="comment-actions hidden" data-action="hide-button" data-commentable-user-id="435270" data-user-id="616654">
        <a href="#" class="crayons-link crayons-link--block hide-comment" data-hide-type="hide" data-comment-id="704378" aria-label="Hide James Palermo's comment">
          Hide
        </a>
      </li>
      <li class="mod-actions hidden mod-actions-comment-button" data-path="https://dev.to/james_palermo_bc208e463e4/comment/1e1pc/mod" aria-label="Moderate James Palermo's comment"></li>
      <li class="report-abuse-link-wrapper" data-path="/report-abuse?url=https://dev.to/james_palermo_bc208e463e4/comment/1e1pc" aria-label="Report James Palermo's comment as abusive or violating our code of conduct and/or terms and conditions"></li>
      <li class="current-user-actions"></li>
    </ul>
  </div>
</header>


        <div
          class="
            comment__body
            text-styles
            text-styles--secondary
            body

          ">
          <p>What is the freedom of speech situation like on the ground in Nigeria? Are you guys able to try to organize and combine your voices, maybe reach out to some foreign education NGO'S? Is that risky for ya'll? I'm curious about how trying to set up a charity that supplies chromebooks or something to students would be in Nigeria. </p>


        </div>
    </div>

    <footer class="comment__footer print-hidden">
  <button
    class="crayons-btn crayons-btn--ghost crayons-btn--icon-left crayons-btn--s mr-1 reaction-like inline-flex reaction-button"
    id="button-for-comment-704378"
    data-comment-id="704378"
    title="heart">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="aak97jph5tr93dg2ac4y8srudu251yas" class="crayons-icon reaction-icon not-reacted"><title id="aak97jph5tr93dg2ac4y8srudu251yas">Favorite heart outline button</title><path d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"></path></svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="akf69xuhqxcur6u1wyi9wi5qzznm9ep4" class="crayons-icon reaction-icon--like reaction-icon reacted"><title id="akf69xuhqxcur6u1wyi9wi5qzznm9ep4">Favorite heart outline button</title>
    <path d="M5.116 12.595a4.875 4.875 0 015.56-7.68h-.002L7.493 8.098l1.06 1.061 3.181-3.182a4.875 4.875 0 016.895 6.894L12 19.5l-6.894-6.894.01-.01z"></path>
</svg>

    <span class="reactions-count">
      5
    </span>
    <span class="reactions-label hidden m:inline-block">
      &nbsp;likes
    </span>
  </button>

    <a
      class="actions crayons-btn crayons-btn--ghost crayons-btn--s crayons-btn--icon-left toggle-reply-form mr-1 inline-flex"
      href="#/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/new/1e1pc"
      data-comment-id="704378"
      data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e1pc"
      rel="nofollow">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="aci8yyzr6ukbc1xowmaipaqa39yuxt40" class="crayons-icon reaction-icon not-reacted"><title id="aci8yyzr6ukbc1xowmaipaqa39yuxt40">Comment button</title><path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path></svg>

      <span class="hidden m:inline-block">Reply</span>
    </a>

</footer>

  </div>
</div>
    <details class="comment-wrapper js-comment-wrapper comment-wrapper--deep-1 child" open>
      <summary>
        <span class="mx-0 inline-block align-middle">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="a1vz407p65q6phl3lfhywl2hpke6w5x" class="crayons-icon expanded"><title id="a1vz407p65q6phl3lfhywl2hpke6w5x">Collapse</title>
    <path d="M12 10.677L8 6.935 9 6l3 2.807L15 6l1 .935-4 3.742zm0 4.517L9 18l-1-.935 4-3.742 4 3.742-1 .934-3-2.805z"></path>
</svg>

          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="arvqjflg04in5eb5jjiufe9ilk91y8vt" class="crayons-icon collapsed"><title id="arvqjflg04in5eb5jjiufe9ilk91y8vt">Expand</title>
    <path d="M12 18l-4-3.771 1-.943 3 2.829 3-2.829 1 .943L12 18zm0-10.115l-3 2.829-1-.943L12 6l4 3.771-1 .942-3-2.828z"></path>
</svg>

        </span>
        <span class="js-collapse-comment-content inline-block align-middle"></span>
      </summary>
      <div
        id="comment-node-704622"
        class="
          comment single-comment-node

          child
          comment--deep-1

        "
        data-comment-id="704622"
        data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e28m"
        data-comment-author-id="435270"
        data-content-user-id="435270">

<div class="comment__inner">
    <a href="https://dev.to/resourcefulmind" class="shrink-0 crayons-avatar mt-4">
    <img class="crayons-avatar__image" width="32" height="32" src="https://res.cloudinary.com/practicaldev/image/fetch/s--6y949wgP--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/435270/7ca3876e-ca85-478e-a2fa-c634f4a78121.png" alt="resourcefulmind profile image" />
  </a>


  <div class="inner-comment comment__details">
    <div class="comment__content crayons-card">



        <header class="comment__header">
  <a href="https://dev.to/resourcefulmind" class="crayons-link crayons-link--secondary flex items-center fw-medium">
    <span class="js-comment-username">Opeyemi Stephen</span>
      <span class="crayons-tooltip inline-block spec-op-author -mr-2" data-tooltip="Author">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="ajmrxrx4aene9o9thedk419pi54h9pq7" class="crayons-icon"><title id="ajmrxrx4aene9o9thedk419pi54h9pq7">Author</title>
    <path d="M12 8.25a6 6 0 110 12 6 6 0 010-12zm0 2.625l-.992 2.01-2.218.322 1.605 1.564-.379 2.21L12 15.937l1.984 1.043-.379-2.209 1.605-1.564-2.218-.323L12 10.875zm.75-6.376l3.75.001v2.25l-1.022.854a7.45 7.45 0 00-2.728-.817V4.5zm-1.5 0v2.288a7.451 7.451 0 00-2.727.816L7.5 6.75V4.5h3.75z"></path>
</svg>

      </span>
  </a>

  <span class="color-base-30 px-2" role="presentation">&bull;</span>

<a href="https://dev.to/resourcefulmind/comment/1e28m" class="comment-date crayons-link crayons-link--secondary fs-s">
  <time datetime="2021-04-29T16:05:10Z">
    Apr 29
  </time>

</a>


  <div class="comment__dropdown">
    <button class="dropbtn comment__dropdown-trigger crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon" aria-label="Toggle dropdown menu" aria-haspopup="true">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="a5i6any27ywwhjt75ztpo2opx6i2v07e" class="crayons-icon pointer-events-none"><title id="a5i6any27ywwhjt75ztpo2opx6i2v07e">Dropdown menu</title>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.25 12a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm5.25 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm3.75 1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
</svg>

    </button>
    <ul class="crayons-dropdown p-1 right-1 s:right-0 s:left-auto fs-base dropdown">
      <li><a href="https://dev.to/resourcefulmind/comment/1e28m" class="crayons-link crayons-link--block permalink-copybtn" aria-label="Copy link to Opeyemi Stephen's comment" data-no-instant>Copy link</a></li>
      <li class="comment-actions hidden" data-user-id="435270" data-action="settings-button" data-path="https://dev.to/resourcefulmind/comment/1e28m/settings" aria-label="Go to Opeyemi Stephen's comment settings"></li>
      <li class="comment-actions hidden" data-action="hide-button" data-commentable-user-id="435270" data-user-id="435270">
        <a href="#" class="crayons-link crayons-link--block hide-comment" data-hide-type="hide" data-comment-id="704622" aria-label="Hide Opeyemi Stephen's comment">
          Hide
        </a>
      </li>
      <li class="mod-actions hidden mod-actions-comment-button" data-path="https://dev.to/resourcefulmind/comment/1e28m/mod" aria-label="Moderate Opeyemi Stephen's comment"></li>
      <li class="report-abuse-link-wrapper" data-path="/report-abuse?url=https://dev.to/resourcefulmind/comment/1e28m" aria-label="Report Opeyemi Stephen's comment as abusive or violating our code of conduct and/or terms and conditions"></li>
      <li class="current-user-actions"></li>
    </ul>
  </div>
</header>


        <div
          class="
            comment__body
            text-styles
            text-styles--secondary
            body

          ">
          <p>I don’t know how to answer this. Let me put it this way, there is freedom of speech, however, freedom AFTER speech is what isn’t guaranteed over here.</p>

<p>I’ll implore your to do some research about the protests led by the youth back in October 2020. We made our voices heard but look how that turned out? It just might send chills down your spine.</p>

<p>In fairness, a lot of senior developers here in Nigeria and all around Africa are organizing programs and boot camps so there’s that. As for setting up the charity, I am open to working with you on that and setting up a team to make this happen! It would mean a lot. </p>

<p>How soon can we start making this idea a reality?</p>


        </div>
    </div>

    <footer class="comment__footer print-hidden">
  <button
    class="crayons-btn crayons-btn--ghost crayons-btn--icon-left crayons-btn--s mr-1 reaction-like inline-flex reaction-button"
    id="button-for-comment-704622"
    data-comment-id="704622"
    title="heart">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="aflyg5scvxaq53ga34icorueygzrdgb4" class="crayons-icon reaction-icon not-reacted"><title id="aflyg5scvxaq53ga34icorueygzrdgb4">Favorite heart outline button</title><path d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"></path></svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="ad0zt2ys6z3f507vkhqv3juypwsnfq54" class="crayons-icon reaction-icon--like reaction-icon reacted"><title id="ad0zt2ys6z3f507vkhqv3juypwsnfq54">Favorite heart outline button</title>
    <path d="M5.116 12.595a4.875 4.875 0 015.56-7.68h-.002L7.493 8.098l1.06 1.061 3.181-3.182a4.875 4.875 0 016.895 6.894L12 19.5l-6.894-6.894.01-.01z"></path>
</svg>

    <span class="reactions-count">
      6
    </span>
    <span class="reactions-label hidden m:inline-block">
      &nbsp;likes
    </span>
  </button>

    <a
      class="actions crayons-btn crayons-btn--ghost crayons-btn--s crayons-btn--icon-left toggle-reply-form mr-1 inline-flex"
      href="#/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/new/1e28m"
      data-comment-id="704622"
      data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e28m"
      rel="nofollow">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="anoje9g8rfi418uwssiw3h5z79kasqs6" class="crayons-icon reaction-icon not-reacted"><title id="anoje9g8rfi418uwssiw3h5z79kasqs6">Comment button</title><path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path></svg>

      <span class="hidden m:inline-block">Reply</span>
    </a>

</footer>

  </div>
</div>


      </div>
    </details>
    <details class="comment-wrapper js-comment-wrapper comment-wrapper--deep-1 child" open>
      <summary>
        <span class="mx-0 inline-block align-middle">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="arggt7wcmwnren9knubrhs9lga2nc5k0" class="crayons-icon expanded"><title id="arggt7wcmwnren9knubrhs9lga2nc5k0">Collapse</title>
    <path d="M12 10.677L8 6.935 9 6l3 2.807L15 6l1 .935-4 3.742zm0 4.517L9 18l-1-.935 4-3.742 4 3.742-1 .934-3-2.805z"></path>
</svg>

          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="acrb3xq88skzcncdz2wv7s93wo3agmhz" class="crayons-icon collapsed"><title id="acrb3xq88skzcncdz2wv7s93wo3agmhz">Expand</title>
    <path d="M12 18l-4-3.771 1-.943 3 2.829 3-2.829 1 .943L12 18zm0-10.115l-3 2.829-1-.943L12 6l4 3.771-1 .942-3-2.828z"></path>
</svg>

        </span>
        <span class="js-collapse-comment-content inline-block align-middle"></span>
      </summary>
      <div
        id="comment-node-704628"
        class="
          comment single-comment-node

          child
          comment--deep-1

        "
        data-comment-id="704628"
        data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e292"
        data-comment-author-id="435270"
        data-content-user-id="435270">

<div class="comment__inner">
    <a href="https://dev.to/resourcefulmind" class="shrink-0 crayons-avatar mt-4">
    <img class="crayons-avatar__image" width="32" height="32" src="https://res.cloudinary.com/practicaldev/image/fetch/s--6y949wgP--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/435270/7ca3876e-ca85-478e-a2fa-c634f4a78121.png" alt="resourcefulmind profile image" />
  </a>


  <div class="inner-comment comment__details">
    <div class="comment__content crayons-card">



        <header class="comment__header">
  <a href="https://dev.to/resourcefulmind" class="crayons-link crayons-link--secondary flex items-center fw-medium">
    <span class="js-comment-username">Opeyemi Stephen</span>
      <span class="crayons-tooltip inline-block spec-op-author -mr-2" data-tooltip="Author">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="aiu5mrerdf0dvvm7cut7m2yayvi31g1t" class="crayons-icon"><title id="aiu5mrerdf0dvvm7cut7m2yayvi31g1t">Author</title>
    <path d="M12 8.25a6 6 0 110 12 6 6 0 010-12zm0 2.625l-.992 2.01-2.218.322 1.605 1.564-.379 2.21L12 15.937l1.984 1.043-.379-2.209 1.605-1.564-2.218-.323L12 10.875zm.75-6.376l3.75.001v2.25l-1.022.854a7.45 7.45 0 00-2.728-.817V4.5zm-1.5 0v2.288a7.451 7.451 0 00-2.727.816L7.5 6.75V4.5h3.75z"></path>
</svg>

      </span>
  </a>

  <span class="color-base-30 px-2" role="presentation">&bull;</span>

<a href="https://dev.to/resourcefulmind/comment/1e292" class="comment-date crayons-link crayons-link--secondary fs-s">
  <time datetime="2021-04-29T16:12:17Z">
    Apr 29
  </time>

</a>


  <div class="comment__dropdown">
    <button class="dropbtn comment__dropdown-trigger crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon" aria-label="Toggle dropdown menu" aria-haspopup="true">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="ao089pnqnri5lzvm483q6jyj55kktf7b" class="crayons-icon pointer-events-none"><title id="ao089pnqnri5lzvm483q6jyj55kktf7b">Dropdown menu</title>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.25 12a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm5.25 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm3.75 1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
</svg>

    </button>
    <ul class="crayons-dropdown p-1 right-1 s:right-0 s:left-auto fs-base dropdown">
      <li><a href="https://dev.to/resourcefulmind/comment/1e292" class="crayons-link crayons-link--block permalink-copybtn" aria-label="Copy link to Opeyemi Stephen's comment" data-no-instant>Copy link</a></li>
      <li class="comment-actions hidden" data-user-id="435270" data-action="settings-button" data-path="https://dev.to/resourcefulmind/comment/1e292/settings" aria-label="Go to Opeyemi Stephen's comment settings"></li>
      <li class="comment-actions hidden" data-action="hide-button" data-commentable-user-id="435270" data-user-id="435270">
        <a href="#" class="crayons-link crayons-link--block hide-comment" data-hide-type="hide" data-comment-id="704628" aria-label="Hide Opeyemi Stephen's comment">
          Hide
        </a>
      </li>
      <li class="mod-actions hidden mod-actions-comment-button" data-path="https://dev.to/resourcefulmind/comment/1e292/mod" aria-label="Moderate Opeyemi Stephen's comment"></li>
      <li class="report-abuse-link-wrapper" data-path="/report-abuse?url=https://dev.to/resourcefulmind/comment/1e292" aria-label="Report Opeyemi Stephen's comment as abusive or violating our code of conduct and/or terms and conditions"></li>
      <li class="current-user-actions"></li>
    </ul>
  </div>
</header>


        <div
          class="
            comment__body
            text-styles
            text-styles--secondary
            body

          ">
          <p>And ohhh yeah, there’s someone who has been doing this for a few years on Twitter now, you can find his handle <a class="mentioned-user" href="https://dev.to/hacksultan">@hacksultan</a>
 . He knows about things like aiding aspiring developers with laptops and even has a programme called DevCareers and Laptop for Developers</p>


        </div>
    </div>

    <footer class="comment__footer print-hidden">
  <button
    class="crayons-btn crayons-btn--ghost crayons-btn--icon-left crayons-btn--s mr-1 reaction-like inline-flex reaction-button"
    id="button-for-comment-704628"
    data-comment-id="704628"
    title="heart">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="aayv1t60een5xxorh2mn5gj9gnezf36o" class="crayons-icon reaction-icon not-reacted"><title id="aayv1t60een5xxorh2mn5gj9gnezf36o">Favorite heart outline button</title><path d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"></path></svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="akgq8sq4ebevwd2cwlrx7v1v6vkapam6" class="crayons-icon reaction-icon--like reaction-icon reacted"><title id="akgq8sq4ebevwd2cwlrx7v1v6vkapam6">Favorite heart outline button</title>
    <path d="M5.116 12.595a4.875 4.875 0 015.56-7.68h-.002L7.493 8.098l1.06 1.061 3.181-3.182a4.875 4.875 0 016.895 6.894L12 19.5l-6.894-6.894.01-.01z"></path>
</svg>

    <span class="reactions-count">
      6
    </span>
    <span class="reactions-label hidden m:inline-block">
      &nbsp;likes
    </span>
  </button>

    <a
      class="actions crayons-btn crayons-btn--ghost crayons-btn--s crayons-btn--icon-left toggle-reply-form mr-1 inline-flex"
      href="#/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/new/1e292"
      data-comment-id="704628"
      data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e292"
      rel="nofollow">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="apmu4go6fx7lx6k10wle3tjtw0pbhwot" class="crayons-icon reaction-icon not-reacted"><title id="apmu4go6fx7lx6k10wle3tjtw0pbhwot">Comment button</title><path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path></svg>

      <span class="hidden m:inline-block">Reply</span>
    </a>

</footer>

  </div>
</div>


      </div>
    </details>


      </div>
    </details>

                    <details class="comment-wrapper js-comment-wrapper comment-wrapper--deep-0 root" open>
      <summary>
        <span class="m:mx-1 inline-block align-middle">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="ai57yij89kg1d72gqqltpr450nkmoiiu" class="crayons-icon expanded"><title id="ai57yij89kg1d72gqqltpr450nkmoiiu">Collapse</title>
    <path d="M12 10.677L8 6.935 9 6l3 2.807L15 6l1 .935-4 3.742zm0 4.517L9 18l-1-.935 4-3.742 4 3.742-1 .934-3-2.805z"></path>
</svg>

          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="aei0ekg0zym5z2khllglqpxm2h5225xp" class="crayons-icon collapsed"><title id="aei0ekg0zym5z2khllglqpxm2h5225xp">Expand</title>
    <path d="M12 18l-4-3.771 1-.943 3 2.829 3-2.829 1 .943L12 18zm0-10.115l-3 2.829-1-.943L12 6l4 3.771-1 .942-3-2.828z"></path>
</svg>

        </span>
        <span class="js-collapse-comment-content inline-block align-middle"></span>
      </summary>
      <div
        id="comment-node-704857"
        class="
          comment single-comment-node

          root
          comment--deep-0

        "
        data-comment-id="704857"
        data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e2hn"
        data-comment-author-id="553089"
        data-content-user-id="553089">

<div class="comment__inner">
    <a href="https://dev.to/alohacodes" class="shrink-0 crayons-avatar m:crayons-avatar--l mt-4 m:mt-3">
    <img class="crayons-avatar__image" width="32" height="32" src="https://res.cloudinary.com/practicaldev/image/fetch/s--rIJsafR1--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/553089/73886331-59c0-4511-b382-931d8b27896c.png" alt="alohacodes profile image" />
  </a>


  <div class="inner-comment comment__details">
    <div class="comment__content crayons-card">



        <header class="comment__header">
  <a href="https://dev.to/alohacodes" class="crayons-link crayons-link--secondary flex items-center fw-medium">
    <span class="js-comment-username">AlohaCodes</span>
  </a>

  <span class="color-base-30 px-2" role="presentation">&bull;</span>

<a href="https://dev.to/alohacodes/comment/1e2hn" class="comment-date crayons-link crayons-link--secondary fs-s">
  <time datetime="2021-04-30T04:01:28Z">
    Apr 30
  </time>

</a>


  <div class="comment__dropdown">
    <button class="dropbtn comment__dropdown-trigger crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon" aria-label="Toggle dropdown menu" aria-haspopup="true">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="aky39564s3rjaeudcb4vrl7xonz1qzxs" class="crayons-icon pointer-events-none"><title id="aky39564s3rjaeudcb4vrl7xonz1qzxs">Dropdown menu</title>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.25 12a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm5.25 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm3.75 1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
</svg>

    </button>
    <ul class="crayons-dropdown p-1 right-1 s:right-0 s:left-auto fs-base dropdown">
      <li><a href="https://dev.to/alohacodes/comment/1e2hn" class="crayons-link crayons-link--block permalink-copybtn" aria-label="Copy link to AlohaCodes's comment" data-no-instant>Copy link</a></li>
      <li class="comment-actions hidden" data-user-id="553089" data-action="settings-button" data-path="https://dev.to/alohacodes/comment/1e2hn/settings" aria-label="Go to AlohaCodes's comment settings"></li>
      <li class="comment-actions hidden" data-action="hide-button" data-commentable-user-id="435270" data-user-id="553089">
        <a href="#" class="crayons-link crayons-link--block hide-comment" data-hide-type="hide" data-comment-id="704857" aria-label="Hide AlohaCodes's comment">
          Hide
        </a>
      </li>
      <li class="mod-actions hidden mod-actions-comment-button" data-path="https://dev.to/alohacodes/comment/1e2hn/mod" aria-label="Moderate AlohaCodes's comment"></li>
      <li class="report-abuse-link-wrapper" data-path="/report-abuse?url=https://dev.to/alohacodes/comment/1e2hn" aria-label="Report AlohaCodes's comment as abusive or violating our code of conduct and/or terms and conditions"></li>
      <li class="current-user-actions"></li>
    </ul>
  </div>
</header>


        <div
          class="
            comment__body
            text-styles
            text-styles--secondary
            body

          ">
          <p>The issue of having access to the internet and constant electricity is the major issue. I don't think of how much I spend on data anymore! I just wanna learn and move up the ladder! <br>
Thank you Opeyemi for touching that topic nobody wants to talk about. </p>


        </div>
    </div>

    <footer class="comment__footer print-hidden">
  <button
    class="crayons-btn crayons-btn--ghost crayons-btn--icon-left crayons-btn--s mr-1 reaction-like inline-flex reaction-button"
    id="button-for-comment-704857"
    data-comment-id="704857"
    title="heart">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="asbsh7vtlfhvnhsavaoykt13b86w1o0p" class="crayons-icon reaction-icon not-reacted"><title id="asbsh7vtlfhvnhsavaoykt13b86w1o0p">Favorite heart outline button</title><path d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"></path></svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="a6wwd3sbfgki1ool4mcnp6dc9bsu74za" class="crayons-icon reaction-icon--like reaction-icon reacted"><title id="a6wwd3sbfgki1ool4mcnp6dc9bsu74za">Favorite heart outline button</title>
    <path d="M5.116 12.595a4.875 4.875 0 015.56-7.68h-.002L7.493 8.098l1.06 1.061 3.181-3.182a4.875 4.875 0 016.895 6.894L12 19.5l-6.894-6.894.01-.01z"></path>
</svg>

    <span class="reactions-count">
      5
    </span>
    <span class="reactions-label hidden m:inline-block">
      &nbsp;likes
    </span>
  </button>

    <a
      class="actions crayons-btn crayons-btn--ghost crayons-btn--s crayons-btn--icon-left toggle-reply-form mr-1 inline-flex"
      href="#/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/new/1e2hn"
      data-comment-id="704857"
      data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e2hn"
      rel="nofollow">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="a2g61tqtd2suvrrme1m0cnbbatkgabpm" class="crayons-icon reaction-icon not-reacted"><title id="a2g61tqtd2suvrrme1m0cnbbatkgabpm">Comment button</title><path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path></svg>

      <span class="hidden m:inline-block">Reply</span>
    </a>

</footer>

  </div>
</div>
    <details class="comment-wrapper js-comment-wrapper comment-wrapper--deep-1 child" open>
      <summary>
        <span class="mx-0 inline-block align-middle">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="a3fc74zjprze8rytw65l4wv0x5dq2bkq" class="crayons-icon expanded"><title id="a3fc74zjprze8rytw65l4wv0x5dq2bkq">Collapse</title>
    <path d="M12 10.677L8 6.935 9 6l3 2.807L15 6l1 .935-4 3.742zm0 4.517L9 18l-1-.935 4-3.742 4 3.742-1 .934-3-2.805z"></path>
</svg>

          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="a3kc2h8y8bcvdqj5ivm8p7te4j1gsztx" class="crayons-icon collapsed"><title id="a3kc2h8y8bcvdqj5ivm8p7te4j1gsztx">Expand</title>
    <path d="M12 18l-4-3.771 1-.943 3 2.829 3-2.829 1 .943L12 18zm0-10.115l-3 2.829-1-.943L12 6l4 3.771-1 .942-3-2.828z"></path>
</svg>

        </span>
        <span class="js-collapse-comment-content inline-block align-middle"></span>
      </summary>
      <div
        id="comment-node-704895"
        class="
          comment single-comment-node

          child
          comment--deep-1

        "
        data-comment-id="704895"
        data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e2j9"
        data-comment-author-id="435270"
        data-content-user-id="435270">

<div class="comment__inner">
    <a href="https://dev.to/resourcefulmind" class="shrink-0 crayons-avatar mt-4">
    <img class="crayons-avatar__image" width="32" height="32" src="https://res.cloudinary.com/practicaldev/image/fetch/s--6y949wgP--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/435270/7ca3876e-ca85-478e-a2fa-c634f4a78121.png" alt="resourcefulmind profile image" />
  </a>


  <div class="inner-comment comment__details">
    <div class="comment__content crayons-card">



        <header class="comment__header">
  <a href="https://dev.to/resourcefulmind" class="crayons-link crayons-link--secondary flex items-center fw-medium">
    <span class="js-comment-username">Opeyemi Stephen</span>
      <span class="crayons-tooltip inline-block spec-op-author -mr-2" data-tooltip="Author">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="akkjhld3ka1ahokv2i1yzqeqsikdte2n" class="crayons-icon"><title id="akkjhld3ka1ahokv2i1yzqeqsikdte2n">Author</title>
    <path d="M12 8.25a6 6 0 110 12 6 6 0 010-12zm0 2.625l-.992 2.01-2.218.322 1.605 1.564-.379 2.21L12 15.937l1.984 1.043-.379-2.209 1.605-1.564-2.218-.323L12 10.875zm.75-6.376l3.75.001v2.25l-1.022.854a7.45 7.45 0 00-2.728-.817V4.5zm-1.5 0v2.288a7.451 7.451 0 00-2.727.816L7.5 6.75V4.5h3.75z"></path>
</svg>

      </span>
  </a>

  <span class="color-base-30 px-2" role="presentation">&bull;</span>

<a href="https://dev.to/resourcefulmind/comment/1e2j9" class="comment-date crayons-link crayons-link--secondary fs-s">
  <time datetime="2021-04-30T06:10:15Z">
    Apr 30
  </time>

</a>


  <div class="comment__dropdown">
    <button class="dropbtn comment__dropdown-trigger crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon" aria-label="Toggle dropdown menu" aria-haspopup="true">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="apbs1qgo8k38xtwioddtrkbwq1pxj40c" class="crayons-icon pointer-events-none"><title id="apbs1qgo8k38xtwioddtrkbwq1pxj40c">Dropdown menu</title>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.25 12a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm5.25 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm3.75 1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
</svg>

    </button>
    <ul class="crayons-dropdown p-1 right-1 s:right-0 s:left-auto fs-base dropdown">
      <li><a href="https://dev.to/resourcefulmind/comment/1e2j9" class="crayons-link crayons-link--block permalink-copybtn" aria-label="Copy link to Opeyemi Stephen's comment" data-no-instant>Copy link</a></li>
      <li class="comment-actions hidden" data-user-id="435270" data-action="settings-button" data-path="https://dev.to/resourcefulmind/comment/1e2j9/settings" aria-label="Go to Opeyemi Stephen's comment settings"></li>
      <li class="comment-actions hidden" data-action="hide-button" data-commentable-user-id="435270" data-user-id="435270">
        <a href="#" class="crayons-link crayons-link--block hide-comment" data-hide-type="hide" data-comment-id="704895" aria-label="Hide Opeyemi Stephen's comment">
          Hide
        </a>
      </li>
      <li class="mod-actions hidden mod-actions-comment-button" data-path="https://dev.to/resourcefulmind/comment/1e2j9/mod" aria-label="Moderate Opeyemi Stephen's comment"></li>
      <li class="report-abuse-link-wrapper" data-path="/report-abuse?url=https://dev.to/resourcefulmind/comment/1e2j9" aria-label="Report Opeyemi Stephen's comment as abusive or violating our code of conduct and/or terms and conditions"></li>
      <li class="current-user-actions"></li>
    </ul>
  </div>
</header>


        <div
          class="
            comment__body
            text-styles
            text-styles--secondary
            body

          ">
          <p>You’re welcome anytime. I hope things change for the better though.</p>


        </div>
    </div>

    <footer class="comment__footer print-hidden">
  <button
    class="crayons-btn crayons-btn--ghost crayons-btn--icon-left crayons-btn--s mr-1 reaction-like inline-flex reaction-button"
    id="button-for-comment-704895"
    data-comment-id="704895"
    title="heart">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="a3u4tnissnb0zx70dgkqmdubd12sv0th" class="crayons-icon reaction-icon not-reacted"><title id="a3u4tnissnb0zx70dgkqmdubd12sv0th">Favorite heart outline button</title><path d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"></path></svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="a23nj1yy11ocr9a0qwtstjsyp6hcbyv2" class="crayons-icon reaction-icon--like reaction-icon reacted"><title id="a23nj1yy11ocr9a0qwtstjsyp6hcbyv2">Favorite heart outline button</title>
    <path d="M5.116 12.595a4.875 4.875 0 015.56-7.68h-.002L7.493 8.098l1.06 1.061 3.181-3.182a4.875 4.875 0 016.895 6.894L12 19.5l-6.894-6.894.01-.01z"></path>
</svg>

    <span class="reactions-count">
      3
    </span>
    <span class="reactions-label hidden m:inline-block">
      &nbsp;likes
    </span>
  </button>

    <a
      class="actions crayons-btn crayons-btn--ghost crayons-btn--s crayons-btn--icon-left toggle-reply-form mr-1 inline-flex"
      href="#/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/new/1e2j9"
      data-comment-id="704895"
      data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e2j9"
      rel="nofollow">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="acx8k4pifmm0grvpdv6k6pgshvrroloc" class="crayons-icon reaction-icon not-reacted"><title id="acx8k4pifmm0grvpdv6k6pgshvrroloc">Comment button</title><path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path></svg>

      <span class="hidden m:inline-block">Reply</span>
    </a>

</footer>

  </div>
</div>


      </div>
    </details>


      </div>
    </details>

                    <details class="comment-wrapper js-comment-wrapper comment-wrapper--deep-0 root" open>
      <summary>
        <span class="m:mx-1 inline-block align-middle">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="akfiq78i3v01dsxjxqiosboxtl57mgko" class="crayons-icon expanded"><title id="akfiq78i3v01dsxjxqiosboxtl57mgko">Collapse</title>
    <path d="M12 10.677L8 6.935 9 6l3 2.807L15 6l1 .935-4 3.742zm0 4.517L9 18l-1-.935 4-3.742 4 3.742-1 .934-3-2.805z"></path>
</svg>

          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="a4twvxcenrnguo2fxxa58erlni61ew2i" class="crayons-icon collapsed"><title id="a4twvxcenrnguo2fxxa58erlni61ew2i">Expand</title>
    <path d="M12 18l-4-3.771 1-.943 3 2.829 3-2.829 1 .943L12 18zm0-10.115l-3 2.829-1-.943L12 6l4 3.771-1 .942-3-2.828z"></path>
</svg>

        </span>
        <span class="js-collapse-comment-content inline-block align-middle"></span>
      </summary>
      <div
        id="comment-node-705507"
        class="
          comment single-comment-node

          root
          comment--deep-0

        "
        data-comment-id="705507"
        data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e3gn"
        data-comment-author-id="314200"
        data-content-user-id="314200">

<div class="comment__inner">
    <a href="https://dev.to/tawalmc" class="shrink-0 crayons-avatar m:crayons-avatar--l mt-4 m:mt-3">
    <img class="crayons-avatar__image" width="32" height="32" src="https://res.cloudinary.com/practicaldev/image/fetch/s--6TZtv7Zq--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/314200/20a551ee-b2ba-491d-8224-a8581113601f.png" alt="tawalmc profile image" />
  </a>


  <div class="inner-comment comment__details">
    <div class="comment__content crayons-card">



        <header class="comment__header">
  <a href="https://dev.to/tawalmc" class="crayons-link crayons-link--secondary flex items-center fw-medium">
    <span class="js-comment-username">TawalMc</span>
  </a>

  <span class="color-base-30 px-2" role="presentation">&bull;</span>

<a href="https://dev.to/tawalmc/comment/1e3gn" class="comment-date crayons-link crayons-link--secondary fs-s">
  <time datetime="2021-05-01T08:07:17Z">
    May 1
  </time>

</a>


  <div class="comment__dropdown">
    <button class="dropbtn comment__dropdown-trigger crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon" aria-label="Toggle dropdown menu" aria-haspopup="true">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="ai5kkddh6jxp8woeszxw4qr7skvv4xgo" class="crayons-icon pointer-events-none"><title id="ai5kkddh6jxp8woeszxw4qr7skvv4xgo">Dropdown menu</title>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.25 12a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm5.25 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm3.75 1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
</svg>

    </button>
    <ul class="crayons-dropdown p-1 right-1 s:right-0 s:left-auto fs-base dropdown">
      <li><a href="https://dev.to/tawalmc/comment/1e3gn" class="crayons-link crayons-link--block permalink-copybtn" aria-label="Copy link to TawalMc's comment" data-no-instant>Copy link</a></li>
      <li class="comment-actions hidden" data-user-id="314200" data-action="settings-button" data-path="https://dev.to/tawalmc/comment/1e3gn/settings" aria-label="Go to TawalMc's comment settings"></li>
      <li class="comment-actions hidden" data-action="hide-button" data-commentable-user-id="435270" data-user-id="314200">
        <a href="#" class="crayons-link crayons-link--block hide-comment" data-hide-type="hide" data-comment-id="705507" aria-label="Hide TawalMc's comment">
          Hide
        </a>
      </li>
      <li class="mod-actions hidden mod-actions-comment-button" data-path="https://dev.to/tawalmc/comment/1e3gn/mod" aria-label="Moderate TawalMc's comment"></li>
      <li class="report-abuse-link-wrapper" data-path="/report-abuse?url=https://dev.to/tawalmc/comment/1e3gn" aria-label="Report TawalMc's comment as abusive or violating our code of conduct and/or terms and conditions"></li>
      <li class="current-user-actions"></li>
    </ul>
  </div>
</header>


        <div
          class="
            comment__body
            text-styles
            text-styles--secondary
            body

          ">
          <p>May God help you and Nigeria Dev. I think that my situation at Benin is nothing compare to what you're living. I don't so have a reason to discourage. <br>
Try to be strong, archive you goal and perhaps help next generation on newbies of Nigeria.</p>


        </div>
    </div>

    <footer class="comment__footer print-hidden">
  <button
    class="crayons-btn crayons-btn--ghost crayons-btn--icon-left crayons-btn--s mr-1 reaction-like inline-flex reaction-button"
    id="button-for-comment-705507"
    data-comment-id="705507"
    title="heart">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="ao0io4zsdgyi2s6pugao6r9ng4lyjh6k" class="crayons-icon reaction-icon not-reacted"><title id="ao0io4zsdgyi2s6pugao6r9ng4lyjh6k">Favorite heart outline button</title><path d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"></path></svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="a4q6rd7u5ajcuvjwmcg11xw6p1uqcgaw" class="crayons-icon reaction-icon--like reaction-icon reacted"><title id="a4q6rd7u5ajcuvjwmcg11xw6p1uqcgaw">Favorite heart outline button</title>
    <path d="M5.116 12.595a4.875 4.875 0 015.56-7.68h-.002L7.493 8.098l1.06 1.061 3.181-3.182a4.875 4.875 0 016.895 6.894L12 19.5l-6.894-6.894.01-.01z"></path>
</svg>

    <span class="reactions-count">
      3
    </span>
    <span class="reactions-label hidden m:inline-block">
      &nbsp;likes
    </span>
  </button>

    <a
      class="actions crayons-btn crayons-btn--ghost crayons-btn--s crayons-btn--icon-left toggle-reply-form mr-1 inline-flex"
      href="#/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/new/1e3gn"
      data-comment-id="705507"
      data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e3gn"
      rel="nofollow">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="a3m1wz2pmjmk1kiexvm9dwjhcoltqz3o" class="crayons-icon reaction-icon not-reacted"><title id="a3m1wz2pmjmk1kiexvm9dwjhcoltqz3o">Comment button</title><path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path></svg>

      <span class="hidden m:inline-block">Reply</span>
    </a>

</footer>

  </div>
</div>
    <details class="comment-wrapper js-comment-wrapper comment-wrapper--deep-1 child" open>
      <summary>
        <span class="mx-0 inline-block align-middle">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="akv3w02pvm2o1nketgn4xlo6wlklnnxk" class="crayons-icon expanded"><title id="akv3w02pvm2o1nketgn4xlo6wlklnnxk">Collapse</title>
    <path d="M12 10.677L8 6.935 9 6l3 2.807L15 6l1 .935-4 3.742zm0 4.517L9 18l-1-.935 4-3.742 4 3.742-1 .934-3-2.805z"></path>
</svg>

          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="ai6zpqrdheat4dwki0y8at06nc834lns" class="crayons-icon collapsed"><title id="ai6zpqrdheat4dwki0y8at06nc834lns">Expand</title>
    <path d="M12 18l-4-3.771 1-.943 3 2.829 3-2.829 1 .943L12 18zm0-10.115l-3 2.829-1-.943L12 6l4 3.771-1 .942-3-2.828z"></path>
</svg>

        </span>
        <span class="js-collapse-comment-content inline-block align-middle"></span>
      </summary>
      <div
        id="comment-node-707287"
        class="
          comment single-comment-node

          child
          comment--deep-1

        "
        data-comment-id="707287"
        data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e679"
        data-comment-author-id="101184"
        data-content-user-id="101184">

<div class="comment__inner">
    <a href="https://dev.to/manuelbalogun" class="shrink-0 crayons-avatar mt-4">
    <img class="crayons-avatar__image" width="32" height="32" src="https://res.cloudinary.com/practicaldev/image/fetch/s--iU43p_t5--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/101184/c8ee25a5-29ae-46f5-9ef4-3f6cc0835af3.jpeg" alt="manuelbalogun profile image" />
  </a>


  <div class="inner-comment comment__details">
    <div class="comment__content crayons-card">



        <header class="comment__header">
  <a href="https://dev.to/manuelbalogun" class="crayons-link crayons-link--secondary flex items-center fw-medium">
    <span class="js-comment-username">Ayodeji Balogun</span>
  </a>

  <span class="color-base-30 px-2" role="presentation">&bull;</span>

<a href="https://dev.to/manuelbalogun/comment/1e679" class="comment-date crayons-link crayons-link--secondary fs-s">
  <time datetime="2021-05-04T18:42:27Z">
    May 4
  </time>

</a>


  <div class="comment__dropdown">
    <button class="dropbtn comment__dropdown-trigger crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon" aria-label="Toggle dropdown menu" aria-haspopup="true">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="apgk1uz1r3prevmreq0xy604zdnmvsye" class="crayons-icon pointer-events-none"><title id="apgk1uz1r3prevmreq0xy604zdnmvsye">Dropdown menu</title>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.25 12a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm5.25 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm3.75 1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
</svg>

    </button>
    <ul class="crayons-dropdown p-1 right-1 s:right-0 s:left-auto fs-base dropdown">
      <li><a href="https://dev.to/manuelbalogun/comment/1e679" class="crayons-link crayons-link--block permalink-copybtn" aria-label="Copy link to Ayodeji Balogun's comment" data-no-instant>Copy link</a></li>
      <li class="comment-actions hidden" data-user-id="101184" data-action="settings-button" data-path="https://dev.to/manuelbalogun/comment/1e679/settings" aria-label="Go to Ayodeji Balogun's comment settings"></li>
      <li class="comment-actions hidden" data-action="hide-button" data-commentable-user-id="435270" data-user-id="101184">
        <a href="#" class="crayons-link crayons-link--block hide-comment" data-hide-type="hide" data-comment-id="707287" aria-label="Hide Ayodeji Balogun's comment">
          Hide
        </a>
      </li>
      <li class="mod-actions hidden mod-actions-comment-button" data-path="https://dev.to/manuelbalogun/comment/1e679/mod" aria-label="Moderate Ayodeji Balogun's comment"></li>
      <li class="report-abuse-link-wrapper" data-path="/report-abuse?url=https://dev.to/manuelbalogun/comment/1e679" aria-label="Report Ayodeji Balogun's comment as abusive or violating our code of conduct and/or terms and conditions"></li>
      <li class="current-user-actions"></li>
    </ul>
  </div>
</header>


        <div
          class="
            comment__body
            text-styles
            text-styles--secondary
            body

          ">
          <p>Just curious, how are the electricity and internet situations in Benin Republic? Thanks.</p>


        </div>
    </div>

    <footer class="comment__footer print-hidden">
  <button
    class="crayons-btn crayons-btn--ghost crayons-btn--icon-left crayons-btn--s mr-1 reaction-like inline-flex reaction-button"
    id="button-for-comment-707287"
    data-comment-id="707287"
    title="heart">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="a70jo6gfq80rzb2qw4g7yqdporunu3d2" class="crayons-icon reaction-icon not-reacted"><title id="a70jo6gfq80rzb2qw4g7yqdporunu3d2">Favorite heart outline button</title><path d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"></path></svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="agb9lamdsyqwm30c13zjbt3eaxnjhfd4" class="crayons-icon reaction-icon--like reaction-icon reacted"><title id="agb9lamdsyqwm30c13zjbt3eaxnjhfd4">Favorite heart outline button</title>
    <path d="M5.116 12.595a4.875 4.875 0 015.56-7.68h-.002L7.493 8.098l1.06 1.061 3.181-3.182a4.875 4.875 0 016.895 6.894L12 19.5l-6.894-6.894.01-.01z"></path>
</svg>

    <span class="reactions-count">
      1
    </span>
    <span class="reactions-label hidden m:inline-block">
      &nbsp;like
    </span>
  </button>

    <a
      class="actions crayons-btn crayons-btn--ghost crayons-btn--s crayons-btn--icon-left toggle-reply-form mr-1 inline-flex"
      href="#/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/new/1e679"
      data-comment-id="707287"
      data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e679"
      rel="nofollow">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="ab630ff5i718xjsgl6wwjmh9wh3kcozx" class="crayons-icon reaction-icon not-reacted"><title id="ab630ff5i718xjsgl6wwjmh9wh3kcozx">Comment button</title><path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path></svg>

      <span class="hidden m:inline-block">Reply</span>
    </a>

</footer>

  </div>
</div>
    <details class="comment-wrapper js-comment-wrapper comment-wrapper--deep-2 child" open>
      <summary>
        <span class="mx-0 inline-block align-middle">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="a60lfv8lpn4awaf0nc4sxjd2fpr5d1bk" class="crayons-icon expanded"><title id="a60lfv8lpn4awaf0nc4sxjd2fpr5d1bk">Collapse</title>
    <path d="M12 10.677L8 6.935 9 6l3 2.807L15 6l1 .935-4 3.742zm0 4.517L9 18l-1-.935 4-3.742 4 3.742-1 .934-3-2.805z"></path>
</svg>

          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="ar1uypqxgb2p9p94oq8pzsca0qwvgwu6" class="crayons-icon collapsed"><title id="ar1uypqxgb2p9p94oq8pzsca0qwvgwu6">Expand</title>
    <path d="M12 18l-4-3.771 1-.943 3 2.829 3-2.829 1 .943L12 18zm0-10.115l-3 2.829-1-.943L12 6l4 3.771-1 .942-3-2.828z"></path>
</svg>

        </span>
        <span class="js-collapse-comment-content inline-block align-middle"></span>
      </summary>
      <div
        id="comment-node-707325"
        class="
          comment single-comment-node

          child
          comment--deep-2

        "
        data-comment-id="707325"
        data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e68l"
        data-comment-author-id="314200"
        data-content-user-id="314200">

<div class="comment__inner">
    <a href="https://dev.to/tawalmc" class="shrink-0 crayons-avatar mt-4">
    <img class="crayons-avatar__image" width="32" height="32" src="https://res.cloudinary.com/practicaldev/image/fetch/s--6TZtv7Zq--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/314200/20a551ee-b2ba-491d-8224-a8581113601f.png" alt="tawalmc profile image" />
  </a>


  <div class="inner-comment comment__details">
    <div class="comment__content crayons-card">



        <header class="comment__header">
  <a href="https://dev.to/tawalmc" class="crayons-link crayons-link--secondary flex items-center fw-medium">
    <span class="js-comment-username">TawalMc</span>
  </a>

  <span class="color-base-30 px-2" role="presentation">&bull;</span>

<a href="https://dev.to/tawalmc/comment/1e68l" class="comment-date crayons-link crayons-link--secondary fs-s">
  <time datetime="2021-05-04T19:29:30Z">
    May 4
  </time>

</a>


  <div class="comment__dropdown">
    <button class="dropbtn comment__dropdown-trigger crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon" aria-label="Toggle dropdown menu" aria-haspopup="true">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="a5fn0axng96xhckl6h73ji0e40fvdywp" class="crayons-icon pointer-events-none"><title id="a5fn0axng96xhckl6h73ji0e40fvdywp">Dropdown menu</title>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.25 12a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm5.25 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm3.75 1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
</svg>

    </button>
    <ul class="crayons-dropdown p-1 right-1 s:right-0 s:left-auto fs-base dropdown">
      <li><a href="https://dev.to/tawalmc/comment/1e68l" class="crayons-link crayons-link--block permalink-copybtn" aria-label="Copy link to TawalMc's comment" data-no-instant>Copy link</a></li>
      <li class="comment-actions hidden" data-user-id="314200" data-action="settings-button" data-path="https://dev.to/tawalmc/comment/1e68l/settings" aria-label="Go to TawalMc's comment settings"></li>
      <li class="comment-actions hidden" data-action="hide-button" data-commentable-user-id="435270" data-user-id="314200">
        <a href="#" class="crayons-link crayons-link--block hide-comment" data-hide-type="hide" data-comment-id="707325" aria-label="Hide TawalMc's comment">
          Hide
        </a>
      </li>
      <li class="mod-actions hidden mod-actions-comment-button" data-path="https://dev.to/tawalmc/comment/1e68l/mod" aria-label="Moderate TawalMc's comment"></li>
      <li class="report-abuse-link-wrapper" data-path="/report-abuse?url=https://dev.to/tawalmc/comment/1e68l" aria-label="Report TawalMc's comment as abusive or violating our code of conduct and/or terms and conditions"></li>
      <li class="current-user-actions"></li>
    </ul>
  </div>
</header>


        <div
          class="
            comment__body
            text-styles
            text-styles--secondary
            body

          ">
          <p>With the new government, the access to electricity is easy and less expensive, even of we have often some interruption in a year. For the network it is not so good, expensive and not good in some area . But with friends we buy data for months so we can use to learn online easily. </p>


        </div>
    </div>

    <footer class="comment__footer print-hidden">
  <button
    class="crayons-btn crayons-btn--ghost crayons-btn--icon-left crayons-btn--s mr-1 reaction-like inline-flex reaction-button"
    id="button-for-comment-707325"
    data-comment-id="707325"
    title="heart">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="a9x7vd7jokbh8jaz76wlquw94lygxilp" class="crayons-icon reaction-icon not-reacted"><title id="a9x7vd7jokbh8jaz76wlquw94lygxilp">Favorite heart outline button</title><path d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"></path></svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="akj47ipugzl7hw2nfcd8q7f45crixdc7" class="crayons-icon reaction-icon--like reaction-icon reacted"><title id="akj47ipugzl7hw2nfcd8q7f45crixdc7">Favorite heart outline button</title>
    <path d="M5.116 12.595a4.875 4.875 0 015.56-7.68h-.002L7.493 8.098l1.06 1.061 3.181-3.182a4.875 4.875 0 016.895 6.894L12 19.5l-6.894-6.894.01-.01z"></path>
</svg>

    <span class="reactions-count">
      2
    </span>
    <span class="reactions-label hidden m:inline-block">
      &nbsp;likes
    </span>
  </button>

    <span class="fs-s inline-flex items-center fs-italic color-base-50 pl-1">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="ar55uo7n26qrlfd5fhr2nm5234w3d4zv" class="crayons-icon"><title id="ar55uo7n26qrlfd5fhr2nm5234w3d4zv">Thread</title>
    <path d="M17 13l-5 6-5-6h3.125c0-3.314 2.798-6 6.25-6 .17 0 .34.006.506.02-1.787.904-3.006 2.705-3.006 4.78V13H17z"></path>
</svg>

      Thread
    </span>

</footer>

  </div>
</div>
      <div
        id="comment-node-707358"
        class="
          comment single-comment-node

          child
          comment--deep-3

        "
        data-comment-id="707358"
        data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e6a2"
        data-comment-author-id="101184"
        data-content-user-id="101184">

<div class="comment__inner">
    <a href="https://dev.to/manuelbalogun" class="shrink-0 crayons-avatar mt-4">
    <img class="crayons-avatar__image" width="32" height="32" src="https://res.cloudinary.com/practicaldev/image/fetch/s--iU43p_t5--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/101184/c8ee25a5-29ae-46f5-9ef4-3f6cc0835af3.jpeg" alt="manuelbalogun profile image" />
  </a>


  <div class="inner-comment comment__details">
    <div class="comment__content crayons-card">



        <header class="comment__header">
  <a href="https://dev.to/manuelbalogun" class="crayons-link crayons-link--secondary flex items-center fw-medium">
    <span class="js-comment-username">Ayodeji Balogun</span>
  </a>

  <span class="color-base-30 px-2" role="presentation">&bull;</span>

<a href="https://dev.to/manuelbalogun/comment/1e6a2" class="comment-date crayons-link crayons-link--secondary fs-s">
  <time datetime="2021-05-04T20:57:21Z">
    May 4
  </time>

</a>


  <div class="comment__dropdown">
    <button class="dropbtn comment__dropdown-trigger crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon" aria-label="Toggle dropdown menu" aria-haspopup="true">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="a96bst0vnj5o4nvyz6ane44ijlw6ea79" class="crayons-icon pointer-events-none"><title id="a96bst0vnj5o4nvyz6ane44ijlw6ea79">Dropdown menu</title>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.25 12a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm5.25 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm3.75 1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
</svg>

    </button>
    <ul class="crayons-dropdown p-1 right-1 s:right-0 s:left-auto fs-base dropdown">
      <li><a href="https://dev.to/manuelbalogun/comment/1e6a2" class="crayons-link crayons-link--block permalink-copybtn" aria-label="Copy link to Ayodeji Balogun's comment" data-no-instant>Copy link</a></li>
      <li class="comment-actions hidden" data-user-id="101184" data-action="settings-button" data-path="https://dev.to/manuelbalogun/comment/1e6a2/settings" aria-label="Go to Ayodeji Balogun's comment settings"></li>
      <li class="comment-actions hidden" data-action="hide-button" data-commentable-user-id="435270" data-user-id="101184">
        <a href="#" class="crayons-link crayons-link--block hide-comment" data-hide-type="hide" data-comment-id="707358" aria-label="Hide Ayodeji Balogun's comment">
          Hide
        </a>
      </li>
      <li class="mod-actions hidden mod-actions-comment-button" data-path="https://dev.to/manuelbalogun/comment/1e6a2/mod" aria-label="Moderate Ayodeji Balogun's comment"></li>
      <li class="report-abuse-link-wrapper" data-path="/report-abuse?url=https://dev.to/manuelbalogun/comment/1e6a2" aria-label="Report Ayodeji Balogun's comment as abusive or violating our code of conduct and/or terms and conditions"></li>
      <li class="current-user-actions"></li>
    </ul>
  </div>
</header>


        <div
          class="
            comment__body
            text-styles
            text-styles--secondary
            body

          ">
          <p>Sounds like progress! 💙</p>


        </div>
    </div>

    <footer class="comment__footer print-hidden">
  <button
    class="crayons-btn crayons-btn--ghost crayons-btn--icon-left crayons-btn--s mr-1 reaction-like inline-flex reaction-button"
    id="button-for-comment-707358"
    data-comment-id="707358"
    title="heart">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="a58b4d4yl07u8ep6fceopw3aurdewj6h" class="crayons-icon reaction-icon not-reacted"><title id="a58b4d4yl07u8ep6fceopw3aurdewj6h">Favorite heart outline button</title><path d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"></path></svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="al64k7ib2pknnz6akib3n4b2yfe868fq" class="crayons-icon reaction-icon--like reaction-icon reacted"><title id="al64k7ib2pknnz6akib3n4b2yfe868fq">Favorite heart outline button</title>
    <path d="M5.116 12.595a4.875 4.875 0 015.56-7.68h-.002L7.493 8.098l1.06 1.061 3.181-3.182a4.875 4.875 0 016.895 6.894L12 19.5l-6.894-6.894.01-.01z"></path>
</svg>

    <span class="reactions-count">
      1
    </span>
    <span class="reactions-label hidden m:inline-block">
      &nbsp;like
    </span>
  </button>

    <a
      class="actions crayons-btn crayons-btn--ghost crayons-btn--s crayons-btn--icon-left toggle-reply-form mr-1 inline-flex"
      href="#/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/new/1e6a2"
      data-comment-id="707358"
      data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e6a2"
      rel="nofollow">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="akcfqeon6v0ekokjr324ntp7cdw5sr0f" class="crayons-icon reaction-icon not-reacted"><title id="akcfqeon6v0ekokjr324ntp7cdw5sr0f">Comment button</title><path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path></svg>

      <span class="hidden m:inline-block">Reply</span>
    </a>

</footer>

  </div>
</div>


      </div>


      </div>
    </details>


      </div>
    </details>


      </div>
    </details>

                    <details class="comment-wrapper js-comment-wrapper comment-wrapper--deep-0 root" open>
      <summary>
        <span class="m:mx-1 inline-block align-middle">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="ad1b4kbs6woalg7hnpcnbr5humg9prdf" class="crayons-icon expanded"><title id="ad1b4kbs6woalg7hnpcnbr5humg9prdf">Collapse</title>
    <path d="M12 10.677L8 6.935 9 6l3 2.807L15 6l1 .935-4 3.742zm0 4.517L9 18l-1-.935 4-3.742 4 3.742-1 .934-3-2.805z"></path>
</svg>

          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="anq3z3czrzazlc7kitvjk43tvlg6nleq" class="crayons-icon collapsed"><title id="anq3z3czrzazlc7kitvjk43tvlg6nleq">Expand</title>
    <path d="M12 18l-4-3.771 1-.943 3 2.829 3-2.829 1 .943L12 18zm0-10.115l-3 2.829-1-.943L12 6l4 3.771-1 .942-3-2.828z"></path>
</svg>

        </span>
        <span class="js-collapse-comment-content inline-block align-middle"></span>
      </summary>
      <div
        id="comment-node-707533"
        class="
          comment single-comment-node

          root
          comment--deep-0

        "
        data-comment-id="707533"
        data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e6gl"
        data-comment-author-id="321958"
        data-content-user-id="321958">

<div class="comment__inner">
    <a href="https://dev.to/chie7tain" class="shrink-0 crayons-avatar m:crayons-avatar--l mt-4 m:mt-3">
    <img class="crayons-avatar__image" width="32" height="32" src="https://res.cloudinary.com/practicaldev/image/fetch/s--J6Osnr83--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/321958/518115c4-77c6-458a-aaf7-ac82ddc3a62d.jpeg" alt="chie7tain profile image" />
  </a>


  <div class="inner-comment comment__details">
    <div class="comment__content crayons-card">



        <header class="comment__header">
  <a href="https://dev.to/chie7tain" class="crayons-link crayons-link--secondary flex items-center fw-medium">
    <span class="js-comment-username">Ifeanyi Okwuobi</span>
  </a>

  <span class="color-base-30 px-2" role="presentation">&bull;</span>

<a href="https://dev.to/chie7tain/comment/1e6gl" class="comment-date crayons-link crayons-link--secondary fs-s">
  <time datetime="2021-05-05T07:48:30Z">
    May 5
  </time>

</a>


  <div class="comment__dropdown">
    <button class="dropbtn comment__dropdown-trigger crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon" aria-label="Toggle dropdown menu" aria-haspopup="true">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="a63lok8clybhxbxq0afxza59jxzg2lle" class="crayons-icon pointer-events-none"><title id="a63lok8clybhxbxq0afxza59jxzg2lle">Dropdown menu</title>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.25 12a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm5.25 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm3.75 1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
</svg>

    </button>
    <ul class="crayons-dropdown p-1 right-1 s:right-0 s:left-auto fs-base dropdown">
      <li><a href="https://dev.to/chie7tain/comment/1e6gl" class="crayons-link crayons-link--block permalink-copybtn" aria-label="Copy link to Ifeanyi Okwuobi's comment" data-no-instant>Copy link</a></li>
      <li class="comment-actions hidden" data-user-id="321958" data-action="settings-button" data-path="https://dev.to/chie7tain/comment/1e6gl/settings" aria-label="Go to Ifeanyi Okwuobi's comment settings"></li>
      <li class="comment-actions hidden" data-action="hide-button" data-commentable-user-id="435270" data-user-id="321958">
        <a href="#" class="crayons-link crayons-link--block hide-comment" data-hide-type="hide" data-comment-id="707533" aria-label="Hide Ifeanyi Okwuobi's comment">
          Hide
        </a>
      </li>
      <li class="mod-actions hidden mod-actions-comment-button" data-path="https://dev.to/chie7tain/comment/1e6gl/mod" aria-label="Moderate Ifeanyi Okwuobi's comment"></li>
      <li class="report-abuse-link-wrapper" data-path="/report-abuse?url=https://dev.to/chie7tain/comment/1e6gl" aria-label="Report Ifeanyi Okwuobi's comment as abusive or violating our code of conduct and/or terms and conditions"></li>
      <li class="current-user-actions"></li>
    </ul>
  </div>
</header>


        <div
          class="
            comment__body
            text-styles
            text-styles--secondary
            body

          ">
          <p>Omoooooo you have not suffered until you try to become a software engineer in Nigeria,</p>

<ol>
<li><p>family members look at you as though there are evil spirits disturbing you and preventing you from leaving that your wicked computer to go and look for real work,</p></li>
<li><p>You spend every penny on data, you don't buy new clothes, you don't drink beer you don't spend money on anything that would not help you become a better Engineer, every 2 - 3 weeks your data is almost finished and you are scheming and plotting how to get money to buy data again.</p></li>
<li><p>Some of your former friends think you are wasting your life and they make snide comments and look at you like that person that soon end up a failure.</p></li>
<li><p>Almost every morning you hear on Twitter a new success story of a Nigerian that has now made it and got a job in a shiny Tech company and they are super excited to Share with everyone.</p></li>
<li><p>Just forget about NEPA/ PHCN power supply that's how you learn time management, you wake at night to use the electricity because you don't know if tomorrow you'd wake up to no electricity again and that your plan of completing Data structure and Algorithms on FreeCodeCamp has to be adjusted again.</p></li>
<li><p>What of depression ? What of anxiety ? what of pressure to show that you are not useless, that you maybe you are smart and things are just almost impossible.</p></li>
<li><p>But omoooooo we continue to struggle, continue to improve and continue to become better inspire of mad odds. </p></li>
</ol>


        </div>
    </div>

    <footer class="comment__footer print-hidden">
  <button
    class="crayons-btn crayons-btn--ghost crayons-btn--icon-left crayons-btn--s mr-1 reaction-like inline-flex reaction-button"
    id="button-for-comment-707533"
    data-comment-id="707533"
    title="heart">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="a116ezxc050btdfrmixowi9uy12ux1ln" class="crayons-icon reaction-icon not-reacted"><title id="a116ezxc050btdfrmixowi9uy12ux1ln">Favorite heart outline button</title><path d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"></path></svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="atnp49py9pbl4ff5gucxgjdssn2jb2by" class="crayons-icon reaction-icon--like reaction-icon reacted"><title id="atnp49py9pbl4ff5gucxgjdssn2jb2by">Favorite heart outline button</title>
    <path d="M5.116 12.595a4.875 4.875 0 015.56-7.68h-.002L7.493 8.098l1.06 1.061 3.181-3.182a4.875 4.875 0 016.895 6.894L12 19.5l-6.894-6.894.01-.01z"></path>
</svg>

    <span class="reactions-count">
      3
    </span>
    <span class="reactions-label hidden m:inline-block">
      &nbsp;likes
    </span>
  </button>

    <a
      class="actions crayons-btn crayons-btn--ghost crayons-btn--s crayons-btn--icon-left toggle-reply-form mr-1 inline-flex"
      href="#/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/new/1e6gl"
      data-comment-id="707533"
      data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e6gl"
      rel="nofollow">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="a9tgfrwgq181hvbd8hf56rt5tvg0x5x0" class="crayons-icon reaction-icon not-reacted"><title id="a9tgfrwgq181hvbd8hf56rt5tvg0x5x0">Comment button</title><path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path></svg>

      <span class="hidden m:inline-block">Reply</span>
    </a>

</footer>

  </div>
</div>
    <details class="comment-wrapper js-comment-wrapper comment-wrapper--deep-1 child" open>
      <summary>
        <span class="mx-0 inline-block align-middle">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="ask3rcixwyyixvq7bk1i1dxb83u3xzbh" class="crayons-icon expanded"><title id="ask3rcixwyyixvq7bk1i1dxb83u3xzbh">Collapse</title>
    <path d="M12 10.677L8 6.935 9 6l3 2.807L15 6l1 .935-4 3.742zm0 4.517L9 18l-1-.935 4-3.742 4 3.742-1 .934-3-2.805z"></path>
</svg>

          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="a58b6uvwh1eehvmjwijijbtevpp4ircv" class="crayons-icon collapsed"><title id="a58b6uvwh1eehvmjwijijbtevpp4ircv">Expand</title>
    <path d="M12 18l-4-3.771 1-.943 3 2.829 3-2.829 1 .943L12 18zm0-10.115l-3 2.829-1-.943L12 6l4 3.771-1 .942-3-2.828z"></path>
</svg>

        </span>
        <span class="js-collapse-comment-content inline-block align-middle"></span>
      </summary>
      <div
        id="comment-node-707908"
        class="
          comment single-comment-node

          child
          comment--deep-1

        "
        data-comment-id="707908"
        data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e756"
        data-comment-author-id="612147"
        data-content-user-id="612147">

<div class="comment__inner">
    <a href="https://dev.to/thebookie_six9" class="shrink-0 crayons-avatar mt-4">
    <img class="crayons-avatar__image" width="32" height="32" src="https://res.cloudinary.com/practicaldev/image/fetch/s--Vn0J3K5w--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/612147/4cfd08a8-d90d-445c-8af3-221734150c81.png" alt="thebookie_six9 profile image" />
  </a>


  <div class="inner-comment comment__details">
    <div class="comment__content crayons-card">



        <header class="comment__header">
  <a href="https://dev.to/thebookie_six9" class="crayons-link crayons-link--secondary flex items-center fw-medium">
    <span class="js-comment-username">Ajibadde</span>
  </a>

  <span class="color-base-30 px-2" role="presentation">&bull;</span>

<a href="https://dev.to/thebookie_six9/comment/1e756" class="comment-date crayons-link crayons-link--secondary fs-s">
  <time datetime="2021-05-05T21:02:37Z">
    May 5
  </time>

</a>


  <div class="comment__dropdown">
    <button class="dropbtn comment__dropdown-trigger crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon" aria-label="Toggle dropdown menu" aria-haspopup="true">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="agf1q71m925cqfy42m7j8hajbrn0expd" class="crayons-icon pointer-events-none"><title id="agf1q71m925cqfy42m7j8hajbrn0expd">Dropdown menu</title>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.25 12a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm5.25 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm3.75 1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
</svg>

    </button>
    <ul class="crayons-dropdown p-1 right-1 s:right-0 s:left-auto fs-base dropdown">
      <li><a href="https://dev.to/thebookie_six9/comment/1e756" class="crayons-link crayons-link--block permalink-copybtn" aria-label="Copy link to Ajibadde's comment" data-no-instant>Copy link</a></li>
      <li class="comment-actions hidden" data-user-id="612147" data-action="settings-button" data-path="https://dev.to/thebookie_six9/comment/1e756/settings" aria-label="Go to Ajibadde's comment settings"></li>
      <li class="comment-actions hidden" data-action="hide-button" data-commentable-user-id="435270" data-user-id="612147">
        <a href="#" class="crayons-link crayons-link--block hide-comment" data-hide-type="hide" data-comment-id="707908" aria-label="Hide Ajibadde's comment">
          Hide
        </a>
      </li>
      <li class="mod-actions hidden mod-actions-comment-button" data-path="https://dev.to/thebookie_six9/comment/1e756/mod" aria-label="Moderate Ajibadde's comment"></li>
      <li class="report-abuse-link-wrapper" data-path="/report-abuse?url=https://dev.to/thebookie_six9/comment/1e756" aria-label="Report Ajibadde's comment as abusive or violating our code of conduct and/or terms and conditions"></li>
      <li class="current-user-actions"></li>
    </ul>
  </div>
</header>


        <div
          class="
            comment__body
            text-styles
            text-styles--secondary
            body

          ">
          <p>Mehn dude do you live in my house... Been surviving mainly with night plan and offline site<br>
. And about Nigerians breaking through on Twitter I always look forward to those stories that my daily/monthly sip of motivation <a class="mentioned-user" href="https://dev.to/resourcefulmind">@resourcefulmind</a>
  great ND well detailed article by the way</p>


        </div>
    </div>

    <footer class="comment__footer print-hidden">
  <button
    class="crayons-btn crayons-btn--ghost crayons-btn--icon-left crayons-btn--s mr-1 reaction-like inline-flex reaction-button"
    id="button-for-comment-707908"
    data-comment-id="707908"
    title="heart">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="afpsqlrurgwitos4tl2jt4j79fmh6kpp" class="crayons-icon reaction-icon not-reacted"><title id="afpsqlrurgwitos4tl2jt4j79fmh6kpp">Favorite heart outline button</title><path d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"></path></svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="ajxdfo7llltledf4fj5td692s98u9u9s" class="crayons-icon reaction-icon--like reaction-icon reacted"><title id="ajxdfo7llltledf4fj5td692s98u9u9s">Favorite heart outline button</title>
    <path d="M5.116 12.595a4.875 4.875 0 015.56-7.68h-.002L7.493 8.098l1.06 1.061 3.181-3.182a4.875 4.875 0 016.895 6.894L12 19.5l-6.894-6.894.01-.01z"></path>
</svg>

    <span class="reactions-count">
      2
    </span>
    <span class="reactions-label hidden m:inline-block">
      &nbsp;likes
    </span>
  </button>

    <a
      class="actions crayons-btn crayons-btn--ghost crayons-btn--s crayons-btn--icon-left toggle-reply-form mr-1 inline-flex"
      href="#/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/new/1e756"
      data-comment-id="707908"
      data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e756"
      rel="nofollow">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="a4rv98l22j196s8sn4nd7jubpnlvlyqd" class="crayons-icon reaction-icon not-reacted"><title id="a4rv98l22j196s8sn4nd7jubpnlvlyqd">Comment button</title><path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path></svg>

      <span class="hidden m:inline-block">Reply</span>
    </a>

</footer>

  </div>
</div>


      </div>
    </details>
    <details class="comment-wrapper js-comment-wrapper comment-wrapper--deep-1 child" open>
      <summary>
        <span class="mx-0 inline-block align-middle">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="aj3rzvjy6q0o8jkvpfvjopjlbg9woqjv" class="crayons-icon expanded"><title id="aj3rzvjy6q0o8jkvpfvjopjlbg9woqjv">Collapse</title>
    <path d="M12 10.677L8 6.935 9 6l3 2.807L15 6l1 .935-4 3.742zm0 4.517L9 18l-1-.935 4-3.742 4 3.742-1 .934-3-2.805z"></path>
</svg>

          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="ar5la1u2vmoakowfm9nr8cybrpwbuasb" class="crayons-icon collapsed"><title id="ar5la1u2vmoakowfm9nr8cybrpwbuasb">Expand</title>
    <path d="M12 18l-4-3.771 1-.943 3 2.829 3-2.829 1 .943L12 18zm0-10.115l-3 2.829-1-.943L12 6l4 3.771-1 .942-3-2.828z"></path>
</svg>

        </span>
        <span class="js-collapse-comment-content inline-block align-middle"></span>
      </summary>
      <div
        id="comment-node-707590"
        class="
          comment single-comment-node

          child
          comment--deep-1

        "
        data-comment-id="707590"
        data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e6j0"
        data-comment-author-id="435270"
        data-content-user-id="435270">

<div class="comment__inner">
    <a href="https://dev.to/resourcefulmind" class="shrink-0 crayons-avatar mt-4">
    <img class="crayons-avatar__image" width="32" height="32" src="https://res.cloudinary.com/practicaldev/image/fetch/s--6y949wgP--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/435270/7ca3876e-ca85-478e-a2fa-c634f4a78121.png" alt="resourcefulmind profile image" />
  </a>


  <div class="inner-comment comment__details">
    <div class="comment__content crayons-card">



        <header class="comment__header">
  <a href="https://dev.to/resourcefulmind" class="crayons-link crayons-link--secondary flex items-center fw-medium">
    <span class="js-comment-username">Opeyemi Stephen</span>
      <span class="crayons-tooltip inline-block spec-op-author -mr-2" data-tooltip="Author">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="a8ajqsrcoyyyefswyow25vkbdyr1r1h4" class="crayons-icon"><title id="a8ajqsrcoyyyefswyow25vkbdyr1r1h4">Author</title>
    <path d="M12 8.25a6 6 0 110 12 6 6 0 010-12zm0 2.625l-.992 2.01-2.218.322 1.605 1.564-.379 2.21L12 15.937l1.984 1.043-.379-2.209 1.605-1.564-2.218-.323L12 10.875zm.75-6.376l3.75.001v2.25l-1.022.854a7.45 7.45 0 00-2.728-.817V4.5zm-1.5 0v2.288a7.451 7.451 0 00-2.727.816L7.5 6.75V4.5h3.75z"></path>
</svg>

      </span>
  </a>

  <span class="color-base-30 px-2" role="presentation">&bull;</span>

<a href="https://dev.to/resourcefulmind/comment/1e6j0" class="comment-date crayons-link crayons-link--secondary fs-s">
  <time datetime="2021-05-05T10:00:22Z">
    May 5
  </time>

</a>


  <div class="comment__dropdown">
    <button class="dropbtn comment__dropdown-trigger crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon" aria-label="Toggle dropdown menu" aria-haspopup="true">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="a7argzyxfiuow5zcv8pip5jedbzl7fvi" class="crayons-icon pointer-events-none"><title id="a7argzyxfiuow5zcv8pip5jedbzl7fvi">Dropdown menu</title>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.25 12a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm5.25 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm3.75 1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
</svg>

    </button>
    <ul class="crayons-dropdown p-1 right-1 s:right-0 s:left-auto fs-base dropdown">
      <li><a href="https://dev.to/resourcefulmind/comment/1e6j0" class="crayons-link crayons-link--block permalink-copybtn" aria-label="Copy link to Opeyemi Stephen's comment" data-no-instant>Copy link</a></li>
      <li class="comment-actions hidden" data-user-id="435270" data-action="settings-button" data-path="https://dev.to/resourcefulmind/comment/1e6j0/settings" aria-label="Go to Opeyemi Stephen's comment settings"></li>
      <li class="comment-actions hidden" data-action="hide-button" data-commentable-user-id="435270" data-user-id="435270">
        <a href="#" class="crayons-link crayons-link--block hide-comment" data-hide-type="hide" data-comment-id="707590" aria-label="Hide Opeyemi Stephen's comment">
          Hide
        </a>
      </li>
      <li class="mod-actions hidden mod-actions-comment-button" data-path="https://dev.to/resourcefulmind/comment/1e6j0/mod" aria-label="Moderate Opeyemi Stephen's comment"></li>
      <li class="report-abuse-link-wrapper" data-path="/report-abuse?url=https://dev.to/resourcefulmind/comment/1e6j0" aria-label="Report Opeyemi Stephen's comment as abusive or violating our code of conduct and/or terms and conditions"></li>
      <li class="current-user-actions"></li>
    </ul>
  </div>
</header>


        <div
          class="
            comment__body
            text-styles
            text-styles--secondary
            body

          ">
          <p>The struggle is real. I’m thinking of an idea tho...coders on this thread and other threads can gather together and pool resources for electricity and data...that sort of thing. Stay strong brother, we shall overcome</p>


        </div>
    </div>

    <footer class="comment__footer print-hidden">
  <button
    class="crayons-btn crayons-btn--ghost crayons-btn--icon-left crayons-btn--s mr-1 reaction-like inline-flex reaction-button"
    id="button-for-comment-707590"
    data-comment-id="707590"
    title="heart">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="a43dnbvw1ukvn5tkm2yi7u1htw0a9hsl" class="crayons-icon reaction-icon not-reacted"><title id="a43dnbvw1ukvn5tkm2yi7u1htw0a9hsl">Favorite heart outline button</title><path d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"></path></svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="al0q0p6lqdjc56p8kw7mbevlliapkbd4" class="crayons-icon reaction-icon--like reaction-icon reacted"><title id="al0q0p6lqdjc56p8kw7mbevlliapkbd4">Favorite heart outline button</title>
    <path d="M5.116 12.595a4.875 4.875 0 015.56-7.68h-.002L7.493 8.098l1.06 1.061 3.181-3.182a4.875 4.875 0 016.895 6.894L12 19.5l-6.894-6.894.01-.01z"></path>
</svg>

    <span class="reactions-count">
      2
    </span>
    <span class="reactions-label hidden m:inline-block">
      &nbsp;likes
    </span>
  </button>

    <a
      class="actions crayons-btn crayons-btn--ghost crayons-btn--s crayons-btn--icon-left toggle-reply-form mr-1 inline-flex"
      href="#/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/new/1e6j0"
      data-comment-id="707590"
      data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e6j0"
      rel="nofollow">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="agpas3o5h25n68mfy33c34rjt59zkkva" class="crayons-icon reaction-icon not-reacted"><title id="agpas3o5h25n68mfy33c34rjt59zkkva">Comment button</title><path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path></svg>

      <span class="hidden m:inline-block">Reply</span>
    </a>

</footer>

  </div>
</div>
    <details class="comment-wrapper js-comment-wrapper comment-wrapper--deep-2 child" open>
      <summary>
        <span class="mx-0 inline-block align-middle">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="arpw0tlylu59yfjyqoh6gcpko5keh962" class="crayons-icon expanded"><title id="arpw0tlylu59yfjyqoh6gcpko5keh962">Collapse</title>
    <path d="M12 10.677L8 6.935 9 6l3 2.807L15 6l1 .935-4 3.742zm0 4.517L9 18l-1-.935 4-3.742 4 3.742-1 .934-3-2.805z"></path>
</svg>

          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="a8w1mnz5h66ztzj6k48780p5h6qf1kgd" class="crayons-icon collapsed"><title id="a8w1mnz5h66ztzj6k48780p5h6qf1kgd">Expand</title>
    <path d="M12 18l-4-3.771 1-.943 3 2.829 3-2.829 1 .943L12 18zm0-10.115l-3 2.829-1-.943L12 6l4 3.771-1 .942-3-2.828z"></path>
</svg>

        </span>
        <span class="js-collapse-comment-content inline-block align-middle"></span>
      </summary>
      <div
        id="comment-node-707784"
        class="
          comment single-comment-node

          child
          comment--deep-2

        "
        data-comment-id="707784"
        data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e70c"
        data-comment-author-id="321958"
        data-content-user-id="321958">

<div class="comment__inner">
    <a href="https://dev.to/chie7tain" class="shrink-0 crayons-avatar mt-4">
    <img class="crayons-avatar__image" width="32" height="32" src="https://res.cloudinary.com/practicaldev/image/fetch/s--J6Osnr83--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/321958/518115c4-77c6-458a-aaf7-ac82ddc3a62d.jpeg" alt="chie7tain profile image" />
  </a>


  <div class="inner-comment comment__details">
    <div class="comment__content crayons-card">



        <header class="comment__header">
  <a href="https://dev.to/chie7tain" class="crayons-link crayons-link--secondary flex items-center fw-medium">
    <span class="js-comment-username">Ifeanyi Okwuobi</span>
  </a>

  <span class="color-base-30 px-2" role="presentation">&bull;</span>

<a href="https://dev.to/chie7tain/comment/1e70c" class="comment-date crayons-link crayons-link--secondary fs-s">
  <time datetime="2021-05-05T15:24:25Z">
    May 5
  </time>

</a>


  <div class="comment__dropdown">
    <button class="dropbtn comment__dropdown-trigger crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon" aria-label="Toggle dropdown menu" aria-haspopup="true">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="a7a15yh39tronpnc6tp0eb4rnhov0hn2" class="crayons-icon pointer-events-none"><title id="a7a15yh39tronpnc6tp0eb4rnhov0hn2">Dropdown menu</title>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.25 12a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm5.25 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm3.75 1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
</svg>

    </button>
    <ul class="crayons-dropdown p-1 right-1 s:right-0 s:left-auto fs-base dropdown">
      <li><a href="https://dev.to/chie7tain/comment/1e70c" class="crayons-link crayons-link--block permalink-copybtn" aria-label="Copy link to Ifeanyi Okwuobi's comment" data-no-instant>Copy link</a></li>
      <li class="comment-actions hidden" data-user-id="321958" data-action="settings-button" data-path="https://dev.to/chie7tain/comment/1e70c/settings" aria-label="Go to Ifeanyi Okwuobi's comment settings"></li>
      <li class="comment-actions hidden" data-action="hide-button" data-commentable-user-id="435270" data-user-id="321958">
        <a href="#" class="crayons-link crayons-link--block hide-comment" data-hide-type="hide" data-comment-id="707784" aria-label="Hide Ifeanyi Okwuobi's comment">
          Hide
        </a>
      </li>
      <li class="mod-actions hidden mod-actions-comment-button" data-path="https://dev.to/chie7tain/comment/1e70c/mod" aria-label="Moderate Ifeanyi Okwuobi's comment"></li>
      <li class="report-abuse-link-wrapper" data-path="/report-abuse?url=https://dev.to/chie7tain/comment/1e70c" aria-label="Report Ifeanyi Okwuobi's comment as abusive or violating our code of conduct and/or terms and conditions"></li>
      <li class="current-user-actions"></li>
    </ul>
  </div>
</header>


        <div
          class="
            comment__body
            text-styles
            text-styles--secondary
            body

          ">
          <p>That would be nice ... </p>


        </div>
    </div>

    <footer class="comment__footer print-hidden">
  <button
    class="crayons-btn crayons-btn--ghost crayons-btn--icon-left crayons-btn--s mr-1 reaction-like inline-flex reaction-button"
    id="button-for-comment-707784"
    data-comment-id="707784"
    title="heart">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="a3pubfoeb31q7wewghoh4o2yh4r5iqni" class="crayons-icon reaction-icon not-reacted"><title id="a3pubfoeb31q7wewghoh4o2yh4r5iqni">Favorite heart outline button</title><path d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"></path></svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="ak04jemghizgeuzy1ubrzpsje81fvdjf" class="crayons-icon reaction-icon--like reaction-icon reacted"><title id="ak04jemghizgeuzy1ubrzpsje81fvdjf">Favorite heart outline button</title>
    <path d="M5.116 12.595a4.875 4.875 0 015.56-7.68h-.002L7.493 8.098l1.06 1.061 3.181-3.182a4.875 4.875 0 016.895 6.894L12 19.5l-6.894-6.894.01-.01z"></path>
</svg>

    <span class="reactions-count">
      1
    </span>
    <span class="reactions-label hidden m:inline-block">
      &nbsp;like
    </span>
  </button>

    <a
      class="actions crayons-btn crayons-btn--ghost crayons-btn--s crayons-btn--icon-left toggle-reply-form mr-1 inline-flex"
      href="#/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/new/1e70c"
      data-comment-id="707784"
      data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e70c"
      rel="nofollow">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="alzsev6r9n4t8bmzaoeqdfevxu1s7du4" class="crayons-icon reaction-icon not-reacted"><title id="alzsev6r9n4t8bmzaoeqdfevxu1s7du4">Comment button</title><path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path></svg>

      <span class="hidden m:inline-block">Reply</span>
    </a>

</footer>

  </div>
</div>


      </div>
    </details>


      </div>
    </details>


      </div>
    </details>

                    <details class="comment-wrapper js-comment-wrapper comment-wrapper--deep-0 root" open>
      <summary>
        <span class="m:mx-1 inline-block align-middle">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="a20ykapsvy58ixrgkkywmmb1zlxwv1a8" class="crayons-icon expanded"><title id="a20ykapsvy58ixrgkkywmmb1zlxwv1a8">Collapse</title>
    <path d="M12 10.677L8 6.935 9 6l3 2.807L15 6l1 .935-4 3.742zm0 4.517L9 18l-1-.935 4-3.742 4 3.742-1 .934-3-2.805z"></path>
</svg>

          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="a6kw2i9nkk7weni1zs7yaf50ntg4ktrb" class="crayons-icon collapsed"><title id="a6kw2i9nkk7weni1zs7yaf50ntg4ktrb">Expand</title>
    <path d="M12 18l-4-3.771 1-.943 3 2.829 3-2.829 1 .943L12 18zm0-10.115l-3 2.829-1-.943L12 6l4 3.771-1 .942-3-2.828z"></path>
</svg>

        </span>
        <span class="js-collapse-comment-content inline-block align-middle"></span>
      </summary>
      <div
        id="comment-node-704770"
        class="
          comment single-comment-node

          root
          comment--deep-0

        "
        data-comment-id="704770"
        data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e2ee"
        data-comment-author-id="483812"
        data-content-user-id="483812">

<div class="comment__inner">
    <a href="https://dev.to/tominekan" class="shrink-0 crayons-avatar m:crayons-avatar--l mt-4 m:mt-3">
    <img class="crayons-avatar__image" width="32" height="32" src="https://res.cloudinary.com/practicaldev/image/fetch/s--pVO9FCaj--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/483812/b5cfece6-b0fa-442a-a4b9-f040af251d6e.png" alt="tominekan profile image" />
  </a>


  <div class="inner-comment comment__details">
    <div class="comment__content crayons-card">



        <header class="comment__header">
  <a href="https://dev.to/tominekan" class="crayons-link crayons-link--secondary flex items-center fw-medium">
    <span class="js-comment-username">Tomi Adenekan</span>
  </a>

  <span class="color-base-30 px-2" role="presentation">&bull;</span>

<a href="https://dev.to/tominekan/comment/1e2ee" class="comment-date crayons-link crayons-link--secondary fs-s">
  <time datetime="2021-04-29T21:16:48Z">
    Apr 29
  </time>

</a>


  <div class="comment__dropdown">
    <button class="dropbtn comment__dropdown-trigger crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon" aria-label="Toggle dropdown menu" aria-haspopup="true">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="atuxjailwal1e2mtsz69q5j0g4hq0es5" class="crayons-icon pointer-events-none"><title id="atuxjailwal1e2mtsz69q5j0g4hq0es5">Dropdown menu</title>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.25 12a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm5.25 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm3.75 1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
</svg>

    </button>
    <ul class="crayons-dropdown p-1 right-1 s:right-0 s:left-auto fs-base dropdown">
      <li><a href="https://dev.to/tominekan/comment/1e2ee" class="crayons-link crayons-link--block permalink-copybtn" aria-label="Copy link to Tomi Adenekan's comment" data-no-instant>Copy link</a></li>
      <li class="comment-actions hidden" data-user-id="483812" data-action="settings-button" data-path="https://dev.to/tominekan/comment/1e2ee/settings" aria-label="Go to Tomi Adenekan's comment settings"></li>
      <li class="comment-actions hidden" data-action="hide-button" data-commentable-user-id="435270" data-user-id="483812">
        <a href="#" class="crayons-link crayons-link--block hide-comment" data-hide-type="hide" data-comment-id="704770" aria-label="Hide Tomi Adenekan's comment">
          Hide
        </a>
      </li>
      <li class="mod-actions hidden mod-actions-comment-button" data-path="https://dev.to/tominekan/comment/1e2ee/mod" aria-label="Moderate Tomi Adenekan's comment"></li>
      <li class="report-abuse-link-wrapper" data-path="/report-abuse?url=https://dev.to/tominekan/comment/1e2ee" aria-label="Report Tomi Adenekan's comment as abusive or violating our code of conduct and/or terms and conditions"></li>
      <li class="current-user-actions"></li>
    </ul>
  </div>
</header>


        <div
          class="
            comment__body
            text-styles
            text-styles--secondary
            body

          ">
          <p>I am also Nigerian. I moved to America and started getting into coding. The "Up NEPA" situation must make consistent coding a huge pain. I feel for you 😬.</p>


        </div>
    </div>

    <footer class="comment__footer print-hidden">
  <button
    class="crayons-btn crayons-btn--ghost crayons-btn--icon-left crayons-btn--s mr-1 reaction-like inline-flex reaction-button"
    id="button-for-comment-704770"
    data-comment-id="704770"
    title="heart">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="a5ju0c349u20y4vibz6zbakjnmj75k5q" class="crayons-icon reaction-icon not-reacted"><title id="a5ju0c349u20y4vibz6zbakjnmj75k5q">Favorite heart outline button</title><path d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"></path></svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="a3xxnd5b0vomhn6hk5fnuuigmr63omco" class="crayons-icon reaction-icon--like reaction-icon reacted"><title id="a3xxnd5b0vomhn6hk5fnuuigmr63omco">Favorite heart outline button</title>
    <path d="M5.116 12.595a4.875 4.875 0 015.56-7.68h-.002L7.493 8.098l1.06 1.061 3.181-3.182a4.875 4.875 0 016.895 6.894L12 19.5l-6.894-6.894.01-.01z"></path>
</svg>

    <span class="reactions-count">
      4
    </span>
    <span class="reactions-label hidden m:inline-block">
      &nbsp;likes
    </span>
  </button>

    <a
      class="actions crayons-btn crayons-btn--ghost crayons-btn--s crayons-btn--icon-left toggle-reply-form mr-1 inline-flex"
      href="#/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/new/1e2ee"
      data-comment-id="704770"
      data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e2ee"
      rel="nofollow">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="a8lrxx7u4bsucw0g2xxwgnm3n1xdb0iu" class="crayons-icon reaction-icon not-reacted"><title id="a8lrxx7u4bsucw0g2xxwgnm3n1xdb0iu">Comment button</title><path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path></svg>

      <span class="hidden m:inline-block">Reply</span>
    </a>

</footer>

  </div>
</div>
    <details class="comment-wrapper js-comment-wrapper comment-wrapper--deep-1 child" open>
      <summary>
        <span class="mx-0 inline-block align-middle">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="a4xor5g87bo6p5slo9j4cxi08v7lqm7p" class="crayons-icon expanded"><title id="a4xor5g87bo6p5slo9j4cxi08v7lqm7p">Collapse</title>
    <path d="M12 10.677L8 6.935 9 6l3 2.807L15 6l1 .935-4 3.742zm0 4.517L9 18l-1-.935 4-3.742 4 3.742-1 .934-3-2.805z"></path>
</svg>

          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="afcu836wcifkmi7aac9nxaiu1f87qicn" class="crayons-icon collapsed"><title id="afcu836wcifkmi7aac9nxaiu1f87qicn">Expand</title>
    <path d="M12 18l-4-3.771 1-.943 3 2.829 3-2.829 1 .943L12 18zm0-10.115l-3 2.829-1-.943L12 6l4 3.771-1 .942-3-2.828z"></path>
</svg>

        </span>
        <span class="js-collapse-comment-content inline-block align-middle"></span>
      </summary>
      <div
        id="comment-node-704930"
        class="
          comment single-comment-node

          child
          comment--deep-1

        "
        data-comment-id="704930"
        data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e2ki"
        data-comment-author-id="435270"
        data-content-user-id="435270">

<div class="comment__inner">
    <a href="https://dev.to/resourcefulmind" class="shrink-0 crayons-avatar mt-4">
    <img class="crayons-avatar__image" width="32" height="32" src="https://res.cloudinary.com/practicaldev/image/fetch/s--6y949wgP--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/435270/7ca3876e-ca85-478e-a2fa-c634f4a78121.png" alt="resourcefulmind profile image" />
  </a>


  <div class="inner-comment comment__details">
    <div class="comment__content crayons-card">



        <header class="comment__header">
  <a href="https://dev.to/resourcefulmind" class="crayons-link crayons-link--secondary flex items-center fw-medium">
    <span class="js-comment-username">Opeyemi Stephen</span>
      <span class="crayons-tooltip inline-block spec-op-author -mr-2" data-tooltip="Author">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="a8hi7i1igtqdpk4d725l2nyli9uvxamd" class="crayons-icon"><title id="a8hi7i1igtqdpk4d725l2nyli9uvxamd">Author</title>
    <path d="M12 8.25a6 6 0 110 12 6 6 0 010-12zm0 2.625l-.992 2.01-2.218.322 1.605 1.564-.379 2.21L12 15.937l1.984 1.043-.379-2.209 1.605-1.564-2.218-.323L12 10.875zm.75-6.376l3.75.001v2.25l-1.022.854a7.45 7.45 0 00-2.728-.817V4.5zm-1.5 0v2.288a7.451 7.451 0 00-2.727.816L7.5 6.75V4.5h3.75z"></path>
</svg>

      </span>
  </a>

  <span class="color-base-30 px-2" role="presentation">&bull;</span>

<a href="https://dev.to/resourcefulmind/comment/1e2ki" class="comment-date crayons-link crayons-link--secondary fs-s">
  <time datetime="2021-04-30T07:17:28Z">
    Apr 30
  </time>

</a>


  <div class="comment__dropdown">
    <button class="dropbtn comment__dropdown-trigger crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon" aria-label="Toggle dropdown menu" aria-haspopup="true">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="ap0tusbawtwwjc0nvmybyg9cunq4giei" class="crayons-icon pointer-events-none"><title id="ap0tusbawtwwjc0nvmybyg9cunq4giei">Dropdown menu</title>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.25 12a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm5.25 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm3.75 1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
</svg>

    </button>
    <ul class="crayons-dropdown p-1 right-1 s:right-0 s:left-auto fs-base dropdown">
      <li><a href="https://dev.to/resourcefulmind/comment/1e2ki" class="crayons-link crayons-link--block permalink-copybtn" aria-label="Copy link to Opeyemi Stephen's comment" data-no-instant>Copy link</a></li>
      <li class="comment-actions hidden" data-user-id="435270" data-action="settings-button" data-path="https://dev.to/resourcefulmind/comment/1e2ki/settings" aria-label="Go to Opeyemi Stephen's comment settings"></li>
      <li class="comment-actions hidden" data-action="hide-button" data-commentable-user-id="435270" data-user-id="435270">
        <a href="#" class="crayons-link crayons-link--block hide-comment" data-hide-type="hide" data-comment-id="704930" aria-label="Hide Opeyemi Stephen's comment">
          Hide
        </a>
      </li>
      <li class="mod-actions hidden mod-actions-comment-button" data-path="https://dev.to/resourcefulmind/comment/1e2ki/mod" aria-label="Moderate Opeyemi Stephen's comment"></li>
      <li class="report-abuse-link-wrapper" data-path="/report-abuse?url=https://dev.to/resourcefulmind/comment/1e2ki" aria-label="Report Opeyemi Stephen's comment as abusive or violating our code of conduct and/or terms and conditions"></li>
      <li class="current-user-actions"></li>
    </ul>
  </div>
</header>


        <div
          class="
            comment__body
            text-styles
            text-styles--secondary
            body

          ">
          <p>Lucky you Tomi...good thing you got out when we could talk about “Up NEPA”</p>

<p>Now, NEPA no even Dey to shout to...one time I was in a bootcamp and we had three assignments, managed to do two...the last one was dropped at night and I couldn’t go out to charge</p>

<p>I ended up being unable to submit and it turned out that I was unable to make it to the next stage because of 1 Mark which I would have gotten if there had been light to do the assignment. </p>


        </div>
    </div>

    <footer class="comment__footer print-hidden">
  <button
    class="crayons-btn crayons-btn--ghost crayons-btn--icon-left crayons-btn--s mr-1 reaction-like inline-flex reaction-button"
    id="button-for-comment-704930"
    data-comment-id="704930"
    title="heart">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="a8mbxs2y4hshhinhoh7pzks9zqa1pyqk" class="crayons-icon reaction-icon not-reacted"><title id="a8mbxs2y4hshhinhoh7pzks9zqa1pyqk">Favorite heart outline button</title><path d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"></path></svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="aab1vo9bb5c8ht2mb94g2q55olu47ivi" class="crayons-icon reaction-icon--like reaction-icon reacted"><title id="aab1vo9bb5c8ht2mb94g2q55olu47ivi">Favorite heart outline button</title>
    <path d="M5.116 12.595a4.875 4.875 0 015.56-7.68h-.002L7.493 8.098l1.06 1.061 3.181-3.182a4.875 4.875 0 016.895 6.894L12 19.5l-6.894-6.894.01-.01z"></path>
</svg>

    <span class="reactions-count">
      2
    </span>
    <span class="reactions-label hidden m:inline-block">
      &nbsp;likes
    </span>
  </button>

    <a
      class="actions crayons-btn crayons-btn--ghost crayons-btn--s crayons-btn--icon-left toggle-reply-form mr-1 inline-flex"
      href="#/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/new/1e2ki"
      data-comment-id="704930"
      data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e2ki"
      rel="nofollow">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="atmbtzypggqiz457r0682gkej9yy21kc" class="crayons-icon reaction-icon not-reacted"><title id="atmbtzypggqiz457r0682gkej9yy21kc">Comment button</title><path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path></svg>

      <span class="hidden m:inline-block">Reply</span>
    </a>

</footer>

  </div>
</div>
    <details class="comment-wrapper js-comment-wrapper comment-wrapper--deep-2 child" open>
      <summary>
        <span class="mx-0 inline-block align-middle">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="a9lb5mjvohpakrz92txusmayo6n6sr8r" class="crayons-icon expanded"><title id="a9lb5mjvohpakrz92txusmayo6n6sr8r">Collapse</title>
    <path d="M12 10.677L8 6.935 9 6l3 2.807L15 6l1 .935-4 3.742zm0 4.517L9 18l-1-.935 4-3.742 4 3.742-1 .934-3-2.805z"></path>
</svg>

          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="a4v878q10ljx182irgfopf3aa8k5g48p" class="crayons-icon collapsed"><title id="a4v878q10ljx182irgfopf3aa8k5g48p">Expand</title>
    <path d="M12 18l-4-3.771 1-.943 3 2.829 3-2.829 1 .943L12 18zm0-10.115l-3 2.829-1-.943L12 6l4 3.771-1 .942-3-2.828z"></path>
</svg>

        </span>
        <span class="js-collapse-comment-content inline-block align-middle"></span>
      </summary>
      <div
        id="comment-node-705206"
        class="
          comment single-comment-node

          child
          comment--deep-2

        "
        data-comment-id="705206"
        data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e358"
        data-comment-author-id="483812"
        data-content-user-id="483812">

<div class="comment__inner">
    <a href="https://dev.to/tominekan" class="shrink-0 crayons-avatar mt-4">
    <img class="crayons-avatar__image" width="32" height="32" src="https://res.cloudinary.com/practicaldev/image/fetch/s--pVO9FCaj--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/483812/b5cfece6-b0fa-442a-a4b9-f040af251d6e.png" alt="tominekan profile image" />
  </a>


  <div class="inner-comment comment__details">
    <div class="comment__content crayons-card">



        <header class="comment__header">
  <a href="https://dev.to/tominekan" class="crayons-link crayons-link--secondary flex items-center fw-medium">
    <span class="js-comment-username">Tomi Adenekan</span>
  </a>

  <span class="color-base-30 px-2" role="presentation">&bull;</span>

<a href="https://dev.to/tominekan/comment/1e358" class="comment-date crayons-link crayons-link--secondary fs-s">
  <time datetime="2021-04-30T16:27:16Z">
    Apr 30
  </time>

</a>


  <div class="comment__dropdown">
    <button class="dropbtn comment__dropdown-trigger crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon" aria-label="Toggle dropdown menu" aria-haspopup="true">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="a2olza12ebq5adevu2cydvk8r1z0ybe4" class="crayons-icon pointer-events-none"><title id="a2olza12ebq5adevu2cydvk8r1z0ybe4">Dropdown menu</title>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.25 12a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm5.25 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm3.75 1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
</svg>

    </button>
    <ul class="crayons-dropdown p-1 right-1 s:right-0 s:left-auto fs-base dropdown">
      <li><a href="https://dev.to/tominekan/comment/1e358" class="crayons-link crayons-link--block permalink-copybtn" aria-label="Copy link to Tomi Adenekan's comment" data-no-instant>Copy link</a></li>
      <li class="comment-actions hidden" data-user-id="483812" data-action="settings-button" data-path="https://dev.to/tominekan/comment/1e358/settings" aria-label="Go to Tomi Adenekan's comment settings"></li>
      <li class="comment-actions hidden" data-action="hide-button" data-commentable-user-id="435270" data-user-id="483812">
        <a href="#" class="crayons-link crayons-link--block hide-comment" data-hide-type="hide" data-comment-id="705206" aria-label="Hide Tomi Adenekan's comment">
          Hide
        </a>
      </li>
      <li class="mod-actions hidden mod-actions-comment-button" data-path="https://dev.to/tominekan/comment/1e358/mod" aria-label="Moderate Tomi Adenekan's comment"></li>
      <li class="report-abuse-link-wrapper" data-path="/report-abuse?url=https://dev.to/tominekan/comment/1e358" aria-label="Report Tomi Adenekan's comment as abusive or violating our code of conduct and/or terms and conditions"></li>
      <li class="current-user-actions"></li>
    </ul>
  </div>
</header>


        <div
          class="
            comment__body
            text-styles
            text-styles--secondary
            body

          ">
          <p>That's so painful, ouch 😥.</p>


        </div>
    </div>

    <footer class="comment__footer print-hidden">
  <button
    class="crayons-btn crayons-btn--ghost crayons-btn--icon-left crayons-btn--s mr-1 reaction-like inline-flex reaction-button"
    id="button-for-comment-705206"
    data-comment-id="705206"
    title="heart">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="a3dkiux1zzeibv26w5bbof93pf065z47" class="crayons-icon reaction-icon not-reacted"><title id="a3dkiux1zzeibv26w5bbof93pf065z47">Favorite heart outline button</title><path d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"></path></svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="ac5ddadu3v2h8vozrzkff9pe40pmcdvt" class="crayons-icon reaction-icon--like reaction-icon reacted"><title id="ac5ddadu3v2h8vozrzkff9pe40pmcdvt">Favorite heart outline button</title>
    <path d="M5.116 12.595a4.875 4.875 0 015.56-7.68h-.002L7.493 8.098l1.06 1.061 3.181-3.182a4.875 4.875 0 016.895 6.894L12 19.5l-6.894-6.894.01-.01z"></path>
</svg>

    <span class="reactions-count">
      1
    </span>
    <span class="reactions-label hidden m:inline-block">
      &nbsp;like
    </span>
  </button>

    <a
      class="actions crayons-btn crayons-btn--ghost crayons-btn--s crayons-btn--icon-left toggle-reply-form mr-1 inline-flex"
      href="#/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/new/1e358"
      data-comment-id="705206"
      data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e358"
      rel="nofollow">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="atqosrpd36ic0vpr8codz6u7yls7jx8u" class="crayons-icon reaction-icon not-reacted"><title id="atqosrpd36ic0vpr8codz6u7yls7jx8u">Comment button</title><path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path></svg>

      <span class="hidden m:inline-block">Reply</span>
    </a>

</footer>

  </div>
</div>


      </div>
    </details>


      </div>
    </details>


      </div>
    </details>

                    <details class="comment-wrapper js-comment-wrapper comment-wrapper--deep-0 root" open>
      <summary>
        <span class="m:mx-1 inline-block align-middle">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="a5c34uuqh7vm4wjecb1r0w5v97n8c0fk" class="crayons-icon expanded"><title id="a5c34uuqh7vm4wjecb1r0w5v97n8c0fk">Collapse</title>
    <path d="M12 10.677L8 6.935 9 6l3 2.807L15 6l1 .935-4 3.742zm0 4.517L9 18l-1-.935 4-3.742 4 3.742-1 .934-3-2.805z"></path>
</svg>

          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="ahxejacour3pk3ylk5r8bx3k6wo67rfa" class="crayons-icon collapsed"><title id="ahxejacour3pk3ylk5r8bx3k6wo67rfa">Expand</title>
    <path d="M12 18l-4-3.771 1-.943 3 2.829 3-2.829 1 .943L12 18zm0-10.115l-3 2.829-1-.943L12 6l4 3.771-1 .942-3-2.828z"></path>
</svg>

        </span>
        <span class="js-collapse-comment-content inline-block align-middle"></span>
      </summary>
      <div
        id="comment-node-706274"
        class="
          comment single-comment-node

          root
          comment--deep-0

        "
        data-comment-id="706274"
        data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e4ka"
        data-comment-author-id="259401"
        data-content-user-id="259401">

<div class="comment__inner">
    <a href="https://dev.to/abbeymaniak" class="shrink-0 crayons-avatar m:crayons-avatar--l mt-4 m:mt-3">
    <img class="crayons-avatar__image" width="32" height="32" src="https://res.cloudinary.com/practicaldev/image/fetch/s--uaXOE0Ve--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/259401/a0331633-e64f-4fc8-9d5a-5c0d5678d1a3.png" alt="abbeymaniak profile image" />
  </a>


  <div class="inner-comment comment__details">
    <div class="comment__content crayons-card">



        <header class="comment__header">
  <a href="https://dev.to/abbeymaniak" class="crayons-link crayons-link--secondary flex items-center fw-medium">
    <span class="js-comment-username">abbeymaniak</span>
  </a>

  <span class="color-base-30 px-2" role="presentation">&bull;</span>

<a href="https://dev.to/abbeymaniak/comment/1e4ka" class="comment-date crayons-link crayons-link--secondary fs-s">
  <time datetime="2021-05-02T18:52:08Z">
    May 2
  </time>

</a>


  <div class="comment__dropdown">
    <button class="dropbtn comment__dropdown-trigger crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon" aria-label="Toggle dropdown menu" aria-haspopup="true">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="ah8z6425pqr0mh57p111skyi9o8t5hc4" class="crayons-icon pointer-events-none"><title id="ah8z6425pqr0mh57p111skyi9o8t5hc4">Dropdown menu</title>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.25 12a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm5.25 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm3.75 1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
</svg>

    </button>
    <ul class="crayons-dropdown p-1 right-1 s:right-0 s:left-auto fs-base dropdown">
      <li><a href="https://dev.to/abbeymaniak/comment/1e4ka" class="crayons-link crayons-link--block permalink-copybtn" aria-label="Copy link to abbeymaniak's comment" data-no-instant>Copy link</a></li>
      <li class="comment-actions hidden" data-user-id="259401" data-action="settings-button" data-path="https://dev.to/abbeymaniak/comment/1e4ka/settings" aria-label="Go to abbeymaniak's comment settings"></li>
      <li class="comment-actions hidden" data-action="hide-button" data-commentable-user-id="435270" data-user-id="259401">
        <a href="#" class="crayons-link crayons-link--block hide-comment" data-hide-type="hide" data-comment-id="706274" aria-label="Hide abbeymaniak's comment">
          Hide
        </a>
      </li>
      <li class="mod-actions hidden mod-actions-comment-button" data-path="https://dev.to/abbeymaniak/comment/1e4ka/mod" aria-label="Moderate abbeymaniak's comment"></li>
      <li class="report-abuse-link-wrapper" data-path="/report-abuse?url=https://dev.to/abbeymaniak/comment/1e4ka" aria-label="Report abbeymaniak's comment as abusive or violating our code of conduct and/or terms and conditions"></li>
      <li class="current-user-actions"></li>
    </ul>
  </div>
</header>


        <div
          class="
            comment__body
            text-styles
            text-styles--secondary
            body

          ">
          <p>I couldn't help but read through when I saw Nigeria in the title. Nice write up, I studied accounting and now I do if &amp; else 😂. It's really hard being a software developer in this country. To make things worst some employers will offer shitty money to Developers, it's all not helping and encouraging. Imagine went for full stack interview and their last offer was 100k 😂 while transportation alone is over 40k for the month. Only God can help us. Nice piece</p>


        </div>
    </div>

    <footer class="comment__footer print-hidden">
  <button
    class="crayons-btn crayons-btn--ghost crayons-btn--icon-left crayons-btn--s mr-1 reaction-like inline-flex reaction-button"
    id="button-for-comment-706274"
    data-comment-id="706274"
    title="heart">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="aib5g5cwsnx6t2fuedqmv4uv8ew6ke71" class="crayons-icon reaction-icon not-reacted"><title id="aib5g5cwsnx6t2fuedqmv4uv8ew6ke71">Favorite heart outline button</title><path d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"></path></svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="a7rtmv6fawxgoebhxczn946be8asc0p4" class="crayons-icon reaction-icon--like reaction-icon reacted"><title id="a7rtmv6fawxgoebhxczn946be8asc0p4">Favorite heart outline button</title>
    <path d="M5.116 12.595a4.875 4.875 0 015.56-7.68h-.002L7.493 8.098l1.06 1.061 3.181-3.182a4.875 4.875 0 016.895 6.894L12 19.5l-6.894-6.894.01-.01z"></path>
</svg>

    <span class="reactions-count">
      3
    </span>
    <span class="reactions-label hidden m:inline-block">
      &nbsp;likes
    </span>
  </button>

    <a
      class="actions crayons-btn crayons-btn--ghost crayons-btn--s crayons-btn--icon-left toggle-reply-form mr-1 inline-flex"
      href="#/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/new/1e4ka"
      data-comment-id="706274"
      data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e4ka"
      rel="nofollow">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="aoei5r6vtzjpz4epjq5uykkt7g3i4skv" class="crayons-icon reaction-icon not-reacted"><title id="aoei5r6vtzjpz4epjq5uykkt7g3i4skv">Comment button</title><path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path></svg>

      <span class="hidden m:inline-block">Reply</span>
    </a>

</footer>

  </div>
</div>
    <details class="comment-wrapper js-comment-wrapper comment-wrapper--deep-1 child" open>
      <summary>
        <span class="mx-0 inline-block align-middle">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="ash1ohbktsjiifl6dr9vsvne5pg1almr" class="crayons-icon expanded"><title id="ash1ohbktsjiifl6dr9vsvne5pg1almr">Collapse</title>
    <path d="M12 10.677L8 6.935 9 6l3 2.807L15 6l1 .935-4 3.742zm0 4.517L9 18l-1-.935 4-3.742 4 3.742-1 .934-3-2.805z"></path>
</svg>

          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="ant6o74nyew67iwp9qcwtk6zela8f4x6" class="crayons-icon collapsed"><title id="ant6o74nyew67iwp9qcwtk6zela8f4x6">Expand</title>
    <path d="M12 18l-4-3.771 1-.943 3 2.829 3-2.829 1 .943L12 18zm0-10.115l-3 2.829-1-.943L12 6l4 3.771-1 .942-3-2.828z"></path>
</svg>

        </span>
        <span class="js-collapse-comment-content inline-block align-middle"></span>
      </summary>
      <div
        id="comment-node-707588"
        class="
          comment single-comment-node

          child
          comment--deep-1

        "
        data-comment-id="707588"
        data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e6io"
        data-comment-author-id="435270"
        data-content-user-id="435270">

<div class="comment__inner">
    <a href="https://dev.to/resourcefulmind" class="shrink-0 crayons-avatar mt-4">
    <img class="crayons-avatar__image" width="32" height="32" src="https://res.cloudinary.com/practicaldev/image/fetch/s--6y949wgP--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/435270/7ca3876e-ca85-478e-a2fa-c634f4a78121.png" alt="resourcefulmind profile image" />
  </a>


  <div class="inner-comment comment__details">
    <div class="comment__content crayons-card">



        <header class="comment__header">
  <a href="https://dev.to/resourcefulmind" class="crayons-link crayons-link--secondary flex items-center fw-medium">
    <span class="js-comment-username">Opeyemi Stephen</span>
      <span class="crayons-tooltip inline-block spec-op-author -mr-2" data-tooltip="Author">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="a4nq8xrzsm8al33al7qr1vxqobv79ti" class="crayons-icon"><title id="a4nq8xrzsm8al33al7qr1vxqobv79ti">Author</title>
    <path d="M12 8.25a6 6 0 110 12 6 6 0 010-12zm0 2.625l-.992 2.01-2.218.322 1.605 1.564-.379 2.21L12 15.937l1.984 1.043-.379-2.209 1.605-1.564-2.218-.323L12 10.875zm.75-6.376l3.75.001v2.25l-1.022.854a7.45 7.45 0 00-2.728-.817V4.5zm-1.5 0v2.288a7.451 7.451 0 00-2.727.816L7.5 6.75V4.5h3.75z"></path>
</svg>

      </span>
  </a>

  <span class="color-base-30 px-2" role="presentation">&bull;</span>

<a href="https://dev.to/resourcefulmind/comment/1e6io" class="comment-date crayons-link crayons-link--secondary fs-s">
  <time datetime="2021-05-05T09:58:39Z">
    May 5
  </time>

</a>


  <div class="comment__dropdown">
    <button class="dropbtn comment__dropdown-trigger crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon" aria-label="Toggle dropdown menu" aria-haspopup="true">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="a7nwqpkxdqf8udzpp6lmxbbvsgbmbeyb" class="crayons-icon pointer-events-none"><title id="a7nwqpkxdqf8udzpp6lmxbbvsgbmbeyb">Dropdown menu</title>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.25 12a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm5.25 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm3.75 1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
</svg>

    </button>
    <ul class="crayons-dropdown p-1 right-1 s:right-0 s:left-auto fs-base dropdown">
      <li><a href="https://dev.to/resourcefulmind/comment/1e6io" class="crayons-link crayons-link--block permalink-copybtn" aria-label="Copy link to Opeyemi Stephen's comment" data-no-instant>Copy link</a></li>
      <li class="comment-actions hidden" data-user-id="435270" data-action="settings-button" data-path="https://dev.to/resourcefulmind/comment/1e6io/settings" aria-label="Go to Opeyemi Stephen's comment settings"></li>
      <li class="comment-actions hidden" data-action="hide-button" data-commentable-user-id="435270" data-user-id="435270">
        <a href="#" class="crayons-link crayons-link--block hide-comment" data-hide-type="hide" data-comment-id="707588" aria-label="Hide Opeyemi Stephen's comment">
          Hide
        </a>
      </li>
      <li class="mod-actions hidden mod-actions-comment-button" data-path="https://dev.to/resourcefulmind/comment/1e6io/mod" aria-label="Moderate Opeyemi Stephen's comment"></li>
      <li class="report-abuse-link-wrapper" data-path="/report-abuse?url=https://dev.to/resourcefulmind/comment/1e6io" aria-label="Report Opeyemi Stephen's comment as abusive or violating our code of conduct and/or terms and conditions"></li>
      <li class="current-user-actions"></li>
    </ul>
  </div>
</header>


        <div
          class="
            comment__body
            text-styles
            text-styles--secondary
            body

          ">
          <p>Full stack for 100k?!!! </p>

<p>Mehn that’s a new low...these are the same people that want to pay graphic designers 3k for big jobs so I’m not surprised</p>


        </div>
    </div>

    <footer class="comment__footer print-hidden">
  <button
    class="crayons-btn crayons-btn--ghost crayons-btn--icon-left crayons-btn--s mr-1 reaction-like inline-flex reaction-button"
    id="button-for-comment-707588"
    data-comment-id="707588"
    title="heart">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="aak93fs5ajs4ur1e265t49qfoxenhrei" class="crayons-icon reaction-icon not-reacted"><title id="aak93fs5ajs4ur1e265t49qfoxenhrei">Favorite heart outline button</title><path d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"></path></svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="ajhmw518q4tl68c1r10nkw8adnz0hxiv" class="crayons-icon reaction-icon--like reaction-icon reacted"><title id="ajhmw518q4tl68c1r10nkw8adnz0hxiv">Favorite heart outline button</title>
    <path d="M5.116 12.595a4.875 4.875 0 015.56-7.68h-.002L7.493 8.098l1.06 1.061 3.181-3.182a4.875 4.875 0 016.895 6.894L12 19.5l-6.894-6.894.01-.01z"></path>
</svg>

    <span class="reactions-count">
      1
    </span>
    <span class="reactions-label hidden m:inline-block">
      &nbsp;like
    </span>
  </button>

    <a
      class="actions crayons-btn crayons-btn--ghost crayons-btn--s crayons-btn--icon-left toggle-reply-form mr-1 inline-flex"
      href="#/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/new/1e6io"
      data-comment-id="707588"
      data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e6io"
      rel="nofollow">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="ahpxetaq7gys39lezs6b2hvs4jolm6o4" class="crayons-icon reaction-icon not-reacted"><title id="ahpxetaq7gys39lezs6b2hvs4jolm6o4">Comment button</title><path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path></svg>

      <span class="hidden m:inline-block">Reply</span>
    </a>

</footer>

  </div>
</div>


      </div>
    </details>


      </div>
    </details>

                    <details class="comment-wrapper js-comment-wrapper comment-wrapper--deep-0 root" open>
      <summary>
        <span class="m:mx-1 inline-block align-middle">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="acmfq1nj10r8zid921701ji2rslx4sgb" class="crayons-icon expanded"><title id="acmfq1nj10r8zid921701ji2rslx4sgb">Collapse</title>
    <path d="M12 10.677L8 6.935 9 6l3 2.807L15 6l1 .935-4 3.742zm0 4.517L9 18l-1-.935 4-3.742 4 3.742-1 .934-3-2.805z"></path>
</svg>

          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="aqb9s83tjc6eifo8kerueynurzllp8s5" class="crayons-icon collapsed"><title id="aqb9s83tjc6eifo8kerueynurzllp8s5">Expand</title>
    <path d="M12 18l-4-3.771 1-.943 3 2.829 3-2.829 1 .943L12 18zm0-10.115l-3 2.829-1-.943L12 6l4 3.771-1 .942-3-2.828z"></path>
</svg>

        </span>
        <span class="js-collapse-comment-content inline-block align-middle"></span>
      </summary>
      <div
        id="comment-node-704801"
        class="
          comment single-comment-node

          root
          comment--deep-0

        "
        data-comment-id="704801"
        data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e2fj"
        data-comment-author-id="620865"
        data-content-user-id="620865">

<div class="comment__inner">
    <a href="https://dev.to/piaomu" class="shrink-0 crayons-avatar m:crayons-avatar--l mt-4 m:mt-3">
    <img class="crayons-avatar__image" width="32" height="32" src="https://res.cloudinary.com/practicaldev/image/fetch/s--0SIot2Tj--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/620865/a19e83e3-f565-4c29-aed1-030fea84d1c8.jpeg" alt="piaomu profile image" />
  </a>


  <div class="inner-comment comment__details">
    <div class="comment__content crayons-card">



        <header class="comment__header">
  <a href="https://dev.to/piaomu" class="crayons-link crayons-link--secondary flex items-center fw-medium">
    <span class="js-comment-username">Kasey Wahl</span>
  </a>

  <span class="color-base-30 px-2" role="presentation">&bull;</span>

<a href="https://dev.to/piaomu/comment/1e2fj" class="comment-date crayons-link crayons-link--secondary fs-s">
  <time datetime="2021-04-29T22:53:05Z">
    Apr 29
  </time>

</a>


  <div class="comment__dropdown">
    <button class="dropbtn comment__dropdown-trigger crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon" aria-label="Toggle dropdown menu" aria-haspopup="true">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="aebfw7yfknw1xqf8gm52q9vrkuiulbxm" class="crayons-icon pointer-events-none"><title id="aebfw7yfknw1xqf8gm52q9vrkuiulbxm">Dropdown menu</title>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.25 12a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm5.25 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm3.75 1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
</svg>

    </button>
    <ul class="crayons-dropdown p-1 right-1 s:right-0 s:left-auto fs-base dropdown">
      <li><a href="https://dev.to/piaomu/comment/1e2fj" class="crayons-link crayons-link--block permalink-copybtn" aria-label="Copy link to Kasey Wahl's comment" data-no-instant>Copy link</a></li>
      <li class="comment-actions hidden" data-user-id="620865" data-action="settings-button" data-path="https://dev.to/piaomu/comment/1e2fj/settings" aria-label="Go to Kasey Wahl's comment settings"></li>
      <li class="comment-actions hidden" data-action="hide-button" data-commentable-user-id="435270" data-user-id="620865">
        <a href="#" class="crayons-link crayons-link--block hide-comment" data-hide-type="hide" data-comment-id="704801" aria-label="Hide Kasey Wahl's comment">
          Hide
        </a>
      </li>
      <li class="mod-actions hidden mod-actions-comment-button" data-path="https://dev.to/piaomu/comment/1e2fj/mod" aria-label="Moderate Kasey Wahl's comment"></li>
      <li class="report-abuse-link-wrapper" data-path="/report-abuse?url=https://dev.to/piaomu/comment/1e2fj" aria-label="Report Kasey Wahl's comment as abusive or violating our code of conduct and/or terms and conditions"></li>
      <li class="current-user-actions"></li>
    </ul>
  </div>
</header>


        <div
          class="
            comment__body
            text-styles
            text-styles--secondary
            body

          ">
          <p>Man, what a read. </p>

<p>What does the developer market look like in Nigeria? I have a better appreciation for the pains you have to go through to practice, but when it comes to hiring, what kinds of challenges have you encountered?</p>


        </div>
    </div>

    <footer class="comment__footer print-hidden">
  <button
    class="crayons-btn crayons-btn--ghost crayons-btn--icon-left crayons-btn--s mr-1 reaction-like inline-flex reaction-button"
    id="button-for-comment-704801"
    data-comment-id="704801"
    title="heart">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="aik7vxd0gadi03sqfqu5fgvvtg1ncup5" class="crayons-icon reaction-icon not-reacted"><title id="aik7vxd0gadi03sqfqu5fgvvtg1ncup5">Favorite heart outline button</title><path d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"></path></svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="ad2r4iksrgec7ot17a19parc6ogcu5yc" class="crayons-icon reaction-icon--like reaction-icon reacted"><title id="ad2r4iksrgec7ot17a19parc6ogcu5yc">Favorite heart outline button</title>
    <path d="M5.116 12.595a4.875 4.875 0 015.56-7.68h-.002L7.493 8.098l1.06 1.061 3.181-3.182a4.875 4.875 0 016.895 6.894L12 19.5l-6.894-6.894.01-.01z"></path>
</svg>

    <span class="reactions-count">
      2
    </span>
    <span class="reactions-label hidden m:inline-block">
      &nbsp;likes
    </span>
  </button>

    <a
      class="actions crayons-btn crayons-btn--ghost crayons-btn--s crayons-btn--icon-left toggle-reply-form mr-1 inline-flex"
      href="#/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/new/1e2fj"
      data-comment-id="704801"
      data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e2fj"
      rel="nofollow">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="adm5kk19y117z5o02we54wlfu1e2hj0p" class="crayons-icon reaction-icon not-reacted"><title id="adm5kk19y117z5o02we54wlfu1e2hj0p">Comment button</title><path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path></svg>

      <span class="hidden m:inline-block">Reply</span>
    </a>

</footer>

  </div>
</div>
    <details class="comment-wrapper js-comment-wrapper comment-wrapper--deep-1 child" open>
      <summary>
        <span class="mx-0 inline-block align-middle">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="aq021d1adxmle4ksme6qj2fm00x3kcn9" class="crayons-icon expanded"><title id="aq021d1adxmle4ksme6qj2fm00x3kcn9">Collapse</title>
    <path d="M12 10.677L8 6.935 9 6l3 2.807L15 6l1 .935-4 3.742zm0 4.517L9 18l-1-.935 4-3.742 4 3.742-1 .934-3-2.805z"></path>
</svg>

          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="annb775w461vsi4jecfpelo23l5q8v5s" class="crayons-icon collapsed"><title id="annb775w461vsi4jecfpelo23l5q8v5s">Expand</title>
    <path d="M12 18l-4-3.771 1-.943 3 2.829 3-2.829 1 .943L12 18zm0-10.115l-3 2.829-1-.943L12 6l4 3.771-1 .942-3-2.828z"></path>
</svg>

        </span>
        <span class="js-collapse-comment-content inline-block align-middle"></span>
      </summary>
      <div
        id="comment-node-704921"
        class="
          comment single-comment-node

          child
          comment--deep-1

        "
        data-comment-id="704921"
        data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e2k9"
        data-comment-author-id="435270"
        data-content-user-id="435270">

<div class="comment__inner">
    <a href="https://dev.to/resourcefulmind" class="shrink-0 crayons-avatar mt-4">
    <img class="crayons-avatar__image" width="32" height="32" src="https://res.cloudinary.com/practicaldev/image/fetch/s--6y949wgP--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/435270/7ca3876e-ca85-478e-a2fa-c634f4a78121.png" alt="resourcefulmind profile image" />
  </a>


  <div class="inner-comment comment__details">
    <div class="comment__content crayons-card">



        <header class="comment__header">
  <a href="https://dev.to/resourcefulmind" class="crayons-link crayons-link--secondary flex items-center fw-medium">
    <span class="js-comment-username">Opeyemi Stephen</span>
      <span class="crayons-tooltip inline-block spec-op-author -mr-2" data-tooltip="Author">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="asyvzlws5724fpgpwdectzt57mdkke3k" class="crayons-icon"><title id="asyvzlws5724fpgpwdectzt57mdkke3k">Author</title>
    <path d="M12 8.25a6 6 0 110 12 6 6 0 010-12zm0 2.625l-.992 2.01-2.218.322 1.605 1.564-.379 2.21L12 15.937l1.984 1.043-.379-2.209 1.605-1.564-2.218-.323L12 10.875zm.75-6.376l3.75.001v2.25l-1.022.854a7.45 7.45 0 00-2.728-.817V4.5zm-1.5 0v2.288a7.451 7.451 0 00-2.727.816L7.5 6.75V4.5h3.75z"></path>
</svg>

      </span>
  </a>

  <span class="color-base-30 px-2" role="presentation">&bull;</span>

<a href="https://dev.to/resourcefulmind/comment/1e2k9" class="comment-date crayons-link crayons-link--secondary fs-s">
  <time datetime="2021-04-30T07:06:31Z">
    Apr 30
  </time>

</a>


  <div class="comment__dropdown">
    <button class="dropbtn comment__dropdown-trigger crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon" aria-label="Toggle dropdown menu" aria-haspopup="true">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="a8hcsq59z3jbnzmvjwi4dnkiixl0d4jx" class="crayons-icon pointer-events-none"><title id="a8hcsq59z3jbnzmvjwi4dnkiixl0d4jx">Dropdown menu</title>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.25 12a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm5.25 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm3.75 1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
</svg>

    </button>
    <ul class="crayons-dropdown p-1 right-1 s:right-0 s:left-auto fs-base dropdown">
      <li><a href="https://dev.to/resourcefulmind/comment/1e2k9" class="crayons-link crayons-link--block permalink-copybtn" aria-label="Copy link to Opeyemi Stephen's comment" data-no-instant>Copy link</a></li>
      <li class="comment-actions hidden" data-user-id="435270" data-action="settings-button" data-path="https://dev.to/resourcefulmind/comment/1e2k9/settings" aria-label="Go to Opeyemi Stephen's comment settings"></li>
      <li class="comment-actions hidden" data-action="hide-button" data-commentable-user-id="435270" data-user-id="435270">
        <a href="#" class="crayons-link crayons-link--block hide-comment" data-hide-type="hide" data-comment-id="704921" aria-label="Hide Opeyemi Stephen's comment">
          Hide
        </a>
      </li>
      <li class="mod-actions hidden mod-actions-comment-button" data-path="https://dev.to/resourcefulmind/comment/1e2k9/mod" aria-label="Moderate Opeyemi Stephen's comment"></li>
      <li class="report-abuse-link-wrapper" data-path="/report-abuse?url=https://dev.to/resourcefulmind/comment/1e2k9" aria-label="Report Opeyemi Stephen's comment as abusive or violating our code of conduct and/or terms and conditions"></li>
      <li class="current-user-actions"></li>
    </ul>
  </div>
</header>


        <div
          class="
            comment__body
            text-styles
            text-styles--secondary
            body

          ">
          <p>The developer market in Nigeria...it’s huge. Our fintech industry has got all these recent restrictions and regulations from the Central Bank but still giant strides are being taken. Paystack, Flutterwave, BuyCoins Africa, PiggyVest are but a few examples.</p>

<p>As for hiring, it’s a tight space...most developers are looking for remote jobs because the pay is no longer really commensurate to the magnitude of workload you have to handle.</p>


        </div>
    </div>

    <footer class="comment__footer print-hidden">
  <button
    class="crayons-btn crayons-btn--ghost crayons-btn--icon-left crayons-btn--s mr-1 reaction-like inline-flex reaction-button"
    id="button-for-comment-704921"
    data-comment-id="704921"
    title="heart">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="as0mk3cptgokwekxzanzjvh3h5elqnqb" class="crayons-icon reaction-icon not-reacted"><title id="as0mk3cptgokwekxzanzjvh3h5elqnqb">Favorite heart outline button</title><path d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"></path></svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="a6fuq0ve8ytgz8msey0daacdz54yvwti" class="crayons-icon reaction-icon--like reaction-icon reacted"><title id="a6fuq0ve8ytgz8msey0daacdz54yvwti">Favorite heart outline button</title>
    <path d="M5.116 12.595a4.875 4.875 0 015.56-7.68h-.002L7.493 8.098l1.06 1.061 3.181-3.182a4.875 4.875 0 016.895 6.894L12 19.5l-6.894-6.894.01-.01z"></path>
</svg>

    <span class="reactions-count">
      5
    </span>
    <span class="reactions-label hidden m:inline-block">
      &nbsp;likes
    </span>
  </button>

    <a
      class="actions crayons-btn crayons-btn--ghost crayons-btn--s crayons-btn--icon-left toggle-reply-form mr-1 inline-flex"
      href="#/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/new/1e2k9"
      data-comment-id="704921"
      data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e2k9"
      rel="nofollow">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="a4ckyt5efumfh0zxk2zj3ggzpoomh33f" class="crayons-icon reaction-icon not-reacted"><title id="a4ckyt5efumfh0zxk2zj3ggzpoomh33f">Comment button</title><path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path></svg>

      <span class="hidden m:inline-block">Reply</span>
    </a>

</footer>

  </div>
</div>


      </div>
    </details>


      </div>
    </details>

                    <details class="comment-wrapper js-comment-wrapper comment-wrapper--deep-0 root" open>
      <summary>
        <span class="m:mx-1 inline-block align-middle">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="a7bydaltf1es13uvkbcj2zfpazl2wb2t" class="crayons-icon expanded"><title id="a7bydaltf1es13uvkbcj2zfpazl2wb2t">Collapse</title>
    <path d="M12 10.677L8 6.935 9 6l3 2.807L15 6l1 .935-4 3.742zm0 4.517L9 18l-1-.935 4-3.742 4 3.742-1 .934-3-2.805z"></path>
</svg>

          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="akmld4cy47kwjv4ydlgjbduhd9fcurv9" class="crayons-icon collapsed"><title id="akmld4cy47kwjv4ydlgjbduhd9fcurv9">Expand</title>
    <path d="M12 18l-4-3.771 1-.943 3 2.829 3-2.829 1 .943L12 18zm0-10.115l-3 2.829-1-.943L12 6l4 3.771-1 .942-3-2.828z"></path>
</svg>

        </span>
        <span class="js-collapse-comment-content inline-block align-middle"></span>
      </summary>
      <div
        id="comment-node-707308"
        class="
          comment single-comment-node

          root
          comment--deep-0

        "
        data-comment-id="707308"
        data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e684"
        data-comment-author-id="606265"
        data-content-user-id="606265">

<div class="comment__inner">
    <a href="https://dev.to/nathbabs" class="shrink-0 crayons-avatar m:crayons-avatar--l mt-4 m:mt-3">
    <img class="crayons-avatar__image" width="32" height="32" src="https://res.cloudinary.com/practicaldev/image/fetch/s--wIMYX4Xb--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/606265/471da1e6-bc9a-41cf-b43e-917dc8036e28.png" alt="nathbabs profile image" />
  </a>


  <div class="inner-comment comment__details">
    <div class="comment__content crayons-card">



        <header class="comment__header">
  <a href="https://dev.to/nathbabs" class="crayons-link crayons-link--secondary flex items-center fw-medium">
    <span class="js-comment-username">Nathaniel</span>
  </a>

  <span class="color-base-30 px-2" role="presentation">&bull;</span>

<a href="https://dev.to/nathbabs/comment/1e684" class="comment-date crayons-link crayons-link--secondary fs-s">
  <time datetime="2021-05-04T19:10:22Z">
    May 4
  </time>

</a>


  <div class="comment__dropdown">
    <button class="dropbtn comment__dropdown-trigger crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon" aria-label="Toggle dropdown menu" aria-haspopup="true">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="a77sm6jpcsvny2pksmtdvm4037q53jke" class="crayons-icon pointer-events-none"><title id="a77sm6jpcsvny2pksmtdvm4037q53jke">Dropdown menu</title>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.25 12a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm5.25 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm3.75 1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
</svg>

    </button>
    <ul class="crayons-dropdown p-1 right-1 s:right-0 s:left-auto fs-base dropdown">
      <li><a href="https://dev.to/nathbabs/comment/1e684" class="crayons-link crayons-link--block permalink-copybtn" aria-label="Copy link to Nathaniel's comment" data-no-instant>Copy link</a></li>
      <li class="comment-actions hidden" data-user-id="606265" data-action="settings-button" data-path="https://dev.to/nathbabs/comment/1e684/settings" aria-label="Go to Nathaniel's comment settings"></li>
      <li class="comment-actions hidden" data-action="hide-button" data-commentable-user-id="435270" data-user-id="606265">
        <a href="#" class="crayons-link crayons-link--block hide-comment" data-hide-type="hide" data-comment-id="707308" aria-label="Hide Nathaniel's comment">
          Hide
        </a>
      </li>
      <li class="mod-actions hidden mod-actions-comment-button" data-path="https://dev.to/nathbabs/comment/1e684/mod" aria-label="Moderate Nathaniel's comment"></li>
      <li class="report-abuse-link-wrapper" data-path="/report-abuse?url=https://dev.to/nathbabs/comment/1e684" aria-label="Report Nathaniel's comment as abusive or violating our code of conduct and/or terms and conditions"></li>
      <li class="current-user-actions"></li>
    </ul>
  </div>
</header>


        <div
          class="
            comment__body
            text-styles
            text-styles--secondary
            body

          ">
          <p>The power supply has even gotten worse in the past month, it's so bad.<br>
Someone was rejected for a remote job because of these things.<br>
All these struggle yet no one is willing to hire a junior. Everybody wants a senior , some people are giving up.</p>


        </div>
    </div>

    <footer class="comment__footer print-hidden">
  <button
    class="crayons-btn crayons-btn--ghost crayons-btn--icon-left crayons-btn--s mr-1 reaction-like inline-flex reaction-button"
    id="button-for-comment-707308"
    data-comment-id="707308"
    title="heart">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="ab0st04cdauzg1yh41mpmcfs10r643lf" class="crayons-icon reaction-icon not-reacted"><title id="ab0st04cdauzg1yh41mpmcfs10r643lf">Favorite heart outline button</title><path d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"></path></svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="apge8gn8c0btn29ghb94jidcg0yfrwi8" class="crayons-icon reaction-icon--like reaction-icon reacted"><title id="apge8gn8c0btn29ghb94jidcg0yfrwi8">Favorite heart outline button</title>
    <path d="M5.116 12.595a4.875 4.875 0 015.56-7.68h-.002L7.493 8.098l1.06 1.061 3.181-3.182a4.875 4.875 0 016.895 6.894L12 19.5l-6.894-6.894.01-.01z"></path>
</svg>

    <span class="reactions-count">
      2
    </span>
    <span class="reactions-label hidden m:inline-block">
      &nbsp;likes
    </span>
  </button>

    <a
      class="actions crayons-btn crayons-btn--ghost crayons-btn--s crayons-btn--icon-left toggle-reply-form mr-1 inline-flex"
      href="#/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/new/1e684"
      data-comment-id="707308"
      data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e684"
      rel="nofollow">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="a1tgsdnnwgkgunvpy6deorsiehyltwr6" class="crayons-icon reaction-icon not-reacted"><title id="a1tgsdnnwgkgunvpy6deorsiehyltwr6">Comment button</title><path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path></svg>

      <span class="hidden m:inline-block">Reply</span>
    </a>

</footer>

  </div>
</div>


      </div>
    </details>

                    <details class="comment-wrapper js-comment-wrapper comment-wrapper--deep-0 root" open>
      <summary>
        <span class="m:mx-1 inline-block align-middle">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="acwe76iqgbxd4rzvsi709auyfsu6s8rp" class="crayons-icon expanded"><title id="acwe76iqgbxd4rzvsi709auyfsu6s8rp">Collapse</title>
    <path d="M12 10.677L8 6.935 9 6l3 2.807L15 6l1 .935-4 3.742zm0 4.517L9 18l-1-.935 4-3.742 4 3.742-1 .934-3-2.805z"></path>
</svg>

          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="a7mmrzg8ca5ymssuh4mnpgnawo4xydep" class="crayons-icon collapsed"><title id="a7mmrzg8ca5ymssuh4mnpgnawo4xydep">Expand</title>
    <path d="M12 18l-4-3.771 1-.943 3 2.829 3-2.829 1 .943L12 18zm0-10.115l-3 2.829-1-.943L12 6l4 3.771-1 .942-3-2.828z"></path>
</svg>

        </span>
        <span class="js-collapse-comment-content inline-block align-middle"></span>
      </summary>
      <div
        id="comment-node-708508"
        class="
          comment single-comment-node

          root
          comment--deep-0

        "
        data-comment-id="708508"
        data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e828"
        data-comment-author-id="28704"
        data-content-user-id="28704">

<div class="comment__inner">
    <a href="https://dev.to/leob" class="shrink-0 crayons-avatar m:crayons-avatar--l mt-4 m:mt-3">
    <img class="crayons-avatar__image" width="32" height="32" src="https://res.cloudinary.com/practicaldev/image/fetch/s--Dmn5mSy1--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/28704/616e76ac-2a61-4758-8dcd-da819cec4c85.jpg" alt="leob profile image" />
  </a>


  <div class="inner-comment comment__details">
    <div class="comment__content crayons-card">



        <header class="comment__header">
  <a href="https://dev.to/leob" class="crayons-link crayons-link--secondary flex items-center fw-medium">
    <span class="js-comment-username">leob</span>
  </a>

  <span class="color-base-30 px-2" role="presentation">&bull;</span>

<a href="https://dev.to/leob/comment/1e828" class="comment-date crayons-link crayons-link--secondary fs-s">
  <time datetime="2021-05-07T03:14:25Z">
    May 7
  </time>

</a>


  <div class="comment__dropdown">
    <button class="dropbtn comment__dropdown-trigger crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon" aria-label="Toggle dropdown menu" aria-haspopup="true">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="ak3ygu58n870wxsacxvpc8u18v4azmw5" class="crayons-icon pointer-events-none"><title id="ak3ygu58n870wxsacxvpc8u18v4azmw5">Dropdown menu</title>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.25 12a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm5.25 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm3.75 1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
</svg>

    </button>
    <ul class="crayons-dropdown p-1 right-1 s:right-0 s:left-auto fs-base dropdown">
      <li><a href="https://dev.to/leob/comment/1e828" class="crayons-link crayons-link--block permalink-copybtn" aria-label="Copy link to leob's comment" data-no-instant>Copy link</a></li>
      <li class="comment-actions hidden" data-user-id="28704" data-action="settings-button" data-path="https://dev.to/leob/comment/1e828/settings" aria-label="Go to leob's comment settings"></li>
      <li class="comment-actions hidden" data-action="hide-button" data-commentable-user-id="435270" data-user-id="28704">
        <a href="#" class="crayons-link crayons-link--block hide-comment" data-hide-type="hide" data-comment-id="708508" aria-label="Hide leob's comment">
          Hide
        </a>
      </li>
      <li class="mod-actions hidden mod-actions-comment-button" data-path="https://dev.to/leob/comment/1e828/mod" aria-label="Moderate leob's comment"></li>
      <li class="report-abuse-link-wrapper" data-path="/report-abuse?url=https://dev.to/leob/comment/1e828" aria-label="Report leob's comment as abusive or violating our code of conduct and/or terms and conditions"></li>
      <li class="current-user-actions"></li>
    </ul>
  </div>
</header>


        <div
          class="
            comment__body
            text-styles
            text-styles--secondary
            body

          ">
          <p>Incredible ... you often see people talking about struggles or challenges, but these are REAL struggles and challenges, you could almost say physical ones ... requires an extraordinary amount of grit, perseverance and resilience in order to not give up and push through!</p>


        </div>
    </div>

    <footer class="comment__footer print-hidden">
  <button
    class="crayons-btn crayons-btn--ghost crayons-btn--icon-left crayons-btn--s mr-1 reaction-like inline-flex reaction-button"
    id="button-for-comment-708508"
    data-comment-id="708508"
    title="heart">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="adnvy6cz7p4h5p2cr3uudqy5ztpqqk3e" class="crayons-icon reaction-icon not-reacted"><title id="adnvy6cz7p4h5p2cr3uudqy5ztpqqk3e">Favorite heart outline button</title><path d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"></path></svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="af6ksfixjwpir84q0c68d087khuunlvc" class="crayons-icon reaction-icon--like reaction-icon reacted"><title id="af6ksfixjwpir84q0c68d087khuunlvc">Favorite heart outline button</title>
    <path d="M5.116 12.595a4.875 4.875 0 015.56-7.68h-.002L7.493 8.098l1.06 1.061 3.181-3.182a4.875 4.875 0 016.895 6.894L12 19.5l-6.894-6.894.01-.01z"></path>
</svg>

    <span class="reactions-count">
      2
    </span>
    <span class="reactions-label hidden m:inline-block">
      &nbsp;likes
    </span>
  </button>

    <a
      class="actions crayons-btn crayons-btn--ghost crayons-btn--s crayons-btn--icon-left toggle-reply-form mr-1 inline-flex"
      href="#/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/new/1e828"
      data-comment-id="708508"
      data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e828"
      rel="nofollow">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="a9ighkydp1u0q5khru3qnujvj6dry2p8" class="crayons-icon reaction-icon not-reacted"><title id="a9ighkydp1u0q5khru3qnujvj6dry2p8">Comment button</title><path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path></svg>

      <span class="hidden m:inline-block">Reply</span>
    </a>

</footer>

  </div>
</div>


      </div>
    </details>

                    <details class="comment-wrapper js-comment-wrapper comment-wrapper--deep-0 root" open>
      <summary>
        <span class="m:mx-1 inline-block align-middle">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="a9gn7iokym7tlczkjkpkj2fs3k570ezg" class="crayons-icon expanded"><title id="a9gn7iokym7tlczkjkpkj2fs3k570ezg">Collapse</title>
    <path d="M12 10.677L8 6.935 9 6l3 2.807L15 6l1 .935-4 3.742zm0 4.517L9 18l-1-.935 4-3.742 4 3.742-1 .934-3-2.805z"></path>
</svg>

          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="artjseo81d47puj7ejz8wuk54jg5vlv5" class="crayons-icon collapsed"><title id="artjseo81d47puj7ejz8wuk54jg5vlv5">Expand</title>
    <path d="M12 18l-4-3.771 1-.943 3 2.829 3-2.829 1 .943L12 18zm0-10.115l-3 2.829-1-.943L12 6l4 3.771-1 .942-3-2.828z"></path>
</svg>

        </span>
        <span class="js-collapse-comment-content inline-block align-middle"></span>
      </summary>
      <div
        id="comment-node-707266"
        class="
          comment single-comment-node

          root
          comment--deep-0

        "
        data-comment-id="707266"
        data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e66e"
        data-comment-author-id="624959"
        data-content-user-id="624959">

<div class="comment__inner">
    <a href="https://dev.to/seunoyeniyi" class="shrink-0 crayons-avatar m:crayons-avatar--l mt-4 m:mt-3">
    <img class="crayons-avatar__image" width="32" height="32" src="https://res.cloudinary.com/practicaldev/image/fetch/s--ZBpDuBri--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/624959/a0692e10-09da-4257-a6fc-bbe4af79ab58.jpeg" alt="seunoyeniyi profile image" />
  </a>


  <div class="inner-comment comment__details">
    <div class="comment__content crayons-card">



        <header class="comment__header">
  <a href="https://dev.to/seunoyeniyi" class="crayons-link crayons-link--secondary flex items-center fw-medium">
    <span class="js-comment-username">seunoyeniyi</span>
  </a>

  <span class="color-base-30 px-2" role="presentation">&bull;</span>

<a href="https://dev.to/seunoyeniyi/comment/1e66e" class="comment-date crayons-link crayons-link--secondary fs-s">
  <time datetime="2021-05-04T18:13:31Z">
    May 4
  </time>

</a>


  <div class="comment__dropdown">
    <button class="dropbtn comment__dropdown-trigger crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon" aria-label="Toggle dropdown menu" aria-haspopup="true">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="aqplf9ssiysvghesiqytae2b21qipmq" class="crayons-icon pointer-events-none"><title id="aqplf9ssiysvghesiqytae2b21qipmq">Dropdown menu</title>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.25 12a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm5.25 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm3.75 1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
</svg>

    </button>
    <ul class="crayons-dropdown p-1 right-1 s:right-0 s:left-auto fs-base dropdown">
      <li><a href="https://dev.to/seunoyeniyi/comment/1e66e" class="crayons-link crayons-link--block permalink-copybtn" aria-label="Copy link to seunoyeniyi's comment" data-no-instant>Copy link</a></li>
      <li class="comment-actions hidden" data-user-id="624959" data-action="settings-button" data-path="https://dev.to/seunoyeniyi/comment/1e66e/settings" aria-label="Go to seunoyeniyi's comment settings"></li>
      <li class="comment-actions hidden" data-action="hide-button" data-commentable-user-id="435270" data-user-id="624959">
        <a href="#" class="crayons-link crayons-link--block hide-comment" data-hide-type="hide" data-comment-id="707266" aria-label="Hide seunoyeniyi's comment">
          Hide
        </a>
      </li>
      <li class="mod-actions hidden mod-actions-comment-button" data-path="https://dev.to/seunoyeniyi/comment/1e66e/mod" aria-label="Moderate seunoyeniyi's comment"></li>
      <li class="report-abuse-link-wrapper" data-path="/report-abuse?url=https://dev.to/seunoyeniyi/comment/1e66e" aria-label="Report seunoyeniyi's comment as abusive or violating our code of conduct and/or terms and conditions"></li>
      <li class="current-user-actions"></li>
    </ul>
  </div>
</header>


        <div
          class="
            comment__body
            text-styles
            text-styles--secondary
            body

          ">
          <p>Thanks for this post.... Like seriously I'm always angry about myself, Everytime I remember the time I decided to be a software engineer in Nigeria.</p>

<p>What pain me most is the family... They always think you are a useless one since you are not getting paid. Or you are a fraudster.</p>


        </div>
    </div>

    <footer class="comment__footer print-hidden">
  <button
    class="crayons-btn crayons-btn--ghost crayons-btn--icon-left crayons-btn--s mr-1 reaction-like inline-flex reaction-button"
    id="button-for-comment-707266"
    data-comment-id="707266"
    title="heart">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="adjxqhopylf0x9in8n2fzlsyi14o7fq6" class="crayons-icon reaction-icon not-reacted"><title id="adjxqhopylf0x9in8n2fzlsyi14o7fq6">Favorite heart outline button</title><path d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"></path></svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="aanpw2874glsaesevp1o6vemonwl59gc" class="crayons-icon reaction-icon--like reaction-icon reacted"><title id="aanpw2874glsaesevp1o6vemonwl59gc">Favorite heart outline button</title>
    <path d="M5.116 12.595a4.875 4.875 0 015.56-7.68h-.002L7.493 8.098l1.06 1.061 3.181-3.182a4.875 4.875 0 016.895 6.894L12 19.5l-6.894-6.894.01-.01z"></path>
</svg>

    <span class="reactions-count">
      2
    </span>
    <span class="reactions-label hidden m:inline-block">
      &nbsp;likes
    </span>
  </button>

    <a
      class="actions crayons-btn crayons-btn--ghost crayons-btn--s crayons-btn--icon-left toggle-reply-form mr-1 inline-flex"
      href="#/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/new/1e66e"
      data-comment-id="707266"
      data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e66e"
      rel="nofollow">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="ae1k7hsh54v4n91e00oel5ojfiqlun5h" class="crayons-icon reaction-icon not-reacted"><title id="ae1k7hsh54v4n91e00oel5ojfiqlun5h">Comment button</title><path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path></svg>

      <span class="hidden m:inline-block">Reply</span>
    </a>

</footer>

  </div>
</div>


      </div>
    </details>

                    <details class="comment-wrapper js-comment-wrapper comment-wrapper--deep-0 root" open>
      <summary>
        <span class="m:mx-1 inline-block align-middle">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="a4rz2m11q2efhvn6ps10l5kypn7erp0g" class="crayons-icon expanded"><title id="a4rz2m11q2efhvn6ps10l5kypn7erp0g">Collapse</title>
    <path d="M12 10.677L8 6.935 9 6l3 2.807L15 6l1 .935-4 3.742zm0 4.517L9 18l-1-.935 4-3.742 4 3.742-1 .934-3-2.805z"></path>
</svg>

          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="am3wlibboi3hm5x88e0lfjuedr616akq" class="crayons-icon collapsed"><title id="am3wlibboi3hm5x88e0lfjuedr616akq">Expand</title>
    <path d="M12 18l-4-3.771 1-.943 3 2.829 3-2.829 1 .943L12 18zm0-10.115l-3 2.829-1-.943L12 6l4 3.771-1 .942-3-2.828z"></path>
</svg>

        </span>
        <span class="js-collapse-comment-content inline-block align-middle"></span>
      </summary>
      <div
        id="comment-node-706269"
        class="
          comment single-comment-node

          root
          comment--deep-0

        "
        data-comment-id="706269"
        data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e4k5"
        data-comment-author-id="411657"
        data-content-user-id="411657">

<div class="comment__inner">
    <a href="https://dev.to/symokevo" class="shrink-0 crayons-avatar m:crayons-avatar--l mt-4 m:mt-3">
    <img class="crayons-avatar__image" width="32" height="32" src="https://res.cloudinary.com/practicaldev/image/fetch/s--_PouV-Ed--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/411657/3930ce55-4eff-4b41-b6e4-708166233f45.jpg" alt="symokevo profile image" />
  </a>


  <div class="inner-comment comment__details">
    <div class="comment__content crayons-card">



        <header class="comment__header">
  <a href="https://dev.to/symokevo" class="crayons-link crayons-link--secondary flex items-center fw-medium">
    <span class="js-comment-username">SIMON KEVIN</span>
  </a>

  <span class="color-base-30 px-2" role="presentation">&bull;</span>

<a href="https://dev.to/symokevo/comment/1e4k5" class="comment-date crayons-link crayons-link--secondary fs-s">
  <time datetime="2021-05-02T18:23:36Z">
    May 2
  </time>

</a>


  <div class="comment__dropdown">
    <button class="dropbtn comment__dropdown-trigger crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon" aria-label="Toggle dropdown menu" aria-haspopup="true">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="ac0kouvo4fhw2b0jwbu3ygv3ut2qp8oe" class="crayons-icon pointer-events-none"><title id="ac0kouvo4fhw2b0jwbu3ygv3ut2qp8oe">Dropdown menu</title>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.25 12a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm5.25 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm3.75 1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
</svg>

    </button>
    <ul class="crayons-dropdown p-1 right-1 s:right-0 s:left-auto fs-base dropdown">
      <li><a href="https://dev.to/symokevo/comment/1e4k5" class="crayons-link crayons-link--block permalink-copybtn" aria-label="Copy link to SIMON KEVIN's comment" data-no-instant>Copy link</a></li>
      <li class="comment-actions hidden" data-user-id="411657" data-action="settings-button" data-path="https://dev.to/symokevo/comment/1e4k5/settings" aria-label="Go to SIMON KEVIN's comment settings"></li>
      <li class="comment-actions hidden" data-action="hide-button" data-commentable-user-id="435270" data-user-id="411657">
        <a href="#" class="crayons-link crayons-link--block hide-comment" data-hide-type="hide" data-comment-id="706269" aria-label="Hide SIMON KEVIN's comment">
          Hide
        </a>
      </li>
      <li class="mod-actions hidden mod-actions-comment-button" data-path="https://dev.to/symokevo/comment/1e4k5/mod" aria-label="Moderate SIMON KEVIN's comment"></li>
      <li class="report-abuse-link-wrapper" data-path="/report-abuse?url=https://dev.to/symokevo/comment/1e4k5" aria-label="Report SIMON KEVIN's comment as abusive or violating our code of conduct and/or terms and conditions"></li>
      <li class="current-user-actions"></li>
    </ul>
  </div>
</header>


        <div
          class="
            comment__body
            text-styles
            text-styles--secondary
            body

          ">
          <p>Wooow!! That is pretty much for a starter or newbies. Kenya is no better, and the same could be the case in a number of places. But getting past these huddles, makes the sweet victory. Coz if there are devs who started from slums and others refugee camps and made it to be known as some of the best in what they do, then every other person CAN. question is, how passionate are you about the career?. I feel like it could be of more help, fighting through all the challenges and upon making it, come back and support others, so they don't face the same issues you did as you rise to where u are. Calls for UNITY among devs to help one another... especially newbies</p>


        </div>
    </div>

    <footer class="comment__footer print-hidden">
  <button
    class="crayons-btn crayons-btn--ghost crayons-btn--icon-left crayons-btn--s mr-1 reaction-like inline-flex reaction-button"
    id="button-for-comment-706269"
    data-comment-id="706269"
    title="heart">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="a1v4o5ru2u5rccqn4xrjcngb5vbjglaw" class="crayons-icon reaction-icon not-reacted"><title id="a1v4o5ru2u5rccqn4xrjcngb5vbjglaw">Favorite heart outline button</title><path d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"></path></svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="a36odatc3t0by46wp5j9mv3xjgdbd2sj" class="crayons-icon reaction-icon--like reaction-icon reacted"><title id="a36odatc3t0by46wp5j9mv3xjgdbd2sj">Favorite heart outline button</title>
    <path d="M5.116 12.595a4.875 4.875 0 015.56-7.68h-.002L7.493 8.098l1.06 1.061 3.181-3.182a4.875 4.875 0 016.895 6.894L12 19.5l-6.894-6.894.01-.01z"></path>
</svg>

    <span class="reactions-count">
      2
    </span>
    <span class="reactions-label hidden m:inline-block">
      &nbsp;likes
    </span>
  </button>

    <a
      class="actions crayons-btn crayons-btn--ghost crayons-btn--s crayons-btn--icon-left toggle-reply-form mr-1 inline-flex"
      href="#/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/new/1e4k5"
      data-comment-id="706269"
      data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e4k5"
      rel="nofollow">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="arv80fjzv5b8pzkh4w2mfg1ywmaqmftf" class="crayons-icon reaction-icon not-reacted"><title id="arv80fjzv5b8pzkh4w2mfg1ywmaqmftf">Comment button</title><path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path></svg>

      <span class="hidden m:inline-block">Reply</span>
    </a>

</footer>

  </div>
</div>


      </div>
    </details>

                    <details class="comment-wrapper js-comment-wrapper comment-wrapper--deep-0 root" open>
      <summary>
        <span class="m:mx-1 inline-block align-middle">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="aoo6qt25nqzxt9l5f3v0v8mi8tg1uxvf" class="crayons-icon expanded"><title id="aoo6qt25nqzxt9l5f3v0v8mi8tg1uxvf">Collapse</title>
    <path d="M12 10.677L8 6.935 9 6l3 2.807L15 6l1 .935-4 3.742zm0 4.517L9 18l-1-.935 4-3.742 4 3.742-1 .934-3-2.805z"></path>
</svg>

          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="atp6piglq0yvhtwo6vlntxhxapjgn8fi" class="crayons-icon collapsed"><title id="atp6piglq0yvhtwo6vlntxhxapjgn8fi">Expand</title>
    <path d="M12 18l-4-3.771 1-.943 3 2.829 3-2.829 1 .943L12 18zm0-10.115l-3 2.829-1-.943L12 6l4 3.771-1 .942-3-2.828z"></path>
</svg>

        </span>
        <span class="js-collapse-comment-content inline-block align-middle"></span>
      </summary>
      <div
        id="comment-node-704666"
        class="
          comment single-comment-node

          root
          comment--deep-0

        "
        data-comment-id="704666"
        data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e2ae"
        data-comment-author-id="523334"
        data-content-user-id="523334">

<div class="comment__inner">
    <a href="https://dev.to/melfordd" class="shrink-0 crayons-avatar m:crayons-avatar--l mt-4 m:mt-3">
    <img class="crayons-avatar__image" width="32" height="32" src="https://res.cloudinary.com/practicaldev/image/fetch/s--gA0HvhUq--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/523334/69fc98ad-895b-4bad-8b73-8f8affaa80ec.jpeg" alt="melfordd profile image" />
  </a>


  <div class="inner-comment comment__details">
    <div class="comment__content crayons-card">



        <header class="comment__header">
  <a href="https://dev.to/melfordd" class="crayons-link crayons-link--secondary flex items-center fw-medium">
    <span class="js-comment-username">Melford Birakor </span>
  </a>

  <span class="color-base-30 px-2" role="presentation">&bull;</span>

<a href="https://dev.to/melfordd/comment/1e2ae" class="comment-date crayons-link crayons-link--secondary fs-s">
  <time datetime="2021-04-29T17:28:46Z">
    Apr 29
  </time>

    &bull; Edited
    <span class="hidden m:inline-block">
      on <time datetime="2021-04-29T17:29:18Z">
      Apr 29</time>
    </span>
</a>


  <div class="comment__dropdown">
    <button class="dropbtn comment__dropdown-trigger crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon" aria-label="Toggle dropdown menu" aria-haspopup="true">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="al1z92kiq3jgjnob1d48ulm6pvroniaw" class="crayons-icon pointer-events-none"><title id="al1z92kiq3jgjnob1d48ulm6pvroniaw">Dropdown menu</title>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.25 12a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm5.25 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm3.75 1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
</svg>

    </button>
    <ul class="crayons-dropdown p-1 right-1 s:right-0 s:left-auto fs-base dropdown">
      <li><a href="https://dev.to/melfordd/comment/1e2ae" class="crayons-link crayons-link--block permalink-copybtn" aria-label="Copy link to Melford Birakor 's comment" data-no-instant>Copy link</a></li>
      <li class="comment-actions hidden" data-user-id="523334" data-action="settings-button" data-path="https://dev.to/melfordd/comment/1e2ae/settings" aria-label="Go to Melford Birakor 's comment settings"></li>
      <li class="comment-actions hidden" data-action="hide-button" data-commentable-user-id="435270" data-user-id="523334">
        <a href="#" class="crayons-link crayons-link--block hide-comment" data-hide-type="hide" data-comment-id="704666" aria-label="Hide Melford Birakor 's comment">
          Hide
        </a>
      </li>
      <li class="mod-actions hidden mod-actions-comment-button" data-path="https://dev.to/melfordd/comment/1e2ae/mod" aria-label="Moderate Melford Birakor 's comment"></li>
      <li class="report-abuse-link-wrapper" data-path="/report-abuse?url=https://dev.to/melfordd/comment/1e2ae" aria-label="Report Melford Birakor 's comment as abusive or violating our code of conduct and/or terms and conditions"></li>
      <li class="current-user-actions"></li>
    </ul>
  </div>
</header>


        <div
          class="
            comment__body
            text-styles
            text-styles--secondary
            body

          ">
          <p>I'm a Nigerian and this article cuts so deep into the truth we are facing as developers. Thanks for sharing such a powerful content for the world to know a quarter of our challenges. </p>


        </div>
    </div>

    <footer class="comment__footer print-hidden">
  <button
    class="crayons-btn crayons-btn--ghost crayons-btn--icon-left crayons-btn--s mr-1 reaction-like inline-flex reaction-button"
    id="button-for-comment-704666"
    data-comment-id="704666"
    title="heart">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="aiwot7soa9whex2vcqmmixjc3ik0lxyy" class="crayons-icon reaction-icon not-reacted"><title id="aiwot7soa9whex2vcqmmixjc3ik0lxyy">Favorite heart outline button</title><path d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"></path></svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="aha5ki6owwbc3ade9ablixyu3u1pxmeu" class="crayons-icon reaction-icon--like reaction-icon reacted"><title id="aha5ki6owwbc3ade9ablixyu3u1pxmeu">Favorite heart outline button</title>
    <path d="M5.116 12.595a4.875 4.875 0 015.56-7.68h-.002L7.493 8.098l1.06 1.061 3.181-3.182a4.875 4.875 0 016.895 6.894L12 19.5l-6.894-6.894.01-.01z"></path>
</svg>

    <span class="reactions-count">
      4
    </span>
    <span class="reactions-label hidden m:inline-block">
      &nbsp;likes
    </span>
  </button>

    <a
      class="actions crayons-btn crayons-btn--ghost crayons-btn--s crayons-btn--icon-left toggle-reply-form mr-1 inline-flex"
      href="#/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/new/1e2ae"
      data-comment-id="704666"
      data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e2ae"
      rel="nofollow">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="a8x7lx3kck2ce66l26mc6c9270bagwgw" class="crayons-icon reaction-icon not-reacted"><title id="a8x7lx3kck2ce66l26mc6c9270bagwgw">Comment button</title><path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path></svg>

      <span class="hidden m:inline-block">Reply</span>
    </a>

</footer>

  </div>
</div>
    <details class="comment-wrapper js-comment-wrapper comment-wrapper--deep-1 child" open>
      <summary>
        <span class="mx-0 inline-block align-middle">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="a9788kv4h9dwf3wbvbhii5e0fxz31nb4" class="crayons-icon expanded"><title id="a9788kv4h9dwf3wbvbhii5e0fxz31nb4">Collapse</title>
    <path d="M12 10.677L8 6.935 9 6l3 2.807L15 6l1 .935-4 3.742zm0 4.517L9 18l-1-.935 4-3.742 4 3.742-1 .934-3-2.805z"></path>
</svg>

          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="aj7wvo71cgnc5g0ccnzpo1to27vqa2h7" class="crayons-icon collapsed"><title id="aj7wvo71cgnc5g0ccnzpo1to27vqa2h7">Expand</title>
    <path d="M12 18l-4-3.771 1-.943 3 2.829 3-2.829 1 .943L12 18zm0-10.115l-3 2.829-1-.943L12 6l4 3.771-1 .942-3-2.828z"></path>
</svg>

        </span>
        <span class="js-collapse-comment-content inline-block align-middle"></span>
      </summary>
      <div
        id="comment-node-704927"
        class="
          comment single-comment-node

          child
          comment--deep-1

        "
        data-comment-id="704927"
        data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e2kf"
        data-comment-author-id="435270"
        data-content-user-id="435270">

<div class="comment__inner">
    <a href="https://dev.to/resourcefulmind" class="shrink-0 crayons-avatar mt-4">
    <img class="crayons-avatar__image" width="32" height="32" src="https://res.cloudinary.com/practicaldev/image/fetch/s--6y949wgP--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/435270/7ca3876e-ca85-478e-a2fa-c634f4a78121.png" alt="resourcefulmind profile image" />
  </a>


  <div class="inner-comment comment__details">
    <div class="comment__content crayons-card">



        <header class="comment__header">
  <a href="https://dev.to/resourcefulmind" class="crayons-link crayons-link--secondary flex items-center fw-medium">
    <span class="js-comment-username">Opeyemi Stephen</span>
      <span class="crayons-tooltip inline-block spec-op-author -mr-2" data-tooltip="Author">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="ards2ghev75a6kukw2prazte44y7gom7" class="crayons-icon"><title id="ards2ghev75a6kukw2prazte44y7gom7">Author</title>
    <path d="M12 8.25a6 6 0 110 12 6 6 0 010-12zm0 2.625l-.992 2.01-2.218.322 1.605 1.564-.379 2.21L12 15.937l1.984 1.043-.379-2.209 1.605-1.564-2.218-.323L12 10.875zm.75-6.376l3.75.001v2.25l-1.022.854a7.45 7.45 0 00-2.728-.817V4.5zm-1.5 0v2.288a7.451 7.451 0 00-2.727.816L7.5 6.75V4.5h3.75z"></path>
</svg>

      </span>
  </a>

  <span class="color-base-30 px-2" role="presentation">&bull;</span>

<a href="https://dev.to/resourcefulmind/comment/1e2kf" class="comment-date crayons-link crayons-link--secondary fs-s">
  <time datetime="2021-04-30T07:12:57Z">
    Apr 30
  </time>

</a>


  <div class="comment__dropdown">
    <button class="dropbtn comment__dropdown-trigger crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon" aria-label="Toggle dropdown menu" aria-haspopup="true">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="ab1tz3za502zo20t63crmck7m1i14xpg" class="crayons-icon pointer-events-none"><title id="ab1tz3za502zo20t63crmck7m1i14xpg">Dropdown menu</title>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.25 12a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm5.25 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm3.75 1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
</svg>

    </button>
    <ul class="crayons-dropdown p-1 right-1 s:right-0 s:left-auto fs-base dropdown">
      <li><a href="https://dev.to/resourcefulmind/comment/1e2kf" class="crayons-link crayons-link--block permalink-copybtn" aria-label="Copy link to Opeyemi Stephen's comment" data-no-instant>Copy link</a></li>
      <li class="comment-actions hidden" data-user-id="435270" data-action="settings-button" data-path="https://dev.to/resourcefulmind/comment/1e2kf/settings" aria-label="Go to Opeyemi Stephen's comment settings"></li>
      <li class="comment-actions hidden" data-action="hide-button" data-commentable-user-id="435270" data-user-id="435270">
        <a href="#" class="crayons-link crayons-link--block hide-comment" data-hide-type="hide" data-comment-id="704927" aria-label="Hide Opeyemi Stephen's comment">
          Hide
        </a>
      </li>
      <li class="mod-actions hidden mod-actions-comment-button" data-path="https://dev.to/resourcefulmind/comment/1e2kf/mod" aria-label="Moderate Opeyemi Stephen's comment"></li>
      <li class="report-abuse-link-wrapper" data-path="/report-abuse?url=https://dev.to/resourcefulmind/comment/1e2kf" aria-label="Report Opeyemi Stephen's comment as abusive or violating our code of conduct and/or terms and conditions"></li>
      <li class="current-user-actions"></li>
    </ul>
  </div>
</header>


        <div
          class="
            comment__body
            text-styles
            text-styles--secondary
            body

          ">
          <p>That’s the sole reason I titled it “Beginner’s Journey”</p>

<p>Most people will only talk about the good times and getting the perfect job...no one talks about this enough.</p>


        </div>
    </div>

    <footer class="comment__footer print-hidden">
  <button
    class="crayons-btn crayons-btn--ghost crayons-btn--icon-left crayons-btn--s mr-1 reaction-like inline-flex reaction-button"
    id="button-for-comment-704927"
    data-comment-id="704927"
    title="heart">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="a1a3letliopqoevaq7pfnglklfuccqgp" class="crayons-icon reaction-icon not-reacted"><title id="a1a3letliopqoevaq7pfnglklfuccqgp">Favorite heart outline button</title><path d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"></path></svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="a9vjetlaft2bkipgtaew1wmgh1z6meid" class="crayons-icon reaction-icon--like reaction-icon reacted"><title id="a9vjetlaft2bkipgtaew1wmgh1z6meid">Favorite heart outline button</title>
    <path d="M5.116 12.595a4.875 4.875 0 015.56-7.68h-.002L7.493 8.098l1.06 1.061 3.181-3.182a4.875 4.875 0 016.895 6.894L12 19.5l-6.894-6.894.01-.01z"></path>
</svg>

    <span class="reactions-count">
      4
    </span>
    <span class="reactions-label hidden m:inline-block">
      &nbsp;likes
    </span>
  </button>

    <a
      class="actions crayons-btn crayons-btn--ghost crayons-btn--s crayons-btn--icon-left toggle-reply-form mr-1 inline-flex"
      href="#/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/new/1e2kf"
      data-comment-id="704927"
      data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e2kf"
      rel="nofollow">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="adl1lhbtuuxer6f54fdmf5wy0wk0r99i" class="crayons-icon reaction-icon not-reacted"><title id="adl1lhbtuuxer6f54fdmf5wy0wk0r99i">Comment button</title><path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path></svg>

      <span class="hidden m:inline-block">Reply</span>
    </a>

</footer>

  </div>
</div>


      </div>
    </details>


      </div>
    </details>

                    <details class="comment-wrapper js-comment-wrapper comment-wrapper--deep-0 root" open>
      <summary>
        <span class="m:mx-1 inline-block align-middle">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="aap5ej0jg78x0ezruw6rezfbp87r3y32" class="crayons-icon expanded"><title id="aap5ej0jg78x0ezruw6rezfbp87r3y32">Collapse</title>
    <path d="M12 10.677L8 6.935 9 6l3 2.807L15 6l1 .935-4 3.742zm0 4.517L9 18l-1-.935 4-3.742 4 3.742-1 .934-3-2.805z"></path>
</svg>

          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="a3wyechyntfzs129czm45i41sf8f7xie" class="crayons-icon collapsed"><title id="a3wyechyntfzs129czm45i41sf8f7xie">Expand</title>
    <path d="M12 18l-4-3.771 1-.943 3 2.829 3-2.829 1 .943L12 18zm0-10.115l-3 2.829-1-.943L12 6l4 3.771-1 .942-3-2.828z"></path>
</svg>

        </span>
        <span class="js-collapse-comment-content inline-block align-middle"></span>
      </summary>
      <div
        id="comment-node-707398"
        class="
          comment single-comment-node

          root
          comment--deep-0

        "
        data-comment-id="707398"
        data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e6bg"
        data-comment-author-id="570041"
        data-content-user-id="570041">

<div class="comment__inner">
    <a href="https://dev.to/ibookdrupal" class="shrink-0 crayons-avatar m:crayons-avatar--l mt-4 m:mt-3">
    <img class="crayons-avatar__image" width="32" height="32" src="https://res.cloudinary.com/practicaldev/image/fetch/s--VIi7XtJU--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/570041/2fcb3aa5-3830-4b0c-a002-5d44fb28141c.png" alt="ibookdrupal profile image" />
  </a>


  <div class="inner-comment comment__details">
    <div class="comment__content crayons-card">



        <header class="comment__header">
  <a href="https://dev.to/ibookdrupal" class="crayons-link crayons-link--secondary flex items-center fw-medium">
    <span class="js-comment-username">Terngu Hindan Solomon</span>
  </a>

  <span class="color-base-30 px-2" role="presentation">&bull;</span>

<a href="https://dev.to/ibookdrupal/comment/1e6bg" class="comment-date crayons-link crayons-link--secondary fs-s">
  <time datetime="2021-05-04T23:01:15Z">
    May 4
  </time>

</a>


  <div class="comment__dropdown">
    <button class="dropbtn comment__dropdown-trigger crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon" aria-label="Toggle dropdown menu" aria-haspopup="true">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="anivlkfy96b6vscwh1p0mmj3vks1ao4n" class="crayons-icon pointer-events-none"><title id="anivlkfy96b6vscwh1p0mmj3vks1ao4n">Dropdown menu</title>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.25 12a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm5.25 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm3.75 1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
</svg>

    </button>
    <ul class="crayons-dropdown p-1 right-1 s:right-0 s:left-auto fs-base dropdown">
      <li><a href="https://dev.to/ibookdrupal/comment/1e6bg" class="crayons-link crayons-link--block permalink-copybtn" aria-label="Copy link to Terngu Hindan Solomon's comment" data-no-instant>Copy link</a></li>
      <li class="comment-actions hidden" data-user-id="570041" data-action="settings-button" data-path="https://dev.to/ibookdrupal/comment/1e6bg/settings" aria-label="Go to Terngu Hindan Solomon's comment settings"></li>
      <li class="comment-actions hidden" data-action="hide-button" data-commentable-user-id="435270" data-user-id="570041">
        <a href="#" class="crayons-link crayons-link--block hide-comment" data-hide-type="hide" data-comment-id="707398" aria-label="Hide Terngu Hindan Solomon's comment">
          Hide
        </a>
      </li>
      <li class="mod-actions hidden mod-actions-comment-button" data-path="https://dev.to/ibookdrupal/comment/1e6bg/mod" aria-label="Moderate Terngu Hindan Solomon's comment"></li>
      <li class="report-abuse-link-wrapper" data-path="/report-abuse?url=https://dev.to/ibookdrupal/comment/1e6bg" aria-label="Report Terngu Hindan Solomon's comment as abusive or violating our code of conduct and/or terms and conditions"></li>
      <li class="current-user-actions"></li>
    </ul>
  </div>
</header>


        <div
          class="
            comment__body
            text-styles
            text-styles--secondary
            body

          ">
          <p>So, disheartening, you just said it all. Everything is just skyrocketing everyday; they will wake up and increase charges on your bank transactions plus every calls you make, banks are busy removing some unnecessary charges without informing you.. sigh.. what is that called? But all the same! I always say, whatever it takes to reach there we must get there. Its a matter of time, who you meet, are they the right people that will help in your career life and also understands your situation?<br>
Lets keep the light burning...</p>

<p>#javascript #beginner #firebase #nodejs #tailwindCSS</p>


        </div>
    </div>

    <footer class="comment__footer print-hidden">
  <button
    class="crayons-btn crayons-btn--ghost crayons-btn--icon-left crayons-btn--s mr-1 reaction-like inline-flex reaction-button"
    id="button-for-comment-707398"
    data-comment-id="707398"
    title="heart">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="aovvjmhs9osnhpexmt5z13dvt7d5jluu" class="crayons-icon reaction-icon not-reacted"><title id="aovvjmhs9osnhpexmt5z13dvt7d5jluu">Favorite heart outline button</title><path d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"></path></svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="apsh8hpx9wfnlbd92nycsmocvhrrai25" class="crayons-icon reaction-icon--like reaction-icon reacted"><title id="apsh8hpx9wfnlbd92nycsmocvhrrai25">Favorite heart outline button</title>
    <path d="M5.116 12.595a4.875 4.875 0 015.56-7.68h-.002L7.493 8.098l1.06 1.061 3.181-3.182a4.875 4.875 0 016.895 6.894L12 19.5l-6.894-6.894.01-.01z"></path>
</svg>

    <span class="reactions-count">
      2
    </span>
    <span class="reactions-label hidden m:inline-block">
      &nbsp;likes
    </span>
  </button>

    <a
      class="actions crayons-btn crayons-btn--ghost crayons-btn--s crayons-btn--icon-left toggle-reply-form mr-1 inline-flex"
      href="#/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/new/1e6bg"
      data-comment-id="707398"
      data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e6bg"
      rel="nofollow">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="ad78rf2t7xlct6ucltgeqqkdp0ew65k6" class="crayons-icon reaction-icon not-reacted"><title id="ad78rf2t7xlct6ucltgeqqkdp0ew65k6">Comment button</title><path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path></svg>

      <span class="hidden m:inline-block">Reply</span>
    </a>

</footer>

  </div>
</div>


      </div>
    </details>

                    <details class="comment-wrapper js-comment-wrapper comment-wrapper--deep-0 root" open>
      <summary>
        <span class="m:mx-1 inline-block align-middle">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="aekvcybkob7pxrvpioz90p0n7hgj00c" class="crayons-icon expanded"><title id="aekvcybkob7pxrvpioz90p0n7hgj00c">Collapse</title>
    <path d="M12 10.677L8 6.935 9 6l3 2.807L15 6l1 .935-4 3.742zm0 4.517L9 18l-1-.935 4-3.742 4 3.742-1 .934-3-2.805z"></path>
</svg>

          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="appr6cnvnk06jvpz03zmsly0qrv5recv" class="crayons-icon collapsed"><title id="appr6cnvnk06jvpz03zmsly0qrv5recv">Expand</title>
    <path d="M12 18l-4-3.771 1-.943 3 2.829 3-2.829 1 .943L12 18zm0-10.115l-3 2.829-1-.943L12 6l4 3.771-1 .942-3-2.828z"></path>
</svg>

        </span>
        <span class="js-collapse-comment-content inline-block align-middle"></span>
      </summary>
      <div
        id="comment-node-707828"
        class="
          comment single-comment-node

          root
          comment--deep-0

        "
        data-comment-id="707828"
        data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e724"
        data-comment-author-id="611829"
        data-content-user-id="611829">

<div class="comment__inner">
    <a href="https://dev.to/basepheus_13" class="shrink-0 crayons-avatar m:crayons-avatar--l mt-4 m:mt-3">
    <img class="crayons-avatar__image" width="32" height="32" src="https://res.cloudinary.com/practicaldev/image/fetch/s--tVDd7HUs--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/611829/c2049340-acd6-4e1e-8673-afca5a6ce011.png" alt="basepheus_13 profile image" />
  </a>


  <div class="inner-comment comment__details">
    <div class="comment__content crayons-card">



        <header class="comment__header">
  <a href="https://dev.to/basepheus_13" class="crayons-link crayons-link--secondary flex items-center fw-medium">
    <span class="js-comment-username">Simeon Khuntha</span>
  </a>

  <span class="color-base-30 px-2" role="presentation">&bull;</span>

<a href="https://dev.to/basepheus_13/comment/1e724" class="comment-date crayons-link crayons-link--secondary fs-s">
  <time datetime="2021-05-05T17:33:08Z">
    May 5
  </time>

</a>


  <div class="comment__dropdown">
    <button class="dropbtn comment__dropdown-trigger crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon" aria-label="Toggle dropdown menu" aria-haspopup="true">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="a13j3l8dgbq7763q2epir37o2blvuwug" class="crayons-icon pointer-events-none"><title id="a13j3l8dgbq7763q2epir37o2blvuwug">Dropdown menu</title>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.25 12a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm5.25 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm3.75 1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
</svg>

    </button>
    <ul class="crayons-dropdown p-1 right-1 s:right-0 s:left-auto fs-base dropdown">
      <li><a href="https://dev.to/basepheus_13/comment/1e724" class="crayons-link crayons-link--block permalink-copybtn" aria-label="Copy link to Simeon Khuntha's comment" data-no-instant>Copy link</a></li>
      <li class="comment-actions hidden" data-user-id="611829" data-action="settings-button" data-path="https://dev.to/basepheus_13/comment/1e724/settings" aria-label="Go to Simeon Khuntha's comment settings"></li>
      <li class="comment-actions hidden" data-action="hide-button" data-commentable-user-id="435270" data-user-id="611829">
        <a href="#" class="crayons-link crayons-link--block hide-comment" data-hide-type="hide" data-comment-id="707828" aria-label="Hide Simeon Khuntha's comment">
          Hide
        </a>
      </li>
      <li class="mod-actions hidden mod-actions-comment-button" data-path="https://dev.to/basepheus_13/comment/1e724/mod" aria-label="Moderate Simeon Khuntha's comment"></li>
      <li class="report-abuse-link-wrapper" data-path="/report-abuse?url=https://dev.to/basepheus_13/comment/1e724" aria-label="Report Simeon Khuntha's comment as abusive or violating our code of conduct and/or terms and conditions"></li>
      <li class="current-user-actions"></li>
    </ul>
  </div>
</header>


        <div
          class="
            comment__body
            text-styles
            text-styles--secondary
            body

          ">
          <p>Here in Malawi, at least per my observation, we have somewhat the zame situation on the data bundle side. The cheapest data bundle for one of the networks, TNM, can go as low as 360 Naira for 4GB valid for 2 hours or 1200 Naira for the same 4GB for 12 hours. For longer duration, 1GB valid for 1 day goes for 720 Naira. On the electricity side, at least in the location I stay, lights barely go out. But it is nonetheless disheartening that this is the situation in Nigeria.</p>


        </div>
    </div>

    <footer class="comment__footer print-hidden">
  <button
    class="crayons-btn crayons-btn--ghost crayons-btn--icon-left crayons-btn--s mr-1 reaction-like inline-flex reaction-button"
    id="button-for-comment-707828"
    data-comment-id="707828"
    title="heart">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="arbjvyqeq5893r9sc41bokjzzxd13z25" class="crayons-icon reaction-icon not-reacted"><title id="arbjvyqeq5893r9sc41bokjzzxd13z25">Favorite heart outline button</title><path d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"></path></svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="ajqkinm3toqd2uxvdxw2gtu8i27x6vo1" class="crayons-icon reaction-icon--like reaction-icon reacted"><title id="ajqkinm3toqd2uxvdxw2gtu8i27x6vo1">Favorite heart outline button</title>
    <path d="M5.116 12.595a4.875 4.875 0 015.56-7.68h-.002L7.493 8.098l1.06 1.061 3.181-3.182a4.875 4.875 0 016.895 6.894L12 19.5l-6.894-6.894.01-.01z"></path>
</svg>

    <span class="reactions-count">
      1
    </span>
    <span class="reactions-label hidden m:inline-block">
      &nbsp;like
    </span>
  </button>

    <a
      class="actions crayons-btn crayons-btn--ghost crayons-btn--s crayons-btn--icon-left toggle-reply-form mr-1 inline-flex"
      href="#/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/new/1e724"
      data-comment-id="707828"
      data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e724"
      rel="nofollow">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="a3wjhesjf6d5zbuqa43qgdnwe7mshh9" class="crayons-icon reaction-icon not-reacted"><title id="a3wjhesjf6d5zbuqa43qgdnwe7mshh9">Comment button</title><path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path></svg>

      <span class="hidden m:inline-block">Reply</span>
    </a>

</footer>

  </div>
</div>
    <details class="comment-wrapper js-comment-wrapper comment-wrapper--deep-1 child" open>
      <summary>
        <span class="mx-0 inline-block align-middle">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="atr7tg42c0uuo1nagff21uvnbiak5e1r" class="crayons-icon expanded"><title id="atr7tg42c0uuo1nagff21uvnbiak5e1r">Collapse</title>
    <path d="M12 10.677L8 6.935 9 6l3 2.807L15 6l1 .935-4 3.742zm0 4.517L9 18l-1-.935 4-3.742 4 3.742-1 .934-3-2.805z"></path>
</svg>

          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="adshbrdx6t387z9phlemya0q352ntql9" class="crayons-icon collapsed"><title id="adshbrdx6t387z9phlemya0q352ntql9">Expand</title>
    <path d="M12 18l-4-3.771 1-.943 3 2.829 3-2.829 1 .943L12 18zm0-10.115l-3 2.829-1-.943L12 6l4 3.771-1 .942-3-2.828z"></path>
</svg>

        </span>
        <span class="js-collapse-comment-content inline-block align-middle"></span>
      </summary>
      <div
        id="comment-node-707941"
        class="
          comment single-comment-node

          child
          comment--deep-1

        "
        data-comment-id="707941"
        data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e76d"
        data-comment-author-id="435270"
        data-content-user-id="435270">

<div class="comment__inner">
    <a href="https://dev.to/resourcefulmind" class="shrink-0 crayons-avatar mt-4">
    <img class="crayons-avatar__image" width="32" height="32" src="https://res.cloudinary.com/practicaldev/image/fetch/s--6y949wgP--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/435270/7ca3876e-ca85-478e-a2fa-c634f4a78121.png" alt="resourcefulmind profile image" />
  </a>


  <div class="inner-comment comment__details">
    <div class="comment__content crayons-card">



        <header class="comment__header">
  <a href="https://dev.to/resourcefulmind" class="crayons-link crayons-link--secondary flex items-center fw-medium">
    <span class="js-comment-username">Opeyemi Stephen</span>
      <span class="crayons-tooltip inline-block spec-op-author -mr-2" data-tooltip="Author">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="a8kvoqcr81usbnn7kpleazmsylspnace" class="crayons-icon"><title id="a8kvoqcr81usbnn7kpleazmsylspnace">Author</title>
    <path d="M12 8.25a6 6 0 110 12 6 6 0 010-12zm0 2.625l-.992 2.01-2.218.322 1.605 1.564-.379 2.21L12 15.937l1.984 1.043-.379-2.209 1.605-1.564-2.218-.323L12 10.875zm.75-6.376l3.75.001v2.25l-1.022.854a7.45 7.45 0 00-2.728-.817V4.5zm-1.5 0v2.288a7.451 7.451 0 00-2.727.816L7.5 6.75V4.5h3.75z"></path>
</svg>

      </span>
  </a>

  <span class="color-base-30 px-2" role="presentation">&bull;</span>

<a href="https://dev.to/resourcefulmind/comment/1e76d" class="comment-date crayons-link crayons-link--secondary fs-s">
  <time datetime="2021-05-05T22:56:40Z">
    May 5
  </time>

</a>


  <div class="comment__dropdown">
    <button class="dropbtn comment__dropdown-trigger crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon" aria-label="Toggle dropdown menu" aria-haspopup="true">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="a75k8gehri4s0ahw7r3b44yv3jj78rpb" class="crayons-icon pointer-events-none"><title id="a75k8gehri4s0ahw7r3b44yv3jj78rpb">Dropdown menu</title>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.25 12a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm5.25 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm3.75 1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
</svg>

    </button>
    <ul class="crayons-dropdown p-1 right-1 s:right-0 s:left-auto fs-base dropdown">
      <li><a href="https://dev.to/resourcefulmind/comment/1e76d" class="crayons-link crayons-link--block permalink-copybtn" aria-label="Copy link to Opeyemi Stephen's comment" data-no-instant>Copy link</a></li>
      <li class="comment-actions hidden" data-user-id="435270" data-action="settings-button" data-path="https://dev.to/resourcefulmind/comment/1e76d/settings" aria-label="Go to Opeyemi Stephen's comment settings"></li>
      <li class="comment-actions hidden" data-action="hide-button" data-commentable-user-id="435270" data-user-id="435270">
        <a href="#" class="crayons-link crayons-link--block hide-comment" data-hide-type="hide" data-comment-id="707941" aria-label="Hide Opeyemi Stephen's comment">
          Hide
        </a>
      </li>
      <li class="mod-actions hidden mod-actions-comment-button" data-path="https://dev.to/resourcefulmind/comment/1e76d/mod" aria-label="Moderate Opeyemi Stephen's comment"></li>
      <li class="report-abuse-link-wrapper" data-path="/report-abuse?url=https://dev.to/resourcefulmind/comment/1e76d" aria-label="Report Opeyemi Stephen's comment as abusive or violating our code of conduct and/or terms and conditions"></li>
      <li class="current-user-actions"></li>
    </ul>
  </div>
</header>


        <div
          class="
            comment__body
            text-styles
            text-styles--secondary
            body

          ">
          <p>More strength to you on that data front Chief. Hopefully it becomes less expensive. It’s great you at least have electricity. I’m thinking solar panels now.</p>


        </div>
    </div>

    <footer class="comment__footer print-hidden">
  <button
    class="crayons-btn crayons-btn--ghost crayons-btn--icon-left crayons-btn--s mr-1 reaction-like inline-flex reaction-button"
    id="button-for-comment-707941"
    data-comment-id="707941"
    title="heart">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="a2iwqbl0gi6iaauhua5c2a5b21uwzp58" class="crayons-icon reaction-icon not-reacted"><title id="a2iwqbl0gi6iaauhua5c2a5b21uwzp58">Favorite heart outline button</title><path d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"></path></svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="a5nni2d99xdg3wgjmplxhothb1oe4d83" class="crayons-icon reaction-icon--like reaction-icon reacted"><title id="a5nni2d99xdg3wgjmplxhothb1oe4d83">Favorite heart outline button</title>
    <path d="M5.116 12.595a4.875 4.875 0 015.56-7.68h-.002L7.493 8.098l1.06 1.061 3.181-3.182a4.875 4.875 0 016.895 6.894L12 19.5l-6.894-6.894.01-.01z"></path>
</svg>

    <span class="reactions-count">
      1
    </span>
    <span class="reactions-label hidden m:inline-block">
      &nbsp;like
    </span>
  </button>

    <a
      class="actions crayons-btn crayons-btn--ghost crayons-btn--s crayons-btn--icon-left toggle-reply-form mr-1 inline-flex"
      href="#/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/new/1e76d"
      data-comment-id="707941"
      data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e76d"
      rel="nofollow">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="aj6j6kaarkip08pqj5be4od1lnqeocy6" class="crayons-icon reaction-icon not-reacted"><title id="aj6j6kaarkip08pqj5be4od1lnqeocy6">Comment button</title><path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path></svg>

      <span class="hidden m:inline-block">Reply</span>
    </a>

</footer>

  </div>
</div>
    <details class="comment-wrapper js-comment-wrapper comment-wrapper--deep-2 child" open>
      <summary>
        <span class="mx-0 inline-block align-middle">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="ahblgt4fzdm0oavgdyd99ck4lm02ouie" class="crayons-icon expanded"><title id="ahblgt4fzdm0oavgdyd99ck4lm02ouie">Collapse</title>
    <path d="M12 10.677L8 6.935 9 6l3 2.807L15 6l1 .935-4 3.742zm0 4.517L9 18l-1-.935 4-3.742 4 3.742-1 .934-3-2.805z"></path>
</svg>

          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="aherw683t2011zjiji4z1h23tg35y96a" class="crayons-icon collapsed"><title id="aherw683t2011zjiji4z1h23tg35y96a">Expand</title>
    <path d="M12 18l-4-3.771 1-.943 3 2.829 3-2.829 1 .943L12 18zm0-10.115l-3 2.829-1-.943L12 6l4 3.771-1 .942-3-2.828z"></path>
</svg>

        </span>
        <span class="js-collapse-comment-content inline-block align-middle"></span>
      </summary>
      <div
        id="comment-node-708843"
        class="
          comment single-comment-node

          child
          comment--deep-2

        "
        data-comment-id="708843"
        data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e8f5"
        data-comment-author-id="611829"
        data-content-user-id="611829">

<div class="comment__inner">
    <a href="https://dev.to/basepheus_13" class="shrink-0 crayons-avatar mt-4">
    <img class="crayons-avatar__image" width="32" height="32" src="https://res.cloudinary.com/practicaldev/image/fetch/s--tVDd7HUs--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/611829/c2049340-acd6-4e1e-8673-afca5a6ce011.png" alt="basepheus_13 profile image" />
  </a>


  <div class="inner-comment comment__details">
    <div class="comment__content crayons-card">



        <header class="comment__header">
  <a href="https://dev.to/basepheus_13" class="crayons-link crayons-link--secondary flex items-center fw-medium">
    <span class="js-comment-username">Simeon Khuntha</span>
  </a>

  <span class="color-base-30 px-2" role="presentation">&bull;</span>

<a href="https://dev.to/basepheus_13/comment/1e8f5" class="comment-date crayons-link crayons-link--secondary fs-s">
  <time datetime="2021-05-07T14:52:02Z">
    May 7
  </time>

</a>


  <div class="comment__dropdown">
    <button class="dropbtn comment__dropdown-trigger crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon" aria-label="Toggle dropdown menu" aria-haspopup="true">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="asl4gboem8c4mdlmy2ej9u40vo219qwa" class="crayons-icon pointer-events-none"><title id="asl4gboem8c4mdlmy2ej9u40vo219qwa">Dropdown menu</title>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.25 12a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm5.25 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm3.75 1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
</svg>

    </button>
    <ul class="crayons-dropdown p-1 right-1 s:right-0 s:left-auto fs-base dropdown">
      <li><a href="https://dev.to/basepheus_13/comment/1e8f5" class="crayons-link crayons-link--block permalink-copybtn" aria-label="Copy link to Simeon Khuntha's comment" data-no-instant>Copy link</a></li>
      <li class="comment-actions hidden" data-user-id="611829" data-action="settings-button" data-path="https://dev.to/basepheus_13/comment/1e8f5/settings" aria-label="Go to Simeon Khuntha's comment settings"></li>
      <li class="comment-actions hidden" data-action="hide-button" data-commentable-user-id="435270" data-user-id="611829">
        <a href="#" class="crayons-link crayons-link--block hide-comment" data-hide-type="hide" data-comment-id="708843" aria-label="Hide Simeon Khuntha's comment">
          Hide
        </a>
      </li>
      <li class="mod-actions hidden mod-actions-comment-button" data-path="https://dev.to/basepheus_13/comment/1e8f5/mod" aria-label="Moderate Simeon Khuntha's comment"></li>
      <li class="report-abuse-link-wrapper" data-path="/report-abuse?url=https://dev.to/basepheus_13/comment/1e8f5" aria-label="Report Simeon Khuntha's comment as abusive or violating our code of conduct and/or terms and conditions"></li>
      <li class="current-user-actions"></li>
    </ul>
  </div>
</header>


        <div
          class="
            comment__body
            text-styles
            text-styles--secondary
            body

          ">
          <p>They recently "reduced" the price of the data bundles, but only for those below 3.6GB. The rest are still the same. I guess they targeted the majority of the people since they buy those smaller data bundles. The reduction goes from 3% to around 45% with the smaller the data bundle, the bigger the reduction.</p>


        </div>
    </div>

    <footer class="comment__footer print-hidden">
  <button
    class="crayons-btn crayons-btn--ghost crayons-btn--icon-left crayons-btn--s mr-1 reaction-like inline-flex reaction-button"
    id="button-for-comment-708843"
    data-comment-id="708843"
    title="heart">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="aq9uv07140yrwhnmihi1ffl6wl997xga" class="crayons-icon reaction-icon not-reacted"><title id="aq9uv07140yrwhnmihi1ffl6wl997xga">Favorite heart outline button</title><path d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"></path></svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="a6rnsq4o977m8krlg1qbjm1hx089ru1r" class="crayons-icon reaction-icon--like reaction-icon reacted"><title id="a6rnsq4o977m8krlg1qbjm1hx089ru1r">Favorite heart outline button</title>
    <path d="M5.116 12.595a4.875 4.875 0 015.56-7.68h-.002L7.493 8.098l1.06 1.061 3.181-3.182a4.875 4.875 0 016.895 6.894L12 19.5l-6.894-6.894.01-.01z"></path>
</svg>

    <span class="reactions-count">
      1
    </span>
    <span class="reactions-label hidden m:inline-block">
      &nbsp;like
    </span>
  </button>

    <a
      class="actions crayons-btn crayons-btn--ghost crayons-btn--s crayons-btn--icon-left toggle-reply-form mr-1 inline-flex"
      href="#/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/new/1e8f5"
      data-comment-id="708843"
      data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e8f5"
      rel="nofollow">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="alh61cepcmqeba6ix4up7c4scflbn9pt" class="crayons-icon reaction-icon not-reacted"><title id="alh61cepcmqeba6ix4up7c4scflbn9pt">Comment button</title><path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path></svg>

      <span class="hidden m:inline-block">Reply</span>
    </a>

</footer>

  </div>
</div>


      </div>
    </details>


      </div>
    </details>


      </div>
    </details>

                    <details class="comment-wrapper js-comment-wrapper comment-wrapper--deep-0 root" open>
      <summary>
        <span class="m:mx-1 inline-block align-middle">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="a26kfrdt1edsjkms9z56vhugdy0gbmvg" class="crayons-icon expanded"><title id="a26kfrdt1edsjkms9z56vhugdy0gbmvg">Collapse</title>
    <path d="M12 10.677L8 6.935 9 6l3 2.807L15 6l1 .935-4 3.742zm0 4.517L9 18l-1-.935 4-3.742 4 3.742-1 .934-3-2.805z"></path>
</svg>

          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="a1t42rp0yqhd6e1jp64baqsac4e6sgug" class="crayons-icon collapsed"><title id="a1t42rp0yqhd6e1jp64baqsac4e6sgug">Expand</title>
    <path d="M12 18l-4-3.771 1-.943 3 2.829 3-2.829 1 .943L12 18zm0-10.115l-3 2.829-1-.943L12 6l4 3.771-1 .942-3-2.828z"></path>
</svg>

        </span>
        <span class="js-collapse-comment-content inline-block align-middle"></span>
      </summary>
      <div
        id="comment-node-707461"
        class="
          comment single-comment-node

          root
          comment--deep-0

        "
        data-comment-id="707461"
        data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e6e1"
        data-comment-author-id="625758"
        data-content-user-id="625758">

<div class="comment__inner">
    <a href="https://dev.to/chiefsodipo" class="shrink-0 crayons-avatar m:crayons-avatar--l mt-4 m:mt-3">
    <img class="crayons-avatar__image" width="32" height="32" src="https://res.cloudinary.com/practicaldev/image/fetch/s--bDr89xW7--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/625758/67c0dfe2-e7ef-4cd0-93e6-e3e8a318da29.png" alt="chiefsodipo profile image" />
  </a>


  <div class="inner-comment comment__details">
    <div class="comment__content crayons-card">



        <header class="comment__header">
  <a href="https://dev.to/chiefsodipo" class="crayons-link crayons-link--secondary flex items-center fw-medium">
    <span class="js-comment-username">Chief Harold Sodipo</span>
  </a>

  <span class="color-base-30 px-2" role="presentation">&bull;</span>

<a href="https://dev.to/chiefsodipo/comment/1e6e1" class="comment-date crayons-link crayons-link--secondary fs-s">
  <time datetime="2021-05-05T04:54:40Z">
    May 5
  </time>

</a>


  <div class="comment__dropdown">
    <button class="dropbtn comment__dropdown-trigger crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon" aria-label="Toggle dropdown menu" aria-haspopup="true">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="ass31zmu4500s0m9hqng7n7ih8h6ra0n" class="crayons-icon pointer-events-none"><title id="ass31zmu4500s0m9hqng7n7ih8h6ra0n">Dropdown menu</title>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.25 12a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm5.25 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm3.75 1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
</svg>

    </button>
    <ul class="crayons-dropdown p-1 right-1 s:right-0 s:left-auto fs-base dropdown">
      <li><a href="https://dev.to/chiefsodipo/comment/1e6e1" class="crayons-link crayons-link--block permalink-copybtn" aria-label="Copy link to Chief Harold Sodipo's comment" data-no-instant>Copy link</a></li>
      <li class="comment-actions hidden" data-user-id="625758" data-action="settings-button" data-path="https://dev.to/chiefsodipo/comment/1e6e1/settings" aria-label="Go to Chief Harold Sodipo's comment settings"></li>
      <li class="comment-actions hidden" data-action="hide-button" data-commentable-user-id="435270" data-user-id="625758">
        <a href="#" class="crayons-link crayons-link--block hide-comment" data-hide-type="hide" data-comment-id="707461" aria-label="Hide Chief Harold Sodipo's comment">
          Hide
        </a>
      </li>
      <li class="mod-actions hidden mod-actions-comment-button" data-path="https://dev.to/chiefsodipo/comment/1e6e1/mod" aria-label="Moderate Chief Harold Sodipo's comment"></li>
      <li class="report-abuse-link-wrapper" data-path="/report-abuse?url=https://dev.to/chiefsodipo/comment/1e6e1" aria-label="Report Chief Harold Sodipo's comment as abusive or violating our code of conduct and/or terms and conditions"></li>
      <li class="current-user-actions"></li>
    </ul>
  </div>
</header>


        <div
          class="
            comment__body
            text-styles
            text-styles--secondary
            body

          ">
          <p>The strange thing is that the gruelling Nigerian situation actually affects most of the working population (with the exception being politicians, wealthy business men, entrenched oil and gas people and crooks) the pain is being felt by those you would assume are impervious to the rigors of a collapsed economy.</p>

<p>It must be much more debilitating for Nigerian youth.</p>

<p>A terrible shame, the direct result of years of greed, theft and wanton ineptitude.</p>


        </div>
    </div>

    <footer class="comment__footer print-hidden">
  <button
    class="crayons-btn crayons-btn--ghost crayons-btn--icon-left crayons-btn--s mr-1 reaction-like inline-flex reaction-button"
    id="button-for-comment-707461"
    data-comment-id="707461"
    title="heart">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="ai4f59weimwt2q86oins2j0zt5vnstsn" class="crayons-icon reaction-icon not-reacted"><title id="ai4f59weimwt2q86oins2j0zt5vnstsn">Favorite heart outline button</title><path d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"></path></svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="a39w024bc6pm3rr9q9um6e1i0v3rnnd9" class="crayons-icon reaction-icon--like reaction-icon reacted"><title id="a39w024bc6pm3rr9q9um6e1i0v3rnnd9">Favorite heart outline button</title>
    <path d="M5.116 12.595a4.875 4.875 0 015.56-7.68h-.002L7.493 8.098l1.06 1.061 3.181-3.182a4.875 4.875 0 016.895 6.894L12 19.5l-6.894-6.894.01-.01z"></path>
</svg>

    <span class="reactions-count">
      1
    </span>
    <span class="reactions-label hidden m:inline-block">
      &nbsp;like
    </span>
  </button>

    <a
      class="actions crayons-btn crayons-btn--ghost crayons-btn--s crayons-btn--icon-left toggle-reply-form mr-1 inline-flex"
      href="#/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/new/1e6e1"
      data-comment-id="707461"
      data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e6e1"
      rel="nofollow">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="aokcbedztv90mkc1kl7pm12t8nmikobi" class="crayons-icon reaction-icon not-reacted"><title id="aokcbedztv90mkc1kl7pm12t8nmikobi">Comment button</title><path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path></svg>

      <span class="hidden m:inline-block">Reply</span>
    </a>

</footer>

  </div>
</div>
    <details class="comment-wrapper js-comment-wrapper comment-wrapper--deep-1 child" open>
      <summary>
        <span class="mx-0 inline-block align-middle">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="a1poi6yaqza6pagmi1l406tv43ax1hwy" class="crayons-icon expanded"><title id="a1poi6yaqza6pagmi1l406tv43ax1hwy">Collapse</title>
    <path d="M12 10.677L8 6.935 9 6l3 2.807L15 6l1 .935-4 3.742zm0 4.517L9 18l-1-.935 4-3.742 4 3.742-1 .934-3-2.805z"></path>
</svg>

          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="aqmgi9u3sd8eylc6e25zqtcpcby9w02m" class="crayons-icon collapsed"><title id="aqmgi9u3sd8eylc6e25zqtcpcby9w02m">Expand</title>
    <path d="M12 18l-4-3.771 1-.943 3 2.829 3-2.829 1 .943L12 18zm0-10.115l-3 2.829-1-.943L12 6l4 3.771-1 .942-3-2.828z"></path>
</svg>

        </span>
        <span class="js-collapse-comment-content inline-block align-middle"></span>
      </summary>
      <div
        id="comment-node-707587"
        class="
          comment single-comment-node

          child
          comment--deep-1

        "
        data-comment-id="707587"
        data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e6in"
        data-comment-author-id="435270"
        data-content-user-id="435270">

<div class="comment__inner">
    <a href="https://dev.to/resourcefulmind" class="shrink-0 crayons-avatar mt-4">
    <img class="crayons-avatar__image" width="32" height="32" src="https://res.cloudinary.com/practicaldev/image/fetch/s--6y949wgP--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/435270/7ca3876e-ca85-478e-a2fa-c634f4a78121.png" alt="resourcefulmind profile image" />
  </a>


  <div class="inner-comment comment__details">
    <div class="comment__content crayons-card">



        <header class="comment__header">
  <a href="https://dev.to/resourcefulmind" class="crayons-link crayons-link--secondary flex items-center fw-medium">
    <span class="js-comment-username">Opeyemi Stephen</span>
      <span class="crayons-tooltip inline-block spec-op-author -mr-2" data-tooltip="Author">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="akcb8zwjg5e1vres74vs5m8mbojur7m7" class="crayons-icon"><title id="akcb8zwjg5e1vres74vs5m8mbojur7m7">Author</title>
    <path d="M12 8.25a6 6 0 110 12 6 6 0 010-12zm0 2.625l-.992 2.01-2.218.322 1.605 1.564-.379 2.21L12 15.937l1.984 1.043-.379-2.209 1.605-1.564-2.218-.323L12 10.875zm.75-6.376l3.75.001v2.25l-1.022.854a7.45 7.45 0 00-2.728-.817V4.5zm-1.5 0v2.288a7.451 7.451 0 00-2.727.816L7.5 6.75V4.5h3.75z"></path>
</svg>

      </span>
  </a>

  <span class="color-base-30 px-2" role="presentation">&bull;</span>

<a href="https://dev.to/resourcefulmind/comment/1e6in" class="comment-date crayons-link crayons-link--secondary fs-s">
  <time datetime="2021-05-05T09:56:39Z">
    May 5
  </time>

</a>


  <div class="comment__dropdown">
    <button class="dropbtn comment__dropdown-trigger crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon" aria-label="Toggle dropdown menu" aria-haspopup="true">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="afmrkczq1wr4a1q5z7x2fxbpb64rwjwr" class="crayons-icon pointer-events-none"><title id="afmrkczq1wr4a1q5z7x2fxbpb64rwjwr">Dropdown menu</title>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.25 12a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm5.25 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm3.75 1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
</svg>

    </button>
    <ul class="crayons-dropdown p-1 right-1 s:right-0 s:left-auto fs-base dropdown">
      <li><a href="https://dev.to/resourcefulmind/comment/1e6in" class="crayons-link crayons-link--block permalink-copybtn" aria-label="Copy link to Opeyemi Stephen's comment" data-no-instant>Copy link</a></li>
      <li class="comment-actions hidden" data-user-id="435270" data-action="settings-button" data-path="https://dev.to/resourcefulmind/comment/1e6in/settings" aria-label="Go to Opeyemi Stephen's comment settings"></li>
      <li class="comment-actions hidden" data-action="hide-button" data-commentable-user-id="435270" data-user-id="435270">
        <a href="#" class="crayons-link crayons-link--block hide-comment" data-hide-type="hide" data-comment-id="707587" aria-label="Hide Opeyemi Stephen's comment">
          Hide
        </a>
      </li>
      <li class="mod-actions hidden mod-actions-comment-button" data-path="https://dev.to/resourcefulmind/comment/1e6in/mod" aria-label="Moderate Opeyemi Stephen's comment"></li>
      <li class="report-abuse-link-wrapper" data-path="/report-abuse?url=https://dev.to/resourcefulmind/comment/1e6in" aria-label="Report Opeyemi Stephen's comment as abusive or violating our code of conduct and/or terms and conditions"></li>
      <li class="current-user-actions"></li>
    </ul>
  </div>
</header>


        <div
          class="
            comment__body
            text-styles
            text-styles--secondary
            body

          ">
          <p>I tell you Chief. The situation is sickening. I had to choose between going to charge last night and standing the risk of getting shot. </p>

<p>Young boys killing themselves in my area as we speak, cultism on a high and it’s not just because they chose to but because there was no fundamental plan laid down by the government in the first place.</p>

<p>How do you plan a party when you don’t know how many people are coming? </p>

<p>How do you plan for a nation when we don’t have a very calculated guess of how many citizens the country even has?</p>


        </div>
    </div>

    <footer class="comment__footer print-hidden">
  <button
    class="crayons-btn crayons-btn--ghost crayons-btn--icon-left crayons-btn--s mr-1 reaction-like inline-flex reaction-button"
    id="button-for-comment-707587"
    data-comment-id="707587"
    title="heart">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="aahhr04a5y1bpgrl44tedekfhb3d5btl" class="crayons-icon reaction-icon not-reacted"><title id="aahhr04a5y1bpgrl44tedekfhb3d5btl">Favorite heart outline button</title><path d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"></path></svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="anzadl8r95kimy1quye7de8nzgb9i6ec" class="crayons-icon reaction-icon--like reaction-icon reacted"><title id="anzadl8r95kimy1quye7de8nzgb9i6ec">Favorite heart outline button</title>
    <path d="M5.116 12.595a4.875 4.875 0 015.56-7.68h-.002L7.493 8.098l1.06 1.061 3.181-3.182a4.875 4.875 0 016.895 6.894L12 19.5l-6.894-6.894.01-.01z"></path>
</svg>

    <span class="reactions-count">
      1
    </span>
    <span class="reactions-label hidden m:inline-block">
      &nbsp;like
    </span>
  </button>

    <a
      class="actions crayons-btn crayons-btn--ghost crayons-btn--s crayons-btn--icon-left toggle-reply-form mr-1 inline-flex"
      href="#/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/new/1e6in"
      data-comment-id="707587"
      data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e6in"
      rel="nofollow">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="an4thdeky0bvpp72kze7v9t831rgc0s5" class="crayons-icon reaction-icon not-reacted"><title id="an4thdeky0bvpp72kze7v9t831rgc0s5">Comment button</title><path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path></svg>

      <span class="hidden m:inline-block">Reply</span>
    </a>

</footer>

  </div>
</div>


      </div>
    </details>


      </div>
    </details>

                    <details class="comment-wrapper js-comment-wrapper comment-wrapper--deep-0 root" open>
      <summary>
        <span class="m:mx-1 inline-block align-middle">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="a2084v62zl8jm8husi4ub1qrxwi8ge3x" class="crayons-icon expanded"><title id="a2084v62zl8jm8husi4ub1qrxwi8ge3x">Collapse</title>
    <path d="M12 10.677L8 6.935 9 6l3 2.807L15 6l1 .935-4 3.742zm0 4.517L9 18l-1-.935 4-3.742 4 3.742-1 .934-3-2.805z"></path>
</svg>

          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="asxht62pgrv9cweuvpd8ums4jdgbkzhk" class="crayons-icon collapsed"><title id="asxht62pgrv9cweuvpd8ums4jdgbkzhk">Expand</title>
    <path d="M12 18l-4-3.771 1-.943 3 2.829 3-2.829 1 .943L12 18zm0-10.115l-3 2.829-1-.943L12 6l4 3.771-1 .942-3-2.828z"></path>
</svg>

        </span>
        <span class="js-collapse-comment-content inline-block align-middle"></span>
      </summary>
      <div
        id="comment-node-709131"
        class="
          comment single-comment-node

          root
          comment--deep-0

        "
        data-comment-id="709131"
        data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e907"
        data-comment-author-id="362099"
        data-content-user-id="362099">

<div class="comment__inner">
    <a href="https://dev.to/danoseun" class="shrink-0 crayons-avatar m:crayons-avatar--l mt-4 m:mt-3">
    <img class="crayons-avatar__image" width="32" height="32" src="https://res.cloudinary.com/practicaldev/image/fetch/s--u-cKSF3t--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/362099/cb936505-b804-4aca-b9e3-e9978ad68a72.png" alt="danoseun profile image" />
  </a>


  <div class="inner-comment comment__details">
    <div class="comment__content crayons-card">



        <header class="comment__header">
  <a href="https://dev.to/danoseun" class="crayons-link crayons-link--secondary flex items-center fw-medium">
    <span class="js-comment-username">OLUWASEUN SOMEFUN</span>
  </a>

  <span class="color-base-30 px-2" role="presentation">&bull;</span>

<a href="https://dev.to/danoseun/comment/1e907" class="comment-date crayons-link crayons-link--secondary fs-s">
  <time datetime="2021-05-08T00:02:13Z">
    May 8
  </time>

</a>


  <div class="comment__dropdown">
    <button class="dropbtn comment__dropdown-trigger crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon" aria-label="Toggle dropdown menu" aria-haspopup="true">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="a7lnstf4u3uvab4535ha3qagdf21gofl" class="crayons-icon pointer-events-none"><title id="a7lnstf4u3uvab4535ha3qagdf21gofl">Dropdown menu</title>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.25 12a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm5.25 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm3.75 1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
</svg>

    </button>
    <ul class="crayons-dropdown p-1 right-1 s:right-0 s:left-auto fs-base dropdown">
      <li><a href="https://dev.to/danoseun/comment/1e907" class="crayons-link crayons-link--block permalink-copybtn" aria-label="Copy link to OLUWASEUN SOMEFUN's comment" data-no-instant>Copy link</a></li>
      <li class="comment-actions hidden" data-user-id="362099" data-action="settings-button" data-path="https://dev.to/danoseun/comment/1e907/settings" aria-label="Go to OLUWASEUN SOMEFUN's comment settings"></li>
      <li class="comment-actions hidden" data-action="hide-button" data-commentable-user-id="435270" data-user-id="362099">
        <a href="#" class="crayons-link crayons-link--block hide-comment" data-hide-type="hide" data-comment-id="709131" aria-label="Hide OLUWASEUN SOMEFUN's comment">
          Hide
        </a>
      </li>
      <li class="mod-actions hidden mod-actions-comment-button" data-path="https://dev.to/danoseun/comment/1e907/mod" aria-label="Moderate OLUWASEUN SOMEFUN's comment"></li>
      <li class="report-abuse-link-wrapper" data-path="/report-abuse?url=https://dev.to/danoseun/comment/1e907" aria-label="Report OLUWASEUN SOMEFUN's comment as abusive or violating our code of conduct and/or terms and conditions"></li>
      <li class="current-user-actions"></li>
    </ul>
  </div>
</header>


        <div
          class="
            comment__body
            text-styles
            text-styles--secondary
            body

          ">
          <p>I read through all the comments. This was the article I wish I wrote when I started out because everything in here even with the unwritten ones are totally relatable. However, I try as much as possible to bring everyone around me up by helping via knowledge sharing and other means as well. A wonderful piece from the heart and kudos bro! Kudos to all wishing to help as well in the comments section and kudos to those that are still learning and trying to come up. Hope you keep pushing through irrespective of the odds and never give up because you will be celebrated soon!</p>


        </div>
    </div>

    <footer class="comment__footer print-hidden">
  <button
    class="crayons-btn crayons-btn--ghost crayons-btn--icon-left crayons-btn--s mr-1 reaction-like inline-flex reaction-button"
    id="button-for-comment-709131"
    data-comment-id="709131"
    title="heart">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="accaxc98nf6zvmzmktllpb94p1s6t7qb" class="crayons-icon reaction-icon not-reacted"><title id="accaxc98nf6zvmzmktllpb94p1s6t7qb">Favorite heart outline button</title><path d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"></path></svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="ak9dgz65k9w12gcqat78dy7mb8toek7u" class="crayons-icon reaction-icon--like reaction-icon reacted"><title id="ak9dgz65k9w12gcqat78dy7mb8toek7u">Favorite heart outline button</title>
    <path d="M5.116 12.595a4.875 4.875 0 015.56-7.68h-.002L7.493 8.098l1.06 1.061 3.181-3.182a4.875 4.875 0 016.895 6.894L12 19.5l-6.894-6.894.01-.01z"></path>
</svg>

    <span class="reactions-count">
      1
    </span>
    <span class="reactions-label hidden m:inline-block">
      &nbsp;like
    </span>
  </button>

    <a
      class="actions crayons-btn crayons-btn--ghost crayons-btn--s crayons-btn--icon-left toggle-reply-form mr-1 inline-flex"
      href="#/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/new/1e907"
      data-comment-id="709131"
      data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e907"
      rel="nofollow">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="abj3b8q84h10hyzxjw3oa3ftocjsvcbe" class="crayons-icon reaction-icon not-reacted"><title id="abj3b8q84h10hyzxjw3oa3ftocjsvcbe">Comment button</title><path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path></svg>

      <span class="hidden m:inline-block">Reply</span>
    </a>

</footer>

  </div>
</div>


      </div>
    </details>

                    <details class="comment-wrapper js-comment-wrapper comment-wrapper--deep-0 root" open>
      <summary>
        <span class="m:mx-1 inline-block align-middle">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="at7sjixk2zvr6e9u8it15btn39p8ejyr" class="crayons-icon expanded"><title id="at7sjixk2zvr6e9u8it15btn39p8ejyr">Collapse</title>
    <path d="M12 10.677L8 6.935 9 6l3 2.807L15 6l1 .935-4 3.742zm0 4.517L9 18l-1-.935 4-3.742 4 3.742-1 .934-3-2.805z"></path>
</svg>

          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="a6qjqbe8ic81zgkranp3ud7onqhxo2gj" class="crayons-icon collapsed"><title id="a6qjqbe8ic81zgkranp3ud7onqhxo2gj">Expand</title>
    <path d="M12 18l-4-3.771 1-.943 3 2.829 3-2.829 1 .943L12 18zm0-10.115l-3 2.829-1-.943L12 6l4 3.771-1 .942-3-2.828z"></path>
</svg>

        </span>
        <span class="js-collapse-comment-content inline-block align-middle"></span>
      </summary>
      <div
        id="comment-node-705405"
        class="
          comment single-comment-node

          root
          comment--deep-0

        "
        data-comment-id="705405"
        data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e3cp"
        data-comment-author-id="281899"
        data-content-user-id="281899">

<div class="comment__inner">
    <a href="https://dev.to/nwajeigideon" class="shrink-0 crayons-avatar m:crayons-avatar--l mt-4 m:mt-3">
    <img class="crayons-avatar__image" width="32" height="32" src="https://res.cloudinary.com/practicaldev/image/fetch/s--P7LRtw1z--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/281899/aa7927a3-1ff6-4aa6-938d-41fd9f4f937d.jpg" alt="nwajeigideon profile image" />
  </a>


  <div class="inner-comment comment__details">
    <div class="comment__content crayons-card">



        <header class="comment__header">
  <a href="https://dev.to/nwajeigideon" class="crayons-link crayons-link--secondary flex items-center fw-medium">
    <span class="js-comment-username">Nwajei Gideon</span>
  </a>

  <span class="color-base-30 px-2" role="presentation">&bull;</span>

<a href="https://dev.to/nwajeigideon/comment/1e3cp" class="comment-date crayons-link crayons-link--secondary fs-s">
  <time datetime="2021-05-01T00:17:22Z">
    May 1
  </time>

</a>


  <div class="comment__dropdown">
    <button class="dropbtn comment__dropdown-trigger crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon" aria-label="Toggle dropdown menu" aria-haspopup="true">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="agkbw0jekbvxwrmvqjvbzqweh62a81ym" class="crayons-icon pointer-events-none"><title id="agkbw0jekbvxwrmvqjvbzqweh62a81ym">Dropdown menu</title>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.25 12a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm5.25 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm3.75 1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
</svg>

    </button>
    <ul class="crayons-dropdown p-1 right-1 s:right-0 s:left-auto fs-base dropdown">
      <li><a href="https://dev.to/nwajeigideon/comment/1e3cp" class="crayons-link crayons-link--block permalink-copybtn" aria-label="Copy link to Nwajei Gideon's comment" data-no-instant>Copy link</a></li>
      <li class="comment-actions hidden" data-user-id="281899" data-action="settings-button" data-path="https://dev.to/nwajeigideon/comment/1e3cp/settings" aria-label="Go to Nwajei Gideon's comment settings"></li>
      <li class="comment-actions hidden" data-action="hide-button" data-commentable-user-id="435270" data-user-id="281899">
        <a href="#" class="crayons-link crayons-link--block hide-comment" data-hide-type="hide" data-comment-id="705405" aria-label="Hide Nwajei Gideon's comment">
          Hide
        </a>
      </li>
      <li class="mod-actions hidden mod-actions-comment-button" data-path="https://dev.to/nwajeigideon/comment/1e3cp/mod" aria-label="Moderate Nwajei Gideon's comment"></li>
      <li class="report-abuse-link-wrapper" data-path="/report-abuse?url=https://dev.to/nwajeigideon/comment/1e3cp" aria-label="Report Nwajei Gideon's comment as abusive or violating our code of conduct and/or terms and conditions"></li>
      <li class="current-user-actions"></li>
    </ul>
  </div>
</header>


        <div
          class="
            comment__body
            text-styles
            text-styles--secondary
            body

          ">
          <p>Absolutely true. Not to talk of how extremely difficult if you happen to be a student. <br>
I am a student currently in my final year and I tell you our school system here chokes to till you almost drop, guess that's why some people drop out when they can't cope any longer. <br>
Data is extremely expensive, you manage to pay for a month subscription but it only last a week or less.<br><br>
I learnt web development about 3 years ago but after learning it was like there was nothing more to it, I mean it's hard to find a vibrant web Dev community or work on local web Dev projects/jobs since most people here don't even know how important it is to have a website. That and other long list of factors actually discouraged  me in fact I stopped coding for the past 3 years, just started picking up the pace some months back. <br>
Truth is the pains and struggles we face as upcoming developers in Nigeria can not be explained with words alone cause if one try to explain, it might take forever. <br>
May God help the Nigerian developers. Amen. </p>


        </div>
    </div>

    <footer class="comment__footer print-hidden">
  <button
    class="crayons-btn crayons-btn--ghost crayons-btn--icon-left crayons-btn--s mr-1 reaction-like inline-flex reaction-button"
    id="button-for-comment-705405"
    data-comment-id="705405"
    title="heart">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="astpqv7g16f6uds4rsnufs972q3cxo7n" class="crayons-icon reaction-icon not-reacted"><title id="astpqv7g16f6uds4rsnufs972q3cxo7n">Favorite heart outline button</title><path d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"></path></svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="as78c0jv5opynuay4eup0ska75h4ekyl" class="crayons-icon reaction-icon--like reaction-icon reacted"><title id="as78c0jv5opynuay4eup0ska75h4ekyl">Favorite heart outline button</title>
    <path d="M5.116 12.595a4.875 4.875 0 015.56-7.68h-.002L7.493 8.098l1.06 1.061 3.181-3.182a4.875 4.875 0 016.895 6.894L12 19.5l-6.894-6.894.01-.01z"></path>
</svg>

    <span class="reactions-count">
      1
    </span>
    <span class="reactions-label hidden m:inline-block">
      &nbsp;like
    </span>
  </button>

    <a
      class="actions crayons-btn crayons-btn--ghost crayons-btn--s crayons-btn--icon-left toggle-reply-form mr-1 inline-flex"
      href="#/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/new/1e3cp"
      data-comment-id="705405"
      data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e3cp"
      rel="nofollow">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="amjoanl1yuj6h7ahlzwawhsvl3tv86n9" class="crayons-icon reaction-icon not-reacted"><title id="amjoanl1yuj6h7ahlzwawhsvl3tv86n9">Comment button</title><path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path></svg>

      <span class="hidden m:inline-block">Reply</span>
    </a>

</footer>

  </div>
</div>


      </div>
    </details>

                    <details class="comment-wrapper js-comment-wrapper comment-wrapper--deep-0 root" open>
      <summary>
        <span class="m:mx-1 inline-block align-middle">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="ad5dmda7rcb2izkqp1e2ga2dhk18u7z8" class="crayons-icon expanded"><title id="ad5dmda7rcb2izkqp1e2ga2dhk18u7z8">Collapse</title>
    <path d="M12 10.677L8 6.935 9 6l3 2.807L15 6l1 .935-4 3.742zm0 4.517L9 18l-1-.935 4-3.742 4 3.742-1 .934-3-2.805z"></path>
</svg>

          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="aoos2khfbjg2a2xhkzjzwk40jt67u246" class="crayons-icon collapsed"><title id="aoos2khfbjg2a2xhkzjzwk40jt67u246">Expand</title>
    <path d="M12 18l-4-3.771 1-.943 3 2.829 3-2.829 1 .943L12 18zm0-10.115l-3 2.829-1-.943L12 6l4 3.771-1 .942-3-2.828z"></path>
</svg>

        </span>
        <span class="js-collapse-comment-content inline-block align-middle"></span>
      </summary>
      <div
        id="comment-node-706205"
        class="
          comment single-comment-node

          root
          comment--deep-0

        "
        data-comment-id="706205"
        data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e4hj"
        data-comment-author-id="624353"
        data-content-user-id="624353">

<div class="comment__inner">
    <a href="https://dev.to/dimkayilrit" class="shrink-0 crayons-avatar m:crayons-avatar--l mt-4 m:mt-3">
    <img class="crayons-avatar__image" width="32" height="32" src="https://res.cloudinary.com/practicaldev/image/fetch/s--musfck9w--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/624353/ca6a5089-bf7d-44b1-8db5-54f8fca8aedb.png" alt="dimkayilrit profile image" />
  </a>


  <div class="inner-comment comment__details">
    <div class="comment__content crayons-card">



        <header class="comment__header">
  <a href="https://dev.to/dimkayilrit" class="crayons-link crayons-link--secondary flex items-center fw-medium">
    <span class="js-comment-username">Dimka Yilrit</span>
  </a>

  <span class="color-base-30 px-2" role="presentation">&bull;</span>

<a href="https://dev.to/dimkayilrit/comment/1e4hj" class="comment-date crayons-link crayons-link--secondary fs-s">
  <time datetime="2021-05-02T16:51:05Z">
    May 2
  </time>

</a>


  <div class="comment__dropdown">
    <button class="dropbtn comment__dropdown-trigger crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon" aria-label="Toggle dropdown menu" aria-haspopup="true">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="ae4iaiovi944asoohocbbwji312z3kwl" class="crayons-icon pointer-events-none"><title id="ae4iaiovi944asoohocbbwji312z3kwl">Dropdown menu</title>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.25 12a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm5.25 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm3.75 1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
</svg>

    </button>
    <ul class="crayons-dropdown p-1 right-1 s:right-0 s:left-auto fs-base dropdown">
      <li><a href="https://dev.to/dimkayilrit/comment/1e4hj" class="crayons-link crayons-link--block permalink-copybtn" aria-label="Copy link to Dimka Yilrit's comment" data-no-instant>Copy link</a></li>
      <li class="comment-actions hidden" data-user-id="624353" data-action="settings-button" data-path="https://dev.to/dimkayilrit/comment/1e4hj/settings" aria-label="Go to Dimka Yilrit's comment settings"></li>
      <li class="comment-actions hidden" data-action="hide-button" data-commentable-user-id="435270" data-user-id="624353">
        <a href="#" class="crayons-link crayons-link--block hide-comment" data-hide-type="hide" data-comment-id="706205" aria-label="Hide Dimka Yilrit's comment">
          Hide
        </a>
      </li>
      <li class="mod-actions hidden mod-actions-comment-button" data-path="https://dev.to/dimkayilrit/comment/1e4hj/mod" aria-label="Moderate Dimka Yilrit's comment"></li>
      <li class="report-abuse-link-wrapper" data-path="/report-abuse?url=https://dev.to/dimkayilrit/comment/1e4hj" aria-label="Report Dimka Yilrit's comment as abusive or violating our code of conduct and/or terms and conditions"></li>
      <li class="current-user-actions"></li>
    </ul>
  </div>
</header>


        <div
          class="
            comment__body
            text-styles
            text-styles--secondary
            body

          ">
          <p>It is really a hard thing to become a programmer in Nigerian. I study computer science for 3years(Nce program) but the truth be told,We never did a single practical through out those three years talk more of running a single  computer program.<br>
I managed to start learning how to program from the books in the local library which where outdated to be precise books from 2006,2007 e.t.c. I learned a bit from those books but with all these things I have learned, I did not even have a laptop to practice what I have learned. I did manage to program  my final year project by my  self using a laptop that I borrowed from a friend.<br>
I went on to  learn Java but I had to stop cause I couldn't run a GUI application on my phone. I switched to css and html  for web development which I Practice on my mobile phone cause I have no laptop. There are so many obstacles but we just have to keep on moving. </p>


        </div>
    </div>

    <footer class="comment__footer print-hidden">
  <button
    class="crayons-btn crayons-btn--ghost crayons-btn--icon-left crayons-btn--s mr-1 reaction-like inline-flex reaction-button"
    id="button-for-comment-706205"
    data-comment-id="706205"
    title="heart">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="a85sorz2f3r4yyqq2cv6ud8lq8xzywww" class="crayons-icon reaction-icon not-reacted"><title id="a85sorz2f3r4yyqq2cv6ud8lq8xzywww">Favorite heart outline button</title><path d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"></path></svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="a9bfksot26sx82gadowvnayg9jufsp8z" class="crayons-icon reaction-icon--like reaction-icon reacted"><title id="a9bfksot26sx82gadowvnayg9jufsp8z">Favorite heart outline button</title>
    <path d="M5.116 12.595a4.875 4.875 0 015.56-7.68h-.002L7.493 8.098l1.06 1.061 3.181-3.182a4.875 4.875 0 016.895 6.894L12 19.5l-6.894-6.894.01-.01z"></path>
</svg>

    <span class="reactions-count">
      1
    </span>
    <span class="reactions-label hidden m:inline-block">
      &nbsp;like
    </span>
  </button>

    <a
      class="actions crayons-btn crayons-btn--ghost crayons-btn--s crayons-btn--icon-left toggle-reply-form mr-1 inline-flex"
      href="#/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/new/1e4hj"
      data-comment-id="706205"
      data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e4hj"
      rel="nofollow">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="ae0hoxctuxiyw1ux19nm9xw2u8b2xhky" class="crayons-icon reaction-icon not-reacted"><title id="ae0hoxctuxiyw1ux19nm9xw2u8b2xhky">Comment button</title><path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path></svg>

      <span class="hidden m:inline-block">Reply</span>
    </a>

</footer>

  </div>
</div>


      </div>
    </details>

                    <details class="comment-wrapper js-comment-wrapper comment-wrapper--deep-0 root" open>
      <summary>
        <span class="m:mx-1 inline-block align-middle">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="abj2r3e3oo4x9nfdn3g33bjr3j4xo5an" class="crayons-icon expanded"><title id="abj2r3e3oo4x9nfdn3g33bjr3j4xo5an">Collapse</title>
    <path d="M12 10.677L8 6.935 9 6l3 2.807L15 6l1 .935-4 3.742zm0 4.517L9 18l-1-.935 4-3.742 4 3.742-1 .934-3-2.805z"></path>
</svg>

          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="acgujxl57zox0h3vf49wxslpz7dqhq2z" class="crayons-icon collapsed"><title id="acgujxl57zox0h3vf49wxslpz7dqhq2z">Expand</title>
    <path d="M12 18l-4-3.771 1-.943 3 2.829 3-2.829 1 .943L12 18zm0-10.115l-3 2.829-1-.943L12 6l4 3.771-1 .942-3-2.828z"></path>
</svg>

        </span>
        <span class="js-collapse-comment-content inline-block align-middle"></span>
      </summary>
      <div
        id="comment-node-707792"
        class="
          comment single-comment-node

          root
          comment--deep-0

        "
        data-comment-id="707792"
        data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e70k"
        data-comment-author-id="20812"
        data-content-user-id="20812">

<div class="comment__inner">
    <a href="https://dev.to/vurso" class="shrink-0 crayons-avatar m:crayons-avatar--l mt-4 m:mt-3">
    <img class="crayons-avatar__image" width="32" height="32" src="https://res.cloudinary.com/practicaldev/image/fetch/s--Wd3V88iv--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/20812/62e0009d-02d2-40ce-b18a-d0b110cf0fef.jpg" alt="vurso profile image" />
  </a>


  <div class="inner-comment comment__details">
    <div class="comment__content crayons-card">



        <header class="comment__header">
  <a href="https://dev.to/vurso" class="crayons-link crayons-link--secondary flex items-center fw-medium">
    <span class="js-comment-username">Trevor</span>
  </a>

  <span class="color-base-30 px-2" role="presentation">&bull;</span>

<a href="https://dev.to/vurso/comment/1e70k" class="comment-date crayons-link crayons-link--secondary fs-s">
  <time datetime="2021-05-05T15:33:11Z">
    May 5
  </time>

</a>


  <div class="comment__dropdown">
    <button class="dropbtn comment__dropdown-trigger crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon" aria-label="Toggle dropdown menu" aria-haspopup="true">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="ansnoqglbvtl23efenr0zc0s2r8qt34r" class="crayons-icon pointer-events-none"><title id="ansnoqglbvtl23efenr0zc0s2r8qt34r">Dropdown menu</title>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.25 12a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm5.25 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm3.75 1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
</svg>

    </button>
    <ul class="crayons-dropdown p-1 right-1 s:right-0 s:left-auto fs-base dropdown">
      <li><a href="https://dev.to/vurso/comment/1e70k" class="crayons-link crayons-link--block permalink-copybtn" aria-label="Copy link to Trevor's comment" data-no-instant>Copy link</a></li>
      <li class="comment-actions hidden" data-user-id="20812" data-action="settings-button" data-path="https://dev.to/vurso/comment/1e70k/settings" aria-label="Go to Trevor's comment settings"></li>
      <li class="comment-actions hidden" data-action="hide-button" data-commentable-user-id="435270" data-user-id="20812">
        <a href="#" class="crayons-link crayons-link--block hide-comment" data-hide-type="hide" data-comment-id="707792" aria-label="Hide Trevor's comment">
          Hide
        </a>
      </li>
      <li class="mod-actions hidden mod-actions-comment-button" data-path="https://dev.to/vurso/comment/1e70k/mod" aria-label="Moderate Trevor's comment"></li>
      <li class="report-abuse-link-wrapper" data-path="/report-abuse?url=https://dev.to/vurso/comment/1e70k" aria-label="Report Trevor's comment as abusive or violating our code of conduct and/or terms and conditions"></li>
      <li class="current-user-actions"></li>
    </ul>
  </div>
</header>


        <div
          class="
            comment__body
            text-styles
            text-styles--secondary
            body

          ">
          <p>Someone reading this should see your pain as opportunity for innovation. Solar power, portable mesh networks for distributed computing at a local neighbourhood level, when you are able to take snapshots of the Internet (here Google could help out...where are the big techs why are they not helping emerging talent?!).</p>

<p>Hardware &amp; software charities to help provide access to laptops and computer equipment so many of us western cultured people upgrade out laptops yearly usually when we don't need to for years so those same 'obsolete' laptops could be the key to the next innovator.</p>

<p>And lastly Africa as a whole has immense talent how do I know this? Time and again my African brothers &amp; sisters have had to use limited resources, often facing steep challenges like you described and still being able to think through those problems to come up with solutions.</p>

<p>Bottom line get investing in IoT, cheap to build and obtain (relatively speaking), build solar powered hubs and create a mesh network that self heals and then get some data storage and fill up that knowledge base my friend!</p>

<p>Good luck and God bless 🙏🏽</p>


        </div>
    </div>

    <footer class="comment__footer print-hidden">
  <button
    class="crayons-btn crayons-btn--ghost crayons-btn--icon-left crayons-btn--s mr-1 reaction-like inline-flex reaction-button"
    id="button-for-comment-707792"
    data-comment-id="707792"
    title="heart">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="anb9nsjypc0cfogyjp8dgou69fof7yy0" class="crayons-icon reaction-icon not-reacted"><title id="anb9nsjypc0cfogyjp8dgou69fof7yy0">Favorite heart outline button</title><path d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"></path></svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="a9fkhf8ad0fdgx87um7d7lezgj4rj87n" class="crayons-icon reaction-icon--like reaction-icon reacted"><title id="a9fkhf8ad0fdgx87um7d7lezgj4rj87n">Favorite heart outline button</title>
    <path d="M5.116 12.595a4.875 4.875 0 015.56-7.68h-.002L7.493 8.098l1.06 1.061 3.181-3.182a4.875 4.875 0 016.895 6.894L12 19.5l-6.894-6.894.01-.01z"></path>
</svg>

    <span class="reactions-count">
      1
    </span>
    <span class="reactions-label hidden m:inline-block">
      &nbsp;like
    </span>
  </button>

    <a
      class="actions crayons-btn crayons-btn--ghost crayons-btn--s crayons-btn--icon-left toggle-reply-form mr-1 inline-flex"
      href="#/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/new/1e70k"
      data-comment-id="707792"
      data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e70k"
      rel="nofollow">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="abonuzkwivvt5x1mxwu1ovnckfix6fd3" class="crayons-icon reaction-icon not-reacted"><title id="abonuzkwivvt5x1mxwu1ovnckfix6fd3">Comment button</title><path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path></svg>

      <span class="hidden m:inline-block">Reply</span>
    </a>

</footer>

  </div>
</div>
    <details class="comment-wrapper js-comment-wrapper comment-wrapper--deep-1 child" open>
      <summary>
        <span class="mx-0 inline-block align-middle">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="abgy5an4sq20d0eclgixxtvyikc3e4xd" class="crayons-icon expanded"><title id="abgy5an4sq20d0eclgixxtvyikc3e4xd">Collapse</title>
    <path d="M12 10.677L8 6.935 9 6l3 2.807L15 6l1 .935-4 3.742zm0 4.517L9 18l-1-.935 4-3.742 4 3.742-1 .934-3-2.805z"></path>
</svg>

          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="ab70oalhty5km4f5vzitv7xxmxpb8iuw" class="crayons-icon collapsed"><title id="ab70oalhty5km4f5vzitv7xxmxpb8iuw">Expand</title>
    <path d="M12 18l-4-3.771 1-.943 3 2.829 3-2.829 1 .943L12 18zm0-10.115l-3 2.829-1-.943L12 6l4 3.771-1 .942-3-2.828z"></path>
</svg>

        </span>
        <span class="js-collapse-comment-content inline-block align-middle"></span>
      </summary>
      <div
        id="comment-node-707943"
        class="
          comment single-comment-node

          child
          comment--deep-1

        "
        data-comment-id="707943"
        data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e76f"
        data-comment-author-id="435270"
        data-content-user-id="435270">

<div class="comment__inner">
    <a href="https://dev.to/resourcefulmind" class="shrink-0 crayons-avatar mt-4">
    <img class="crayons-avatar__image" width="32" height="32" src="https://res.cloudinary.com/practicaldev/image/fetch/s--6y949wgP--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/435270/7ca3876e-ca85-478e-a2fa-c634f4a78121.png" alt="resourcefulmind profile image" />
  </a>


  <div class="inner-comment comment__details">
    <div class="comment__content crayons-card">



        <header class="comment__header">
  <a href="https://dev.to/resourcefulmind" class="crayons-link crayons-link--secondary flex items-center fw-medium">
    <span class="js-comment-username">Opeyemi Stephen</span>
      <span class="crayons-tooltip inline-block spec-op-author -mr-2" data-tooltip="Author">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="ad2252n7gozei2prvenws47waindu1bu" class="crayons-icon"><title id="ad2252n7gozei2prvenws47waindu1bu">Author</title>
    <path d="M12 8.25a6 6 0 110 12 6 6 0 010-12zm0 2.625l-.992 2.01-2.218.322 1.605 1.564-.379 2.21L12 15.937l1.984 1.043-.379-2.209 1.605-1.564-2.218-.323L12 10.875zm.75-6.376l3.75.001v2.25l-1.022.854a7.45 7.45 0 00-2.728-.817V4.5zm-1.5 0v2.288a7.451 7.451 0 00-2.727.816L7.5 6.75V4.5h3.75z"></path>
</svg>

      </span>
  </a>

  <span class="color-base-30 px-2" role="presentation">&bull;</span>

<a href="https://dev.to/resourcefulmind/comment/1e76f" class="comment-date crayons-link crayons-link--secondary fs-s">
  <time datetime="2021-05-05T23:03:52Z">
    May 5
  </time>

</a>


  <div class="comment__dropdown">
    <button class="dropbtn comment__dropdown-trigger crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon" aria-label="Toggle dropdown menu" aria-haspopup="true">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="a265vdydsalk71cw996vjwrjsx7fl9s1" class="crayons-icon pointer-events-none"><title id="a265vdydsalk71cw996vjwrjsx7fl9s1">Dropdown menu</title>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.25 12a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm5.25 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm3.75 1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
</svg>

    </button>
    <ul class="crayons-dropdown p-1 right-1 s:right-0 s:left-auto fs-base dropdown">
      <li><a href="https://dev.to/resourcefulmind/comment/1e76f" class="crayons-link crayons-link--block permalink-copybtn" aria-label="Copy link to Opeyemi Stephen's comment" data-no-instant>Copy link</a></li>
      <li class="comment-actions hidden" data-user-id="435270" data-action="settings-button" data-path="https://dev.to/resourcefulmind/comment/1e76f/settings" aria-label="Go to Opeyemi Stephen's comment settings"></li>
      <li class="comment-actions hidden" data-action="hide-button" data-commentable-user-id="435270" data-user-id="435270">
        <a href="#" class="crayons-link crayons-link--block hide-comment" data-hide-type="hide" data-comment-id="707943" aria-label="Hide Opeyemi Stephen's comment">
          Hide
        </a>
      </li>
      <li class="mod-actions hidden mod-actions-comment-button" data-path="https://dev.to/resourcefulmind/comment/1e76f/mod" aria-label="Moderate Opeyemi Stephen's comment"></li>
      <li class="report-abuse-link-wrapper" data-path="/report-abuse?url=https://dev.to/resourcefulmind/comment/1e76f" aria-label="Report Opeyemi Stephen's comment as abusive or violating our code of conduct and/or terms and conditions"></li>
      <li class="current-user-actions"></li>
    </ul>
  </div>
</header>


        <div
          class="
            comment__body
            text-styles
            text-styles--secondary
            body

          ">
          <p>This was really insightful and it reminded me of my conversation with a friend I met here, Sebastian. We are currently trying to work out the plans for this. I would also love to ask if there was a way to have people donate some of their “obsolete” laptop as it would be very helpful for a lot of newbie developers. I could draft out a plan for that if you’re willing to discuss further about this so that we help people while putting the first plan in progress.</p>


        </div>
    </div>

    <footer class="comment__footer print-hidden">
  <button
    class="crayons-btn crayons-btn--ghost crayons-btn--icon-left crayons-btn--s mr-1 reaction-like inline-flex reaction-button"
    id="button-for-comment-707943"
    data-comment-id="707943"
    title="heart">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="ahbjyyaquoxxa1xcucbnqaq9cvd2jbkk" class="crayons-icon reaction-icon not-reacted"><title id="ahbjyyaquoxxa1xcucbnqaq9cvd2jbkk">Favorite heart outline button</title><path d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"></path></svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="acysaxly53ivdoqu8s2uovjti47retx8" class="crayons-icon reaction-icon--like reaction-icon reacted"><title id="acysaxly53ivdoqu8s2uovjti47retx8">Favorite heart outline button</title>
    <path d="M5.116 12.595a4.875 4.875 0 015.56-7.68h-.002L7.493 8.098l1.06 1.061 3.181-3.182a4.875 4.875 0 016.895 6.894L12 19.5l-6.894-6.894.01-.01z"></path>
</svg>

    <span class="reactions-count">
      1
    </span>
    <span class="reactions-label hidden m:inline-block">
      &nbsp;like
    </span>
  </button>

    <a
      class="actions crayons-btn crayons-btn--ghost crayons-btn--s crayons-btn--icon-left toggle-reply-form mr-1 inline-flex"
      href="#/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/new/1e76f"
      data-comment-id="707943"
      data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e76f"
      rel="nofollow">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="a588amev1imwkxkkidzu8ms9ghcj4092" class="crayons-icon reaction-icon not-reacted"><title id="a588amev1imwkxkkidzu8ms9ghcj4092">Comment button</title><path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path></svg>

      <span class="hidden m:inline-block">Reply</span>
    </a>

</footer>

  </div>
</div>


      </div>
    </details>


      </div>
    </details>

                    <details class="comment-wrapper js-comment-wrapper comment-wrapper--deep-0 root" open>
      <summary>
        <span class="m:mx-1 inline-block align-middle">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="aoh1un3j7csw6qew4prhogu2pibi0fi9" class="crayons-icon expanded"><title id="aoh1un3j7csw6qew4prhogu2pibi0fi9">Collapse</title>
    <path d="M12 10.677L8 6.935 9 6l3 2.807L15 6l1 .935-4 3.742zm0 4.517L9 18l-1-.935 4-3.742 4 3.742-1 .934-3-2.805z"></path>
</svg>

          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="amhhddz9jecrlpizr4rtxxt1525i6ltn" class="crayons-icon collapsed"><title id="amhhddz9jecrlpizr4rtxxt1525i6ltn">Expand</title>
    <path d="M12 18l-4-3.771 1-.943 3 2.829 3-2.829 1 .943L12 18zm0-10.115l-3 2.829-1-.943L12 6l4 3.771-1 .942-3-2.828z"></path>
</svg>

        </span>
        <span class="js-collapse-comment-content inline-block align-middle"></span>
      </summary>
      <div
        id="comment-node-706302"
        class="
          comment single-comment-node

          root
          comment--deep-0

        "
        data-comment-id="706302"
        data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e4lc"
        data-comment-author-id="624453"
        data-content-user-id="624453">

<div class="comment__inner">
    <a href="https://dev.to/chukwudaniel" class="shrink-0 crayons-avatar m:crayons-avatar--l mt-4 m:mt-3">
    <img class="crayons-avatar__image" width="32" height="32" src="https://res.cloudinary.com/practicaldev/image/fetch/s--CmHjuAPT--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/624453/4ac2da36-2b1e-4fd9-ac38-3772a5a90f6d.jpg" alt="chukwudaniel profile image" />
  </a>


  <div class="inner-comment comment__details">
    <div class="comment__content crayons-card">



        <header class="comment__header">
  <a href="https://dev.to/chukwudaniel" class="crayons-link crayons-link--secondary flex items-center fw-medium">
    <span class="js-comment-username">Foley&#39;s Ink</span>
  </a>

  <span class="color-base-30 px-2" role="presentation">&bull;</span>

<a href="https://dev.to/chukwudaniel/comment/1e4lc" class="comment-date crayons-link crayons-link--secondary fs-s">
  <time datetime="2021-05-02T20:10:32Z">
    May 2
  </time>

</a>


  <div class="comment__dropdown">
    <button class="dropbtn comment__dropdown-trigger crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon" aria-label="Toggle dropdown menu" aria-haspopup="true">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="alx6wo2alt9cwy78m0e2xxowymejpzs5" class="crayons-icon pointer-events-none"><title id="alx6wo2alt9cwy78m0e2xxowymejpzs5">Dropdown menu</title>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.25 12a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm5.25 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm3.75 1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
</svg>

    </button>
    <ul class="crayons-dropdown p-1 right-1 s:right-0 s:left-auto fs-base dropdown">
      <li><a href="https://dev.to/chukwudaniel/comment/1e4lc" class="crayons-link crayons-link--block permalink-copybtn" aria-label="Copy link to Foley&#39;s Ink's comment" data-no-instant>Copy link</a></li>
      <li class="comment-actions hidden" data-user-id="624453" data-action="settings-button" data-path="https://dev.to/chukwudaniel/comment/1e4lc/settings" aria-label="Go to Foley&#39;s Ink's comment settings"></li>
      <li class="comment-actions hidden" data-action="hide-button" data-commentable-user-id="435270" data-user-id="624453">
        <a href="#" class="crayons-link crayons-link--block hide-comment" data-hide-type="hide" data-comment-id="706302" aria-label="Hide Foley&#39;s Ink's comment">
          Hide
        </a>
      </li>
      <li class="mod-actions hidden mod-actions-comment-button" data-path="https://dev.to/chukwudaniel/comment/1e4lc/mod" aria-label="Moderate Foley&#39;s Ink's comment"></li>
      <li class="report-abuse-link-wrapper" data-path="/report-abuse?url=https://dev.to/chukwudaniel/comment/1e4lc" aria-label="Report Foley&#39;s Ink's comment as abusive or violating our code of conduct and/or terms and conditions"></li>
      <li class="current-user-actions"></li>
    </ul>
  </div>
</header>


        <div
          class="
            comment__body
            text-styles
            text-styles--secondary
            body

          ">
          <p>Bros, you listed alot of things.I started learning with my phone from an app I downloaded called Mimo. I as an accountant started learning coding last year and I've barely had problems because I'm making use of opportunity I have. Where I work I was given an official laptop and yeah there's always network to connect with. I realised I can only learn this coding using the little time I get to spend in the office and its really paying off. Well, everyone may not have such opportunity but we should not relent to try and grab anyone that comes by. </p>


        </div>
    </div>

    <footer class="comment__footer print-hidden">
  <button
    class="crayons-btn crayons-btn--ghost crayons-btn--icon-left crayons-btn--s mr-1 reaction-like inline-flex reaction-button"
    id="button-for-comment-706302"
    data-comment-id="706302"
    title="heart">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="apvaz2ya71mv9w2fhu2r5g5w5f78c466" class="crayons-icon reaction-icon not-reacted"><title id="apvaz2ya71mv9w2fhu2r5g5w5f78c466">Favorite heart outline button</title><path d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"></path></svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="agd3xxgr8kk4tt4vsgvk8g3gau8g7f4q" class="crayons-icon reaction-icon--like reaction-icon reacted"><title id="agd3xxgr8kk4tt4vsgvk8g3gau8g7f4q">Favorite heart outline button</title>
    <path d="M5.116 12.595a4.875 4.875 0 015.56-7.68h-.002L7.493 8.098l1.06 1.061 3.181-3.182a4.875 4.875 0 016.895 6.894L12 19.5l-6.894-6.894.01-.01z"></path>
</svg>

    <span class="reactions-count">
      1
    </span>
    <span class="reactions-label hidden m:inline-block">
      &nbsp;like
    </span>
  </button>

    <a
      class="actions crayons-btn crayons-btn--ghost crayons-btn--s crayons-btn--icon-left toggle-reply-form mr-1 inline-flex"
      href="#/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/new/1e4lc"
      data-comment-id="706302"
      data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e4lc"
      rel="nofollow">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="afmoc9jwkcriy66luxdlf4hi78j78kpe" class="crayons-icon reaction-icon not-reacted"><title id="afmoc9jwkcriy66luxdlf4hi78j78kpe">Comment button</title><path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path></svg>

      <span class="hidden m:inline-block">Reply</span>
    </a>

</footer>

  </div>
</div>


      </div>
    </details>

                    <details class="comment-wrapper js-comment-wrapper comment-wrapper--deep-0 root" open>
      <summary>
        <span class="m:mx-1 inline-block align-middle">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="ahibpljq24w7xewuxw1ip3bgthfcgmuh" class="crayons-icon expanded"><title id="ahibpljq24w7xewuxw1ip3bgthfcgmuh">Collapse</title>
    <path d="M12 10.677L8 6.935 9 6l3 2.807L15 6l1 .935-4 3.742zm0 4.517L9 18l-1-.935 4-3.742 4 3.742-1 .934-3-2.805z"></path>
</svg>

          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="acz1xhhplbxdncwun9cv5b0lsd47ze4h" class="crayons-icon collapsed"><title id="acz1xhhplbxdncwun9cv5b0lsd47ze4h">Expand</title>
    <path d="M12 18l-4-3.771 1-.943 3 2.829 3-2.829 1 .943L12 18zm0-10.115l-3 2.829-1-.943L12 6l4 3.771-1 .942-3-2.828z"></path>
</svg>

        </span>
        <span class="js-collapse-comment-content inline-block align-middle"></span>
      </summary>
      <div
        id="comment-node-712410"
        class="
          comment single-comment-node

          root
          comment--deep-0

        "
        data-comment-id="712410"
        data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1edma"
        data-comment-author-id="628024"
        data-content-user-id="628024">

<div class="comment__inner">
    <a href="https://dev.to/tejumolamann" class="shrink-0 crayons-avatar m:crayons-avatar--l mt-4 m:mt-3">
    <img class="crayons-avatar__image" width="32" height="32" src="https://res.cloudinary.com/practicaldev/image/fetch/s--ReZgtrIy--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/628024/55c56e78-a9b2-4cef-a4c0-d8054c3dbf63.png" alt="tejumolamann profile image" />
  </a>


  <div class="inner-comment comment__details">
    <div class="comment__content crayons-card">



        <header class="comment__header">
  <a href="https://dev.to/tejumolamann" class="crayons-link crayons-link--secondary flex items-center fw-medium">
    <span class="js-comment-username">tejumolamann</span>
  </a>

  <span class="color-base-30 px-2" role="presentation">&bull;</span>

<a href="https://dev.to/tejumolamann/comment/1edma" class="comment-date crayons-link crayons-link--secondary fs-s">
  <time datetime="2021-05-12T21:12:31Z">
    May 12
  </time>

</a>


  <div class="comment__dropdown">
    <button class="dropbtn comment__dropdown-trigger crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon" aria-label="Toggle dropdown menu" aria-haspopup="true">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="aqgregnru6nbdxvl207q1kph692mjz40" class="crayons-icon pointer-events-none"><title id="aqgregnru6nbdxvl207q1kph692mjz40">Dropdown menu</title>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.25 12a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm5.25 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm3.75 1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
</svg>

    </button>
    <ul class="crayons-dropdown p-1 right-1 s:right-0 s:left-auto fs-base dropdown">
      <li><a href="https://dev.to/tejumolamann/comment/1edma" class="crayons-link crayons-link--block permalink-copybtn" aria-label="Copy link to tejumolamann's comment" data-no-instant>Copy link</a></li>
      <li class="comment-actions hidden" data-user-id="628024" data-action="settings-button" data-path="https://dev.to/tejumolamann/comment/1edma/settings" aria-label="Go to tejumolamann's comment settings"></li>
      <li class="comment-actions hidden" data-action="hide-button" data-commentable-user-id="435270" data-user-id="628024">
        <a href="#" class="crayons-link crayons-link--block hide-comment" data-hide-type="hide" data-comment-id="712410" aria-label="Hide tejumolamann's comment">
          Hide
        </a>
      </li>
      <li class="mod-actions hidden mod-actions-comment-button" data-path="https://dev.to/tejumolamann/comment/1edma/mod" aria-label="Moderate tejumolamann's comment"></li>
      <li class="report-abuse-link-wrapper" data-path="/report-abuse?url=https://dev.to/tejumolamann/comment/1edma" aria-label="Report tejumolamann's comment as abusive or violating our code of conduct and/or terms and conditions"></li>
      <li class="current-user-actions"></li>
    </ul>
  </div>
</header>


        <div
          class="
            comment__body
            text-styles
            text-styles--secondary
            body

          ">
          <p>Hey Opeyemi, I can relate. In my own experience, you should add, you get employed as a developer and that means you are the system administrator, network administrator, database administrator, hardware manager, Web developer, software engineer and the handler of anything that had got a micro chip inside with low level code running inside of it. Talk about a jack of all I.T. </p>


        </div>
    </div>

    <footer class="comment__footer print-hidden">
  <button
    class="crayons-btn crayons-btn--ghost crayons-btn--icon-left crayons-btn--s mr-1 reaction-like inline-flex reaction-button"
    id="button-for-comment-712410"
    data-comment-id="712410"
    title="heart">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="a2j6fe6lam021wsm49hsvqzhekef6gnt" class="crayons-icon reaction-icon not-reacted"><title id="a2j6fe6lam021wsm49hsvqzhekef6gnt">Favorite heart outline button</title><path d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"></path></svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="a2xw2cmlk7xxkn6nnb9u1hlof4syo5k8" class="crayons-icon reaction-icon--like reaction-icon reacted"><title id="a2xw2cmlk7xxkn6nnb9u1hlof4syo5k8">Favorite heart outline button</title>
    <path d="M5.116 12.595a4.875 4.875 0 015.56-7.68h-.002L7.493 8.098l1.06 1.061 3.181-3.182a4.875 4.875 0 016.895 6.894L12 19.5l-6.894-6.894.01-.01z"></path>
</svg>

    <span class="reactions-count">
      1
    </span>
    <span class="reactions-label hidden m:inline-block">
      &nbsp;like
    </span>
  </button>

    <a
      class="actions crayons-btn crayons-btn--ghost crayons-btn--s crayons-btn--icon-left toggle-reply-form mr-1 inline-flex"
      href="#/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/new/1edma"
      data-comment-id="712410"
      data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1edma"
      rel="nofollow">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="ahnr11velg31cdf8wsg004n762u9fenh" class="crayons-icon reaction-icon not-reacted"><title id="ahnr11velg31cdf8wsg004n762u9fenh">Comment button</title><path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path></svg>

      <span class="hidden m:inline-block">Reply</span>
    </a>

</footer>

  </div>
</div>


      </div>
    </details>

                    <details class="comment-wrapper js-comment-wrapper comment-wrapper--deep-0 root" open>
      <summary>
        <span class="m:mx-1 inline-block align-middle">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="al793rcbe4lf3ydzq232om4eeszp4w2g" class="crayons-icon expanded"><title id="al793rcbe4lf3ydzq232om4eeszp4w2g">Collapse</title>
    <path d="M12 10.677L8 6.935 9 6l3 2.807L15 6l1 .935-4 3.742zm0 4.517L9 18l-1-.935 4-3.742 4 3.742-1 .934-3-2.805z"></path>
</svg>

          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="ap23km95quovheejbupulctq7pvygvvl" class="crayons-icon collapsed"><title id="ap23km95quovheejbupulctq7pvygvvl">Expand</title>
    <path d="M12 18l-4-3.771 1-.943 3 2.829 3-2.829 1 .943L12 18zm0-10.115l-3 2.829-1-.943L12 6l4 3.771-1 .942-3-2.828z"></path>
</svg>

        </span>
        <span class="js-collapse-comment-content inline-block align-middle"></span>
      </summary>
      <div
        id="comment-node-707656"
        class="
          comment single-comment-node

          root
          comment--deep-0

        "
        data-comment-id="707656"
        data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e6le"
        data-comment-author-id="206235"
        data-content-user-id="206235">

<div class="comment__inner">
    <a href="https://dev.to/ezeugoobieze" class="shrink-0 crayons-avatar m:crayons-avatar--l mt-4 m:mt-3">
    <img class="crayons-avatar__image" width="32" height="32" src="https://res.cloudinary.com/practicaldev/image/fetch/s--i8Dos2cg--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/206235/b21b5d03-effd-4b2d-a022-ac41938736a1.jpg" alt="ezeugoobieze profile image" />
  </a>


  <div class="inner-comment comment__details">
    <div class="comment__content crayons-card">



        <header class="comment__header">
  <a href="https://dev.to/ezeugoobieze" class="crayons-link crayons-link--secondary flex items-center fw-medium">
    <span class="js-comment-username">mr.Felistus</span>
  </a>

  <span class="color-base-30 px-2" role="presentation">&bull;</span>

<a href="https://dev.to/ezeugoobieze/comment/1e6le" class="comment-date crayons-link crayons-link--secondary fs-s">
  <time datetime="2021-05-05T12:09:06Z">
    May 5
  </time>

</a>


  <div class="comment__dropdown">
    <button class="dropbtn comment__dropdown-trigger crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon" aria-label="Toggle dropdown menu" aria-haspopup="true">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="asgr3quj0b9txa6saazwphjk4pefkjam" class="crayons-icon pointer-events-none"><title id="asgr3quj0b9txa6saazwphjk4pefkjam">Dropdown menu</title>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.25 12a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm5.25 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm3.75 1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
</svg>

    </button>
    <ul class="crayons-dropdown p-1 right-1 s:right-0 s:left-auto fs-base dropdown">
      <li><a href="https://dev.to/ezeugoobieze/comment/1e6le" class="crayons-link crayons-link--block permalink-copybtn" aria-label="Copy link to mr.Felistus's comment" data-no-instant>Copy link</a></li>
      <li class="comment-actions hidden" data-user-id="206235" data-action="settings-button" data-path="https://dev.to/ezeugoobieze/comment/1e6le/settings" aria-label="Go to mr.Felistus's comment settings"></li>
      <li class="comment-actions hidden" data-action="hide-button" data-commentable-user-id="435270" data-user-id="206235">
        <a href="#" class="crayons-link crayons-link--block hide-comment" data-hide-type="hide" data-comment-id="707656" aria-label="Hide mr.Felistus's comment">
          Hide
        </a>
      </li>
      <li class="mod-actions hidden mod-actions-comment-button" data-path="https://dev.to/ezeugoobieze/comment/1e6le/mod" aria-label="Moderate mr.Felistus's comment"></li>
      <li class="report-abuse-link-wrapper" data-path="/report-abuse?url=https://dev.to/ezeugoobieze/comment/1e6le" aria-label="Report mr.Felistus's comment as abusive or violating our code of conduct and/or terms and conditions"></li>
      <li class="current-user-actions"></li>
    </ul>
  </div>
</header>


        <div
          class="
            comment__body
            text-styles
            text-styles--secondary
            body

          ">
          <p>You have actually stated the obvious. Becoming a developer in Africa is so depressing and frustrating. Challenges here and there; the most annoying part of it all is the poor power supply and high cost of data and the rate at which the data is consumed. I sometimes turn a beggar just to stay afloat and learn. 😞😞</p>


        </div>
    </div>

    <footer class="comment__footer print-hidden">
  <button
    class="crayons-btn crayons-btn--ghost crayons-btn--icon-left crayons-btn--s mr-1 reaction-like inline-flex reaction-button"
    id="button-for-comment-707656"
    data-comment-id="707656"
    title="heart">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="ah5yx9gqpm44j5yfmkr9c9bbcl3j0i08" class="crayons-icon reaction-icon not-reacted"><title id="ah5yx9gqpm44j5yfmkr9c9bbcl3j0i08">Favorite heart outline button</title><path d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"></path></svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="a8u8x8aj14iq41ag1wwr1vrebscrcxy2" class="crayons-icon reaction-icon--like reaction-icon reacted"><title id="a8u8x8aj14iq41ag1wwr1vrebscrcxy2">Favorite heart outline button</title>
    <path d="M5.116 12.595a4.875 4.875 0 015.56-7.68h-.002L7.493 8.098l1.06 1.061 3.181-3.182a4.875 4.875 0 016.895 6.894L12 19.5l-6.894-6.894.01-.01z"></path>
</svg>

    <span class="reactions-count">
      1
    </span>
    <span class="reactions-label hidden m:inline-block">
      &nbsp;like
    </span>
  </button>

    <a
      class="actions crayons-btn crayons-btn--ghost crayons-btn--s crayons-btn--icon-left toggle-reply-form mr-1 inline-flex"
      href="#/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/new/1e6le"
      data-comment-id="707656"
      data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e6le"
      rel="nofollow">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="ais7vcam18o97a2nsqwm67672hgfe5be" class="crayons-icon reaction-icon not-reacted"><title id="ais7vcam18o97a2nsqwm67672hgfe5be">Comment button</title><path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path></svg>

      <span class="hidden m:inline-block">Reply</span>
    </a>

</footer>

  </div>
</div>
    <details class="comment-wrapper js-comment-wrapper comment-wrapper--deep-1 child" open>
      <summary>
        <span class="mx-0 inline-block align-middle">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="a2v0zxs19g7idppwaptlennv8vgyd3r3" class="crayons-icon expanded"><title id="a2v0zxs19g7idppwaptlennv8vgyd3r3">Collapse</title>
    <path d="M12 10.677L8 6.935 9 6l3 2.807L15 6l1 .935-4 3.742zm0 4.517L9 18l-1-.935 4-3.742 4 3.742-1 .934-3-2.805z"></path>
</svg>

          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="arcmhqqjp7c9avn4xoirw5u45sjknyon" class="crayons-icon collapsed"><title id="arcmhqqjp7c9avn4xoirw5u45sjknyon">Expand</title>
    <path d="M12 18l-4-3.771 1-.943 3 2.829 3-2.829 1 .943L12 18zm0-10.115l-3 2.829-1-.943L12 6l4 3.771-1 .942-3-2.828z"></path>
</svg>

        </span>
        <span class="js-collapse-comment-content inline-block align-middle"></span>
      </summary>
      <div
        id="comment-node-707944"
        class="
          comment single-comment-node

          child
          comment--deep-1

        "
        data-comment-id="707944"
        data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e76g"
        data-comment-author-id="435270"
        data-content-user-id="435270">

<div class="comment__inner">
    <a href="https://dev.to/resourcefulmind" class="shrink-0 crayons-avatar mt-4">
    <img class="crayons-avatar__image" width="32" height="32" src="https://res.cloudinary.com/practicaldev/image/fetch/s--6y949wgP--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/435270/7ca3876e-ca85-478e-a2fa-c634f4a78121.png" alt="resourcefulmind profile image" />
  </a>


  <div class="inner-comment comment__details">
    <div class="comment__content crayons-card">



        <header class="comment__header">
  <a href="https://dev.to/resourcefulmind" class="crayons-link crayons-link--secondary flex items-center fw-medium">
    <span class="js-comment-username">Opeyemi Stephen</span>
      <span class="crayons-tooltip inline-block spec-op-author -mr-2" data-tooltip="Author">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="acam4l8wbfmgz4zdyhdgl4gk3c6eoh2c" class="crayons-icon"><title id="acam4l8wbfmgz4zdyhdgl4gk3c6eoh2c">Author</title>
    <path d="M12 8.25a6 6 0 110 12 6 6 0 010-12zm0 2.625l-.992 2.01-2.218.322 1.605 1.564-.379 2.21L12 15.937l1.984 1.043-.379-2.209 1.605-1.564-2.218-.323L12 10.875zm.75-6.376l3.75.001v2.25l-1.022.854a7.45 7.45 0 00-2.728-.817V4.5zm-1.5 0v2.288a7.451 7.451 0 00-2.727.816L7.5 6.75V4.5h3.75z"></path>
</svg>

      </span>
  </a>

  <span class="color-base-30 px-2" role="presentation">&bull;</span>

<a href="https://dev.to/resourcefulmind/comment/1e76g" class="comment-date crayons-link crayons-link--secondary fs-s">
  <time datetime="2021-05-05T23:04:58Z">
    May 5
  </time>

</a>


  <div class="comment__dropdown">
    <button class="dropbtn comment__dropdown-trigger crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon" aria-label="Toggle dropdown menu" aria-haspopup="true">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="aalt8iwr5c2cf8x9jy5dtp92liyx2m5v" class="crayons-icon pointer-events-none"><title id="aalt8iwr5c2cf8x9jy5dtp92liyx2m5v">Dropdown menu</title>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.25 12a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm5.25 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm3.75 1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
</svg>

    </button>
    <ul class="crayons-dropdown p-1 right-1 s:right-0 s:left-auto fs-base dropdown">
      <li><a href="https://dev.to/resourcefulmind/comment/1e76g" class="crayons-link crayons-link--block permalink-copybtn" aria-label="Copy link to Opeyemi Stephen's comment" data-no-instant>Copy link</a></li>
      <li class="comment-actions hidden" data-user-id="435270" data-action="settings-button" data-path="https://dev.to/resourcefulmind/comment/1e76g/settings" aria-label="Go to Opeyemi Stephen's comment settings"></li>
      <li class="comment-actions hidden" data-action="hide-button" data-commentable-user-id="435270" data-user-id="435270">
        <a href="#" class="crayons-link crayons-link--block hide-comment" data-hide-type="hide" data-comment-id="707944" aria-label="Hide Opeyemi Stephen's comment">
          Hide
        </a>
      </li>
      <li class="mod-actions hidden mod-actions-comment-button" data-path="https://dev.to/resourcefulmind/comment/1e76g/mod" aria-label="Moderate Opeyemi Stephen's comment"></li>
      <li class="report-abuse-link-wrapper" data-path="/report-abuse?url=https://dev.to/resourcefulmind/comment/1e76g" aria-label="Report Opeyemi Stephen's comment as abusive or violating our code of conduct and/or terms and conditions"></li>
      <li class="current-user-actions"></li>
    </ul>
  </div>
</header>


        <div
          class="
            comment__body
            text-styles
            text-styles--secondary
            body

          ">
          <p>Think about the endpoints bro. You will reap the rewards of success.</p>


        </div>
    </div>

    <footer class="comment__footer print-hidden">
  <button
    class="crayons-btn crayons-btn--ghost crayons-btn--icon-left crayons-btn--s mr-1 reaction-like inline-flex reaction-button"
    id="button-for-comment-707944"
    data-comment-id="707944"
    title="heart">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="a8i71tvzzh6kezr3buuahhzwzd4guh3n" class="crayons-icon reaction-icon not-reacted"><title id="a8i71tvzzh6kezr3buuahhzwzd4guh3n">Favorite heart outline button</title><path d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"></path></svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="anikm6wd08q5kb9o48adke2rnxuwhuf4" class="crayons-icon reaction-icon--like reaction-icon reacted"><title id="anikm6wd08q5kb9o48adke2rnxuwhuf4">Favorite heart outline button</title>
    <path d="M5.116 12.595a4.875 4.875 0 015.56-7.68h-.002L7.493 8.098l1.06 1.061 3.181-3.182a4.875 4.875 0 016.895 6.894L12 19.5l-6.894-6.894.01-.01z"></path>
</svg>

    <span class="reactions-count">
      2
    </span>
    <span class="reactions-label hidden m:inline-block">
      &nbsp;likes
    </span>
  </button>

    <a
      class="actions crayons-btn crayons-btn--ghost crayons-btn--s crayons-btn--icon-left toggle-reply-form mr-1 inline-flex"
      href="#/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/new/1e76g"
      data-comment-id="707944"
      data-path="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments/1e76g"
      rel="nofollow">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="ajml6oo4o346g0jydnucdhrz8t1hhylx" class="crayons-icon reaction-icon not-reacted"><title id="ajml6oo4o346g0jydnucdhrz8t1hhylx">Comment button</title><path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path></svg>

      <span class="hidden m:inline-block">Reply</span>
    </a>

</footer>

  </div>
</div>


      </div>
    </details>


      </div>
    </details>

        </div>
      </div>

      <div class="align-center">
    <div class="mb-4">
      <a class="crayons-btn crayons-btn--secondary w-100" href="/resourcefulmind/a-beginner-s-journey-into-software-development-in-nigeria-86b/comments">
        View full discussion (108 comments)
      </a>
    </div>


  <nav class="fs-s align-center block" aria-label="Conduct controls">
  <a href="/code-of-conduct" class="crayons-link crayons-link--secondary">Code of Conduct</a>
  <span class="opacity-25 px-2" role="presentation">&bull;</span>
  <a href="/report-abuse" class="crayons-link crayons-link--secondary">Report abuse</a>
</nav>

</div>

  </section>


      </article>

          <section class="crayons-card crayons-card--secondary text-padding mb-4 print-hidden" id="bottom-content-read-next">
    <h2 class="crayons-subtitle-1">Read next</h2>
      <a href="/ishakmohmed/the-art-of-writing-clean-code-my-5-go-to-tricks-4mcl" data-preload-image="" class="crayons-link mt-6 block">
        <div class="flex items-center">
          <span class="crayons-avatar crayons-avatar--xl m:crayons-avatar--2xl mr-4 shrink-0">
            <img loading="lazy" alt="ishakmohmed profile image" class="crayons-avatar__image" width="100" height="100" src="https://res.cloudinary.com/practicaldev/image/fetch/s--dhmUPlI1--/c_imagga_scale,f_auto,fl_progressive,h_100,q_auto,w_100/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/583562/527d95b2-6692-4bae-871e-b47b97da3d05.jpeg" />
          </span>
          <div>
            <h3 class="fs-xl mb-0 lh-tight">The Art Of Writing Clean Code: My 5 Go-To Tricks.</h3>
            <p class="opacity-75 pt-1">
              Mohmed Ishak - <time datetime="2021-05-22T19:23:00Z">May 22</time>
            </p>
          </div>
        </div>
      </a>
      <a href="/kerthin/burger-popup-menu-anime-js-38lo" data-preload-image="https://res.cloudinary.com/practicaldev/image/fetch/s--3_yDbCgD--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ipr3n69zzcrq1x16k3be.png" class="crayons-link mt-6 block">
        <div class="flex items-center">
          <span class="crayons-avatar crayons-avatar--xl m:crayons-avatar--2xl mr-4 shrink-0">
            <img loading="lazy" alt="kerthin profile image" class="crayons-avatar__image" width="100" height="100" src="https://res.cloudinary.com/practicaldev/image/fetch/s--PiGseer6--/c_imagga_scale,f_auto,fl_progressive,h_100,q_auto,w_100/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/634154/b6864fc7-4410-46ca-a11d-bc605dc6d2b1.jpeg" />
          </span>
          <div>
            <h3 class="fs-xl mb-0 lh-tight">Burger Popup Menu (anime.js) 🍔</h3>
            <p class="opacity-75 pt-1">
              Roden - <time datetime="2021-05-23T16:08:52Z">May 23</time>
            </p>
          </div>
        </div>
      </a>
      <a href="/seanpgallivan/solution-jump-game-ii-cn3" data-preload-image="https://res.cloudinary.com/practicaldev/image/fetch/s--bTfQMrVI--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/pdk2wlte28aettqfzqyr.png" class="crayons-link mt-6 block">
        <div class="flex items-center">
          <span class="crayons-avatar crayons-avatar--xl m:crayons-avatar--2xl mr-4 shrink-0">
            <img loading="lazy" alt="seanpgallivan profile image" class="crayons-avatar__image" width="100" height="100" src="https://res.cloudinary.com/practicaldev/image/fetch/s--Lk2aj_lA--/c_imagga_scale,f_auto,fl_progressive,h_100,q_auto,w_100/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/294302/b8052502-9903-46e2-a6f3-ba477c85de69.jpg" />
          </span>
          <div>
            <h3 class="fs-xl mb-0 lh-tight">Solution: Jump Game II</h3>
            <p class="opacity-75 pt-1">
              seanpgallivan - <time datetime="2021-05-05T08:56:53Z">May 5</time>
            </p>
          </div>
        </div>
      </a>
      <a href="/ayushi7rawat/what-is-git-and-github-git-vs-github-18k6" data-preload-image="https://res.cloudinary.com/practicaldev/image/fetch/s--yXAJqUWd--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/vh43v7qwcwhn8j0u01js.png" class="crayons-link mt-6 block">
        <div class="flex items-center">
          <span class="crayons-avatar crayons-avatar--xl m:crayons-avatar--2xl mr-4 shrink-0">
            <img loading="lazy" alt="ayushi7rawat profile image" class="crayons-avatar__image" width="100" height="100" src="https://res.cloudinary.com/practicaldev/image/fetch/s--BoYbpBHs--/c_imagga_scale,f_auto,fl_progressive,h_100,q_auto,w_100/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/602187/e7a9f681-495a-4ca8-aa6e-c572f3a99f2a.jpg" />
          </span>
          <div>
            <h3 class="fs-xl mb-0 lh-tight">What is Git and Github? | Git vs GitHub</h3>
            <p class="opacity-75 pt-1">
              Ayushi Rawat  - <time datetime="2021-05-23T14:20:55Z">May 23</time>
            </p>
          </div>
        </div>
      </a>
  </section>

    </div>
  </main>

  <aside class="crayons-layout__sidebar-right" aria-label="Right sidebar navigation">
      <div class="crayons-article-sticky grid gap-4 break-word" id="article-show-primary-sticky-nav">
  <div class="crayons-card crayons-card--secondary branded-7 p-4 pt-0 gap-4 grid" style="border-top-color: #000000;">
    <div class="-mt-4">
      <a href="/resourcefulmind" class="flex">
        <span class="crayons-avatar crayons-avatar--xl  mr-2 shrink-0">
          <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--RGmRUVDw--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/435270/7ca3876e-ca85-478e-a2fa-c634f4a78121.png" class="crayons-avatar__image" alt="Opeyemi Stephen profile image">
        </span>
        <span class="crayons-link crayons-subtitle-2 mt-5">Opeyemi Stephen</span>
      </a>
    </div>
      <div class="color-base-70">
        Currently getting my butt whooped by JavaScript.
      </div>

    <div class="print-hidden">
      <button class="crayons-btn follow-action-button w-100 whitespace-nowrap" data-info="{&quot;id&quot;:435270,&quot;className&quot;:&quot;User&quot;,&quot;style&quot;:&quot;&quot;}" data-follow-action-button="true" />&nbsp;
    </div>

      <div class="user-metadata-details">
  <ul class="user-metadata-details-inner">

        <li>
          <div class="key">
            Work
          </div>
          <div class="value">
            FrontEnd Developer
              <span class="opacity-50"> at </span>
                TechGeniusAfrica Ltd
          </div>
        </li>
        <li>
          <div class="key">
            Location
          </div>
          <div class="value">
            Lagos, Nigeria
          </div>
        </li>
    <li>
      <div class="key">
        Joined
      </div>
      <div class="value">
        <time datetime="2020-07-19T09:49:58Z" class="date">Jul 19, 2020</time>
      </div>
    </li>
  </ul>
</div>

  </div>

      <div class="crayons-card crayons-card--secondary">
        <header class="crayons-card__header">
          <h3 class="crayons-subtitle-2">
            More from <a href="/resourcefulmind">Opeyemi Stephen</a>
          </h3>
        </header>
        <div>
            <a class="crayons-link crayons-link--contentful" href="/resourcefulmind/thank-you-feeling-good-this-morning-5a8b">
              Thank You! Feeling Good This Morning
              <div class="crayons-link__secondary -ml-1">
                  <span class="crayons-tag"><span class="crayons-tag__prefix">#</span>beginners</span>
                  <span class="crayons-tag"><span class="crayons-tag__prefix">#</span>javascript</span>
                  <span class="crayons-tag"><span class="crayons-tag__prefix">#</span>codenewbie</span>
                  <span class="crayons-tag"><span class="crayons-tag__prefix">#</span>programming</span>
              </div>
            </a>
            <a class="crayons-link crayons-link--contentful" href="/resourcefulmind/it-is-hard-21mg">
              It is hard.
              <div class="crayons-link__secondary -ml-1">
                  <span class="crayons-tag"><span class="crayons-tag__prefix">#</span>javascript</span>
                  <span class="crayons-tag"><span class="crayons-tag__prefix">#</span>programming</span>
                  <span class="crayons-tag"><span class="crayons-tag__prefix">#</span>beginners</span>
              </div>
            </a>
        </div>
      </div>
</div>

  </aside>
</div>


<div class="mod-actions-menu print-hidden"></div>
<div id="mod-actions-menu-btn-area" class="print-hidden"></div>
<div data-testid="flag-user-modal-container" class="flag-user-modal-container hidden"></div>

<div class="fullscreen-code js-fullscreen-code"></div>

  <script async>
    var waitingOnPodcast = setInterval(function() {
  if (typeof initializePodcastPlayback !== 'undefined') {
    initializePodcastPlayback();
    clearInterval(waitingOnPodcast);
  }
}, 1);

    if (document.head.querySelector('meta[name="user-signed-in"][content="true"]')) {
  function displayPollResults(json) {
    var totalVotes = json.voting_data.votes_count;
    json.voting_data.votes_distribution.forEach(function(point) {
      var pollOptionItem = document.getElementById('poll_option_list_item_'+point[0]);
      var optionText = document.getElementById('poll_option_label_'+point[0]).textContent;
      if (json.user_vote_poll_option_id === point[0]) {
        var votedClass = 'optionvotedfor'
      } else {
        var votedClass = 'optionnotvotedfor'
      }
      if (totalVotes === 0) {
        var percent = 0;
      } else {
        var percent = (point[1]/totalVotes)*100;
      }
      var roundedPercent = Math.round( percent * 10 ) / 10
      var percentFromRight = (100-roundedPercent)
      var html = '<span><span class="ltag-votepercent ltag-'+votedClass+'" style="right:'+percentFromRight+'%"></span>        <span class="ltag-votepercenttext">'+optionText+' — '+roundedPercent+'%</span></span>';
      pollOptionItem.innerHTML = html;
      pollOptionItem.classList.add('already-voted')
      document.getElementById('showmethemoney-'+json.poll_id).innerHTML = '<span class="ltag-voting-results-count">'+totalVotes+' total votes</span>';
    })
  }

  var polls = document.getElementsByClassName('ltag-poll');
  for (var i = 0; i < polls.length; i += 1) {
    var poll = polls[i]
    var pollId = poll.dataset.pollId
    window.fetch('/poll_votes/'+pollId)
    .then(function(response){
      response.json().then(
        function(json) {
          if (json.voted) {
            displayPollResults(json)
          } else {
            var els = document.getElementById('poll_'+json.poll_id).getElementsByClassName('ltag-polloption');

            for (i = 0; i < els.length; i += 1) {
              els[i].addEventListener('click', function(e) {
                var tokenMeta = document.querySelector("meta[name='csrf-token']")
                if (!tokenMeta) {
                  alert('Whoops. There was an error. Your vote was not counted. Try refreshing the page.')
                  return
                }
                var csrfToken = tokenMeta.getAttribute('content')
                var optionId = e.target.dataset.optionId
                window.fetch('/poll_votes', {
                  method: 'POST',
                  headers: {
                    'X-CSRF-Token': csrfToken,
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({poll_vote: { poll_option_id: optionId } }),
                  credentials: 'same-origin',
                }).then(function(response){
                  response.json().then(function(j){displayPollResults(j)})
                })
              });
            }

            document.getElementById('showmethemoney-'+json.poll_id).addEventListener('click', function() {
              pollId = this.dataset.pollId
              window.fetch('/poll_skips', {
                method: 'POST',
                headers: {
                  'X-CSRF-Token': csrfToken,
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({poll_skip: {poll_id: pollId }}),
                credentials: 'same-origin',
              }).then(function(response){
                response.json().then(function(j){displayPollResults(j)})
              })
            });
          }
        }
      )
    })
  }
} else {
    var els = document.getElementsByClassName('ltag-poll')
    for (i = 0; i < els.length; i += 1) {
      els[i].onclick = function(e) {
        if (typeof showLoginModal !== "undefined") {
          showLoginModal();
        }
      }
    }
}

    function activateRunkitTags() {
  if (!areAnyRunkitTagsPresent())
    return

  var checkRunkit = setInterval(function() {
    try {
      dynamicallyLoadRunkitLibrary()

      if (typeof(RunKit) === 'undefined') {
        return
      }

      replaceTagContentsWithRunkitWidget()
      clearInterval(checkRunkit);
    } catch(e) {
      console.error(e);
      clearInterval(checkRunkit);
    }
  }, 200);
}

function isRunkitTagAlreadyActive(runkitTag) {
  return runkitTag.querySelector("iframe") !== null;
};

function areAnyRunkitTagsPresent() {
  var presentRunkitTags = document.getElementsByClassName("runkit-element");

  return presentRunkitTags.length > 0
}

function replaceTagContentsWithRunkitWidget() {
  var targets = document.getElementsByClassName("runkit-element");
  for (var i = 0; i < targets.length; i++) {
    if (isRunkitTagAlreadyActive(targets[i])) {
      continue;
    }

    var wrapperContent = targets[i].textContent;
    if (/^(<iframe src)/.test(wrapperContent) === false) {
      if (targets[i].children.length > 0) {
        var preamble = targets[i].children[0].textContent;
        var content = targets[i].children[1].textContent;
        targets[i].innerHTML = "";
        var notebook = RunKit.createNotebook({
          element: targets[i],
          source: content,
          preamble: preamble
        });
      }
    }
  }
};

function dynamicallyLoadRunkitLibrary() {
  if (typeof(dynamicallyLoadScript) === "undefined")
    return

  dynamicallyLoadScript("//embed.runkit.com")
}

activateRunkitTags();

    var videoPreviews = document.getElementsByClassName("ltag__twitter-tweet__media__video-wrapper");
[].forEach.call(videoPreviews, function(el) {
  el.onclick = function(e) {
    var divHeight = el.offsetHeight;
    el.style.maxHeight = divHeight + "px";
    el.getElementsByClassName("ltag__twitter-tweet__media--video-preview")[0].style.display = "none";
    el.getElementsByClassName("ltag__twitter-tweet__video")[0].style.display = "block";
    el.getElementsByTagName("video")[0].play();
  }
});
var tweets = document.getElementsByClassName("ltag__twitter-tweet__main");
[].forEach.call(tweets, function(tweet){
  tweet.onclick = function(e) {
    if (e.target.nodeName == "A" || e.target.parentElement.nodeName == "A") {
      return;
    }
    window.open(tweet.dataset.url,"_blank");
  }
});

    var subscribeBtn = document.getElementById('subscribe-btn');

function isUserSignedIn() {
  return document.head.querySelector('meta[name="user-signed-in"][content="true"]') !== null;
}

// Hiding/showing elements
// If clearSubscribeButton is false, we will not clear out the subscription-signed-in area,
// which will allow users to re-submit their subscription if they see any error messages.
// ***************************************
function clearSubscriptionArea({ clearSubscribeButton = true } = {}) {
  if (!clearSubscribeButton) {
    // Allow users to try submitting again if they see an error.
    hideSubscriptionSignedIn();
  }

  const subscriptionSignedOut = document.getElementById('subscription-signed-out');
  if (subscriptionSignedOut) {
    subscriptionSignedOut.classList.add("hidden");
  }

  hideResponseMessage();

  const subscriberAppleAuth = document.getElementById('subscriber-apple-auth');
  if (subscriberAppleAuth) {
    subscriberAppleAuth.classList.add("hidden");
  }

  hideConfirmationModal();
}

// Hides the response message (which displays success/error messages) if it exists.
// ***************************************
function hideResponseMessage() {
  const responseMessage = document.getElementById('response-message');
  if (responseMessage) {
    responseMessage.classList.add("hidden");
  }
}

function showSignedIn() {
  clearSubscriptionArea();
  const subscriptionSignedIn = document.getElementById('subscription-signed-in');
  if (subscriptionSignedIn) {
    subscriptionSignedIn.classList.remove("hidden");
  }

  const profileImages = document.getElementById('profile-images');
  if (profileImages) {
    profileImages.classList.remove("signed-out");
    profileImages.classList.add("signed-in");
  }
}

function showSignedOut() {
  clearSubscriptionArea();

  const subscriptionSignedOut = document.getElementById('subscription-signed-out');
  if (subscriptionSignedOut) {
    subscriptionSignedOut.classList.remove("hidden");
  }

  const profileImages = document.getElementById('profile-images');
  if (profileImages) {
    profileImages.classList.remove("signed-in");
    profileImages.classList.add("signed-out");
  }

  const subscriberProfileImage = document.getElementsByClassName('ltag__user-subscription-tag__subscriber-profile-image')[0];
  if (subscriberProfileImage) {
    subscriberProfileImage.classList.add("hidden");
  }
}

function showResponseMessage(noticeType, msg) {
  clearSubscriptionArea(clearSubscribeButton = false);

  const responseMessage = document.getElementById('response-message');
  if (responseMessage) {
    responseMessage.classList.remove("hidden");
    responseMessage.classList.add('crayons-notice--"noticeType}');
    responseMessage.textContent = msg;

    if (noticeType === 'danger') {
      // Allow users to try resubscribing if they see an error message.
      subscribeBtn.textContent = "Submit";
      subscribeBtn.disabled = false;
    }
  }
}

function showAppleAuthMessage() {
  clearSubscriptionArea();
  const subscriber = userData();
  if (subscriber) {
    updateProfileImages('.ltag__user-subscription-tag__subscriber-profile-image', subscriber);
  }

  const subscriberAppleAuth = document.getElementById('subscriber-apple-auth');
  if (subscriberAppleAuth) {
    subscriberAppleAuth.classList.remove("hidden");
  }
}

function showSubscribed() {
  hideSubscriptionSignedIn();
  updateSubscriberData();
  const authorUsername = document.getElementById('user-subscription-tag')?.dataset.authorUsername;
  const alreadySubscribedMsg = 'You are already subscribed.';
  showResponseMessage('success', alreadySubscribedMsg);
}

function showConfirmationModal() {
  const confirmationModal = document.getElementById('user-subscription-confirmation-modal');
  if (confirmationModal) {
    confirmationModal.classList.remove("hidden");
  }
}

function hideConfirmationModal() {
  const confirmationModal = document.getElementById('user-subscription-confirmation-modal');
  if (confirmationModal) {
    confirmationModal.classList.add("hidden");
  }
}

// Updating DOM elements
// ***************************************
function updateSubscriberData() {
  const subscriber = userData();
  if (subscriber.email) {
    updateElementsTextContent('.ltag__user-subscription-tag__subscriber-email', subscriber.email);
  }

  updateProfileImages('.ltag__user-subscription-tag__subscriber-profile-image', subscriber);
}

function updateElementsTextContent(identifier, value) {
  const elements = document.querySelectorAll(identifier);

  elements.forEach(function(element) {
    element.textContent = value;
  });
}

function updateProfileImages(identifier, subscriber) {
  const profileImages = document.querySelectorAll('img"identifier}');

  profileImages.forEach(function(profileImage) {
    profileImage.src = subscriber.profile_image_90;
    profileImage.alt = '"subscriber.username} profile image';
  });
}

function hideSubscriptionSignedIn() {
  const subscriptionSignedIn = document.getElementById('subscription-signed-in');
  if (subscriptionSignedIn) {
    subscriptionSignedIn.classList.add("hidden");
  }
}

// Adding event listeners for 'click'
// ***************************************
function addSignInClickHandler() {
  const signInBtn = document.getElementById('sign-in-btn');
  if (signInBtn) {
    signInBtn.addEventListener('click', function(e) {
      if (typeof showLoginModal !== 'undefined') {
        showLoginModal();
      }
    });
  }
}

function addConfirmationModalClickHandlers() {
  if (subscribeBtn) {
    subscribeBtn.addEventListener('click', function(e) {
      showConfirmationModal();
    });
  }

  const cancelBtn = document.getElementById('cancel-btn');
  if (cancelBtn) {
    cancelBtn.addEventListener('click', function(e) {
      hideConfirmationModal();
    });
  }

  const closeConfirmationModal = document.getElementById('close-confirmation-modal');
  if (closeConfirmationModal) {
    closeConfirmationModal.addEventListener('click', function(e) {
      hideConfirmationModal();
    });
  }

  const confirmationModal = document.getElementById('confirmation-btn')
  if (confirmationModal) {
    confirmationModal.addEventListener('click', function(e) {
      handleSubscription();
    });
  }
}

// API calls
// ***************************************
function submitSubscription() {
  // Hide any error messages previously rendered.
  hideResponseMessage();

  subscribeBtn.textContent = "Submitting...";
  subscribeBtn.disabled = true;

  const headers = {
    Accept: 'application/json',
    'X-CSRF-Token': window.csrfToken,
    'Content-Type': 'application/json',
  }

  const articleBody = document.getElementById('article-body');
  const articleId = (articleBody ? articleBody.dataset.articleId : null);

  const subscriber = userData();
  const body = JSON.stringify(
      {
        user_subscription: {
          source_type: 'Article',
          source_id: articleId,
          subscriber_email: subscriber.email
        }
      }
    )

  return fetch('/user_subscriptions', {
    method: 'POST',
    headers: headers,
    credentials: 'same-origin',
    body: body,
  }).then(function(response) {
    return response.json();
  });
}

function fetchIsSubscribed() {
  const articleBody = document.getElementById('article-body');
  const articleId = (articleBody ? articleBody.dataset.articleId : null);

  const params = new URLSearchParams({
    source_type: 'Article',
    source_id: articleId
  }).toString();

  const headers = {
    Accept: 'application/json',
    'X-CSRF-Token': window.csrfToken,
    'Content-Type': 'application/json',
  }

  return fetch('/user_subscriptions/subscribed?"params}', {
    method: 'GET',
    headers: headers,
    credentials: 'same-origin',
  }).then(function(response) {
    if (response.ok) {
      return response.json();
    } else {
      console.error('Base data error: "response.status} - "response.statusText}');
    }
  });
}

// Handle API responses
// ***************************************
function handleSubscription() {
  hideConfirmationModal(); // Close the modal once the user has confirmed.

  submitSubscription().then(function(response) {
    if (response.success) {
      const userSubscriptionTag = document.getElementById('user-subscription-tag');
      const authorUsername = (userSubscriptionTag ? userSubscriptionTag.dataset.authorUsername : null);
      const successMsg = 'You are now subscribed and may receive emails from "authorUsername}';
      showResponseMessage('success', successMsg);
      hideSubscriptionSignedIn();
    } else {
      showResponseMessage('danger', response.error);
    }
  });
}

function checkIfSubscribed() {
  fetchIsSubscribed().then(function(response) {
    const subscriber = userData();
    const isSubscriberAuthedWithApple = (subscriber.email ? subscriber.email.endsWith('@privaterelay.appleid.com') : false);

    if (response.is_subscribed) {
      showSubscribed();
    } else if (isSubscriberAuthedWithApple) {
      showAppleAuthMessage();
    } else {
      updateSubscriberData();
    }
  });
}

// We load this JS on every Article. This is to only run it on Articles
// where the UserSubscription liquid tag is present
if (document.getElementById('user-subscription-tag')) {
  // The markup defaults to signed out UX
  if (isUserSignedIn()) {
    showSignedIn();
    addConfirmationModalClickHandlers();

    // We need access to some DOM elements (i.e. csrf token, article id, userData, etc.)
    document.addEventListener('DOMContentLoaded', function() {
      checkIfSubscribed();
    });
  } else {
    showSignedOut();
    addSignInClickHandler();
  }
}

  </script>

  </div>
</div>
    <footer class="crayons-footer print-hidden">
  <div id="footer-container" class="crayons-layout crayons-layout--limited-m crayons-footer__container">
    <nav class="m:-mt-4" aria-label="Site information">
      <a href="/" class="crayons-link inline-block p-2">Home</a>
          <a href="/listings" class="crayons-link inline-block p-2">Listings</a>
          <a href="/pod" class="crayons-link inline-block p-2">Podcasts</a>
          <a href="/videos" class="crayons-link inline-block p-2">Videos</a>
          <a href="/tags" class="crayons-link inline-block p-2">Tags</a>
          <a href="/code-of-conduct" class="crayons-link inline-block p-2">Code of Conduct</a>
          <a href="/faq" class="crayons-link inline-block p-2">FAQ</a>
          <a href="https://shop.dev.to/" class="crayons-link inline-block p-2">DEV Shop</a>
          <a href="/sponsors" class="crayons-link inline-block p-2">Sponsors</a>
          <a href="/about" class="crayons-link inline-block p-2">About</a>
          <a href="/privacy" class="crayons-link inline-block p-2">Privacy Policy</a>
          <a href="/terms" class="crayons-link inline-block p-2">Terms of use</a>
          <a href="/contact" class="crayons-link inline-block p-2">Contact</a>

        <a href="/enter" class="crayons-link fw-bold inline-block p-2">Sign In/Up</a>

      <div class="pt-4">  <a
    href="https://twitter.com/thepracticaldev"
    target="_blank"
    class="crayons-link crayons-link--secondary mx-2"
    rel="noopener">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="a787nxj538m2fa7qm3ow3cheur68fxfq" class="crayons-icon"><title id="a787nxj538m2fa7qm3ow3cheur68fxfq">Twitter</title>
    <path d="M22.162 5.656a8.383 8.383 0 01-2.402.658A4.196 4.196 0 0021.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 00-7.126 3.814 11.874 11.874 0 01-8.62-4.37 4.168 4.168 0 00-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 01-1.894-.523v.052a4.185 4.185 0 003.355 4.101 4.211 4.211 0 01-1.89.072A4.185 4.185 0 007.97 16.65a8.395 8.395 0 01-6.191 1.732 11.83 11.83 0 006.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.495 8.495 0 002.087-2.165l-.001-.001z" fill="#65bbf2"></path>
</svg>

  </a>
  <a
    href="https://facebook.com/thepracticaldev"
    target="_blank"
    class="crayons-link crayons-link--secondary mx-2"
    rel="noopener">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="aoza02vre9gt2kegeudaxu907x3n62sr" class="crayons-icon"><title id="aoza02vre9gt2kegeudaxu907x3n62sr">Facebook</title>
    <path d="M15.402 21v-6.966h2.333l.349-2.708h-2.682V9.598c0-.784.218-1.319 1.342-1.319h1.434V5.857a19.188 19.188 0 00-2.09-.107c-2.067 0-3.482 1.262-3.482 3.58v1.996h-2.338v2.708h2.338V21H4a1 1 0 01-1-1V4a1 1 0 011-1h16a1 1 0 011 1v16a1 1 0 01-1 1h-4.598z"></path>
</svg>

  </a>
  <a
    href="https://github.com/thepracticaldev"
    target="_blank"
    class="crayons-link crayons-link--secondary mx-2"
    rel="noopener">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="ann7bpmsvpw0qghidjwwajpzgt0oirqr" class="crayons-icon"><title id="ann7bpmsvpw0qghidjwwajpzgt0oirqr">Github</title>
    <path d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 006.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 012.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0022 12c0-5.525-4.475-10-10-10z"></path>
</svg>

  </a>
  <a
    href="https://instagram.com/thepracticaldev"
    target="_blank"
    class="crayons-link crayons-link--secondary mx-2"
    rel="noopener">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="a8h3822z8eqzwfr7wjpgrpcfvstcm0ce" class="crayons-icon"><title id="a8h3822z8eqzwfr7wjpgrpcfvstcm0ce">Instagram</title>
    <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.509.5.902 1.105 1.153 1.772.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772c-.5.508-1.105.902-1.772 1.153-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 011.153-1.772A4.897 4.897 0 015.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm6.5-.25a1.25 1.25 0 10-2.5 0 1.25 1.25 0 002.5 0zM12 9a3 3 0 110 6 3 3 0 010-6z"></path>
</svg>

  </a>
  <a
    href="https://twitch.com/thepracticaldev"
    target="_blank"
    class="crayons-link crayons-link--secondary mx-2"
    rel="noopener">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="agos26ypfan09m5xosd4av8ggh1ta9k1" class="crayons-icon"><title id="agos26ypfan09m5xosd4av8ggh1ta9k1">Twitch</title>
    <path d="M4.3 3H21v11.7l-4.7 4.7h-3.9l-2.5 2.4H7v-2.4H3V6.2L4.3 3zM5 17.4h4v2.4h.095l2.5-2.4h3.877L19 13.872V5H5v12.4zM15 8h2v4.7h-2V8zm0 0h2v4.7h-2V8zm-5 0h2v4.7h-2V8z"></path>
</svg>

  </a>
</div>
    </nav>
    <hr class="crayons-footer__divider">
    <p class="fs-s crayons-footer__description"><a href="/" aria-label="DEV Community Home" class="crayons-link">DEV Community</a> – A constructive and inclusive social network for software developers. With you every step of your journey.</p>
    <div class="m:-mb-4 crayons-footer__description">
      <p class="fs-s">Built on <a href="https://www.forem.com" class="crayons-link" target="_blank" rel="noopener">Forem</a> — the <a href="https://dev.to/t/opensource" target="_blank" rel="noopener" class="crayons-link">open source</a> software that powers <a href="https://dev.to" target="_blank" rel="noopener" class="crayons-link">DEV</a> and other inclusive communities.</p>
      <p class="fs-s">Made with love and <a href="https://dev.to/t/rails" target="_blank" rel="noopener" class="crayons-link">Ruby on Rails</a>. DEV Community <span title="copyright">&copy;</span> 2016 - 2021.</p>
      <div><a href="https://www.forem.com" target="_blank" rel="noopener" class="inline-block mt-4"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" role="img" aria-labelledby="a8hy8qecyqlk2b3vad1fzrocw33awh8q" class="crayons-icon crayons-icon--default"><title id="a8hy8qecyqlk2b3vad1fzrocw33awh8q">Forem logo</title>
    <g clip-path="url(#clip0)" fill="#1AB3A6">
        <path d="M4.603 1.438a8.056 8.056 0 017.643 5.478 8.543 8.543 0 00-3.023 5.968H8.054C3.606 12.884 0 9.296 0 4.87V1.468a.03.03 0 01.03-.03h4.573zM23.97 6.515a.03.03 0 01.03.03v2.833c0 4.11-3.354 7.442-7.491 7.442h-2.881v5.726h-2.305V14.53l.022-1.145c.294-3.843 3.526-6.87 7.469-6.87h5.155z"></path>
    </g>
    <defs>
        <clipPath id="clip0">
            <path fill="#fff" d="M0 0h24v24H0z"></path>
        </clipPath>
    </defs>
</svg>
</a></div>
    </div>
  </div>
</footer>
<div id="snack-zone"></div>

    <div id="global-signup-modal" class="authentication-modal hidden">
<div class="authentication-modal__container">
  <figure class="authentication-modal__image-container">
    <img class="authentication-modal__image" src="https://res.cloudinary.com/practicaldev/image/fetch/s--pcSkTMZL--/c_limit,f_auto,fl_progressive,q_80,w_190/https://practicaldev-herokuapp-com.freetls.fastly.net/assets/devlogo-pwa-512.png"
      alt="DEV Community" />
  </figure>
  <div class="authentication-modal__content">
    <p class="authentication-modal__description">
        We&#39;re a place where coders share, stay up-to-date and grow their careers.
    </p>
  </div>
  <div class="authentication-modal__actions">
    <a href="/enter" class="crayons-btn" aria-label="Log in" data-no-instant>
      Log in
    </a>
    <a href="/enter?state=new-user" class="crayons-btn crayons-btn--ghost-brand" aria-label="Create new account" data-no-instant>
      Create new account
    </a>
  </div>
  <footer class="authentication-modal__footer">
    <p class="authentication-modal__footer-label">
      We strive for transparency and don't collect excess data.
    </p>
  </footer>
  </div>
</div>

<script src="https://dev.to/packs/js/runtime~signupModalShortcuts-a595066d8336cfa99ad3.js" defer="defer"></script>
<script src="https://dev.to/packs/js/signupModalShortcuts-c7af4f1db5d1f7186d3b.chunk.js" defer="defer"></script>

  </body>
  </html>
`
