/**
 * Created by wangbiaozy on 2017/10/31.
 */
$(function () {
    //地址切换选择
    var $addressListBox = $('#addressListBox');
    $addressListBox.on('click','li',function () {
        var $this = $(this);
        $this.children('span').toggleClass('active');
        $this.siblings().children('span').removeClass('active');
    });
    //校验按钮
    $('#checkBtn').on('click',function () {
        
    });
    //显示地址列表弹窗
    function showAddressList() {
        $('.addressWrap').show();
    }
    //显示Loading动画层
    function showLoadingBox() {
        $('.loadingBox').show();
    }
    //隐藏地址列表弹窗
    function hideAddressList() {
        $('.addressWrap').hide();
    }
    //隐藏Loading动画层
    function hideLoadingBox() {
        $('.loadingBox').hide();
    }
    showAddressList();
    showLoadingBox();
});
