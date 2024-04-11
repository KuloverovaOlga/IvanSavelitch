import $ from "jquery";
import Swiper from 'swiper';
import { rem } from '../utils/constants';

$(".lk-sidebar_box-top").on("click", function() {
    $(this).toggleClass('active')
    $(this).siblings('.lk-sidebar_box-bottom').slideToggle("slow")
});