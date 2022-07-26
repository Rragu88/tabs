const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tabPanels = Array.from(tabs.querySelectorAll('[role="tabpanel"]'));

function handleTabClick(event) {
    tabPanels.forEach(panel => panel.hidden = true);
    tabButtons.forEach(tab => tab.setAttribute('aria-selected', false));
    event.currentTarget.setAttribute('aria-selected', true);
    const { id } = event.currentTarget;
    // const tabPanel = tabs.querySelector(`[aria-labelledby="${id}"]`);
    // console.log(tabPanel);
    // tabPanel.hidden = false;

    const tabPanel = tabPanels.find((panel) => {
        if (panel.getAttribute('aria-labelledby') === id) {
            return true;
        }
    })
    
    tabPanel.hidden = false;
}

tabButtons.forEach(button => button.addEventListener('click', handleTabClick));
