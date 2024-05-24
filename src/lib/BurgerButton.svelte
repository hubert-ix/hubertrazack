<script>
    import { createEventDispatcher } from "svelte";

    let dispatch = createEventDispatcher();
</script>

<div class="mobile-menu-link" id="mobile-menu-link" on:click={() => dispatch("clicked")}>
  <span></span>
  <span></span>
  <span></span>
</div>


<style>
  .mobile-menu-link {
    width: 30px;
    margin-top: 6px;
    display: none;
    flex-direction: column;
    position: relative;
    -webkit-user-select: none;
    user-select: none;
  }

  .mobile-menu-link span {
    display: flex;
    width: 29px;
    height: 2px;
    margin-bottom: 5px;
    position: relative;
    background: #ffffff;
    border-radius: 3px;
    z-index: 1;
    transform-origin: 5px 0px;
    transition: transform 0.3s cubic-bezier(0.77,0.2,0.05,1.0), background 0.3s cubic-bezier(0.77,0.2,0.05,1.0), opacity 0.3s ease;
  }

  .mobile-menu-link span:first-child {
    transform-origin: 0% 0%;
  }

  .mobile-menu-link span:nth-last-child(2) {
    transform-origin: 0% 100%;
  }

  header.mobile .mobile-menu-link span {
    opacity: 1;
    transform: rotate(45deg) translate(-10px, -10px);
  }

  header.mobile .mobile-menu-link span:nth-last-child(3) {
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);
  }

  header.mobile .mobile-menu-link span:nth-last-child(2) {
    transform: rotate(-45deg) translate(-5px, 7px);
  }

  @media only screen and (max-width: 630px) {
    .mobile-menu-link {
      display: flex;
    }
  }
</style>