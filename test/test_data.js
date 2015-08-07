    var $result = $('#result1');
    var url = 'http://10.77.34.122/webstorm/Application-Grid/test/php/';
    //var url = 'http://fetech.nhnent.com/svnrun/fetech/prototype/trunk/grid/test/php/';
//    var url = 'http://budapest.pe.kr/grid/test/php/';

    var grid = new ne.Grid({
        el: $('#wrapper1'),
        columnModelList: dummy_data.columnModel_1,
        selectType: 'checkbox',
        scrollX: true,
        scrollY: true,
        columnFixIndex: 5,
        rowHeight: 30,
        displayRowCount: 10,
        headerHeight: 50,
        useDataCopy: true,
        minimumColumnWidth: 20
    }).on('response', function(data) {
        console.log('onResponse');
    }).on('successResponse', function(data) {
            console.log('onSuccessResponse');
    }).use('Net', {
        el: $('#form'),
        perPage: 100,
        api: {
            'readData': url + 'dummy_request.php',
            'updateData': url + 'backbone_test.php',
            'deleteData': url + 'backbone_test.php',
            'modifyData': url + 'backbone_test.php',
            'downloadData': url + 'backbone_test.php',
            'downloadAllData': url + 'backbone_test.php'
        }
    });

    var net = grid.getAddOn('Net');
    $('#setvalue').on('click', function(e) {
        grid.setValue(0, 'column2', 'Dirty');
    });

    $('#append').on('click', function(e) {
        grid.appendRow();
    });
    $('#prepend').on('click', function(e) {
        grid.prependRow();
    });
    $('#sort').on('click', function(e) {
        grid.sort('columnName2');
    });
    $('#createData').on('click', function(e) {
        net.request('createData');
    });
    $('#updateData').on('click', function(e) {
        net.request('updateData');

    });
    $('#deleteData').on('click', function(e) {
        net.request('deleteData');
    });
    $('#modifyData').on('click', function(e) {
        net.request('modifyData');
    });
    $('#downloadData').on('click', function(e) {
        //net.downloadData();
    });
    $('#downloadAllData').on('click', function(e) {
        //net.downloadAllData();
    });
