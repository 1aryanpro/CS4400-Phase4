<script>
    import { snakeToTitleCase } from '$lib';

    export let data;

    let viewName = data.viewName;
    let viewData = data.viewData;

    let tableHTML = '';

    if (viewData && viewData.length > 0) {
        const keys = Object.keys(viewData[0]);

        tableHTML += '<table>';
        
        tableHTML += '<thead><tr>';
        for (const key of keys) {
            tableHTML += `<th>${snakeToTitleCase(key)}</th>`;
        }
        tableHTML += '</tr></thead>';
        
        tableHTML += '<tbody>';
        for (let i = 0; i < viewData.length; i++) {
            tableHTML += '<tr>';
            for (const key of keys) {
                tableHTML += `<td>${viewData[i][key]}</td>`;
            }
            tableHTML += '</tr>';
        }
        tableHTML += '</tbody>';

        tableHTML += '</table>';
    }
</script>

<h1>View: {snakeToTitleCase(viewName)}</h1>

{@html tableHTML}