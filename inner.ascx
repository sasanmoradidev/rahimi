<%@ Control Language="vb" AutoEventWireup="false" Explicit="True" Inherits="DotNetNuke.UI.Skins.Skin" %>
<%@ Register TagPrefix="dnn" TagName="STYLES" Src="~/Admin/Skins/Styles.ascx" %>
<%@ Register TagPrefix="dnn" TagName="CURRENTDATE" Src="~/Admin/Skins/CurrentDate.ascx" %>
<%@ Register TagPrefix="dnn" TagName="LANGUAGE" Src="~/Admin/Skins/Language.ascx" %>
<%@ Register TagPrefix="dnn" TagName="LOGO" Src="~/Admin/Skins/Logo.ascx" %>
<%@ Register TagPrefix="dnn" TagName="SEARCH" Src="~/Admin/Skins/Search.ascx" %>
<%@ Register TagPrefix="dnn" TagName="USER" Src="~/Admin/Skins/User.ascx" %>
<%@ Register TagPrefix="dnn" TagName="LOGIN" Src="~/Admin/Skins/Login.ascx" %>
<%@ Register TagPrefix="dnn" TagName="PRIVACY" Src="~/Admin/Skins/Privacy.ascx" %>
<%@ Register TagPrefix="dnn" TagName="TERMS" Src="~/Admin/Skins/Terms.ascx" %>
<%@ Register TagPrefix="dnn" TagName="BREADCRUMB" Src="~/Admin/Skins/BreadCrumb.ascx" %>
<%@ Register TagPrefix="dnn" TagName="COPYRIGHT" Src="~/Admin/Skins/Copyright.ascx" %>
<%@ Register TagPrefix="dnn" TagName="LINKTOMOBILE" Src="~/Admin/Skins/LinkToMobileSite.ascx" %>
<%@ Register TagPrefix="dnn" TagName="META" Src="~/Admin/Skins/Meta.ascx" %>
<%@ Register TagPrefix="dnn" TagName="MENU" Src="~/DesktopModules/DDRMenu/Menu.ascx" %>
<%@ Register TagPrefix="dnn" Namespace="DotNetNuke.Web.Client.ClientResourceManagement" Assembly="DotNetNuke.Web.Client" %>
<%@ Register TagPrefix="dnn" TagName="jQuery" Src="~/Admin/Skins/jQuery.ascx" %>
<dnn:META ID="META1" runat="server" Name="viewport" Content="width=device-width,initial-scale=1" />
<dnn:JQUERY ID="dnnjQuery" runat="server" DnnjQueryPlugins="true" jQueryHoverIntent="true" jQueryUI="true" />



<!--[if lt IE 9]>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.2/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
<![endif]-->

<header>
    <div class="headgroup">
        <nav class="navbar navbar-expand-lg">
            <div class="container">
                <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbar-content">
                    <div class="hamburger-toggle">
                        <div class="hamburger">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </button>
                <div class="headlogo ms-auto mr-auto">
                    <dnn:LOGO runat="server" ID="dnnLOGO" />
                </div>
                <div class="collapse navbar-collapse" id="navbar-content">
                    <ul class="navbar-nav mr-auto mb-2 mb-lg-0">

                        <li class="nav-item dropdown dropdown-mega position-static">
                            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown"
                                data-bs-auto-close="outside">Megamenu</a>
                            <div class="dropdown-menu shadow">
                                <div class="mega-content">
                                    <div class="container-fluid">
                                        <div class="row w-100">
                                            <div class="col-3 g-0">
                                                <ul class="levelone">
                                                    <li>
                                                        <a href="#">معادن</a>
                                                        <ul>
                                                            <li><a href="#" data-img="./assets/img/1x/one.png">
                                                                    یک</a></li>
                                                            <li><a href="#" data-img="./assets/img/1x/two.png">
                                                                    دو</a></li>
                                                            <li><a href="#" data-img="./assets/img/1x/three.png">
                                                                    سه</a></li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <a href="#">استخراج</a>
                                                        <ul>
                                                            <li><a href="#"> چهار</a></li>
                                                            <li><a href="#"> پنج</a></li>
                                                            <li><a href="#"> شیش</a></li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <a href="#">سنگ معدن</a>
                                                        <ul>
                                                            <li><a href="#"> هفت</a></li>
                                                            <li><a href="#"> هشت</a></li>
                                                            <li><a href="#"> نه</a></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="col-3 g-0">
                                                <div class="menulist"></div>
                                            </div>
                                            <div class="col-6 g-0">
                                                <div class="linkimage">
                                                    <img src="./assets/img/1x/temp.png" alt="" srcset="">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</header>
<main>
    <section>
        <div class="container-fluid">
            <div class="row">
                <div id="banner" class="col-12" runat="server"></div>
            </div>
        </div>
    </section>
    <section>
        <div class="container">
            <div class="row dnnpane">
                <div runat="server" id="ContentPane" class="i_content_grid12 col-md-12"></div>
            </div>
            <div class="row dnnpane">
                <div runat="server" id="OneGrid6A" class="i_one_grid6a col-md-6"></div>
                <div runat="server" id="OneGrid6B" class="i_one_grid6b col-md-6"></div>
            </div>
            <div class="row dnnpane">
                <div runat="server" id="TwoGrid4A" class="i_two_grid4a col-md-4"></div>
                <div runat="server" id="TwoGrid4B" class="i_two_grid4b col-md-4"></div>
                <div runat="server" id="TwoGrid4C" class="i_two_grid4c col-md-4"></div>
            </div>
            <div class="row dnnpane">
                <div runat="server" id="ThreeGrid3A" class="i_three_grid3a col-md-3"></div>
                <div runat="server" id="ThreeGrid3B" class="i_three_grid3b col-md-3"></div>
                <div runat="server" id="ThreeGrid3C" class="i_three_grid3c col-md-3"></div>
                <div runat="server" id="ThreeGrid3D" class="i_three_grid3d col-md-3"></div>
            </div>
            <div class="row dnnpane">
                <div runat="server" id="FourGrid12" class="i_four_grid12 col-md-12"></div>
            </div>
            <div class="row dnnpane">
                <div runat="server" id="FiveGrid4" class="i_five_grid4 col-md-4"></div>
                <div runat="server" id="FiveGrid8" class="i_five_grid8 col-md-8"></div>
            </div>
            <div class="row dnnpane">
                <div runat="server" id="SixGrid8" class="i_six_grid8 col-md-8"></div>
                <div runat="server" id="SixGrid4" class="i_six_grid4 col-md-4"></div>
            </div>
            <div class="row dnnpane">
                <div runat="server" id="SevenGrid3" class="i_seven_grid3 col-md-3"></div>
                <div runat="server" id="SevenGrid9" class="i_seven_grid9 col-md-9"></div>
            </div>
            <div class="row dnnpane">
                <div runat="server" id="EightGrid9" class="i_eight_grid9 col-md-9"></div>
                <div runat="server" id="EightGrid3" class="i_eight_grid3 col-md-3"></div>
            </div>
            <div class="row dnnpane">
                <div runat="server" id="NineGrid3A" class="i_nine_grid3a col-md-3"></div>
                <div runat="server" id="NineGrid3B" class="i_nine_grid3b col-md-3"></div>
                <div runat="server" id="NineGrid3C" class="i_nine_grid3c col-md-3"></div>
                <div runat="server" id="NineGrid3D" class="i_nine_grid3d col-md-3"></div>
            </div>
            <div class="row dnnpane">
                <div runat="server" id="TenGrid4A" class="i_ten_grid4a col-md-4"></div>
                <div runat="server" id="TenGrid4B" class="i_ten_grid4b col-md-4"></div>
                <div runat="server" id="TenGrid4C" class="i_ten_grid4c col-md-4"></div>
            </div>
            <div class="row dnnpane">
                <div runat="server" id="Eleven12" class="i_eleven_grid12 col-md-12"></div>
            </div>
        </div>
    </section>
</main>
<footer>
    <div runat="server"  id="footerlogo" class="footerlogo"></div>
    <div runat="server" id="contact" class="contact"></div>
    <div runat="server" id="social" class="social"></div>
    <div class="copyright"><dnn:COPYRIGHT ID="dnnCopyright" runat="server" CssClass="copyright" /></div>
</footer>
<script type="text/javascript" src="./assets/slick/jquery-migrate-1.2.1.min.js"></script>
<script src="./jquery.appear.js"></script>
<script src="./bootstrap.bundle.min.js"></script>
<script type="text/javascript" src="./assets/slick/slick.min.js"></script>
<script src="./gsap.min.js"></script>
<script src="./script.js"></script>
    
<%-- CSS & JS includes --%>
<!--#include file="Common/AddFilesinner.ascx"-->
</html>