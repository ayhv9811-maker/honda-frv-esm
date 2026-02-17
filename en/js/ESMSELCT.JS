/************************************************************************
 * NAME         : FDL
 * FUNCTION     : �t�H���_��񍀖ڊi�[
 * DATE(ORG)    : 2003.06.16(2003.03.10)
 ************************************************************************/
function FDL(code,model,type)                                         /*@B0.c-*/
{                                                                     /*@AV.a-*/
  this.Code =code;                                                    /*@AV.a-*/
  this.Model=model;                                                   /*@AV.a-*/
  this.Type =type;                                                    /*@B0.a-*/
}                                                                     /*@AV.a-*/
/************************************************************************
 * NAME         : FS1
 * FUNCTION     : SIE�^�C�g����񍀖ڊi�[
 * PROCESS      : SIE�^�C�g������ 1���ڃf�[�^���쐬���Ԃ��܂��B
 * INPUT        : imgID             | �^�C�g����ʃC���X�g�ԍ�
 * INPUT        : dbKey             | SIE����dBKey
 * INPUT        : title             | SIE�^�C�g��
 * RETURN       : Array             | SIE�^�C�g�����
 * DATE(ORG)    : 2002.10.16(2002.05.31)
 * REMARKS      :
 *: @01 2002.10.16  ����Q�ƃ{�^����MaRIS�Ŏg�p����C���X�g�ɕύX����B
 ************************************************************************/
function  FS1(imgID,dbKey,title)
{
  var result  = new Array;

  result.Img  =imgID;
  result.dbKey=dbKey;
  result.Title=title;

  return(result);
}
/************************************************************************
 * NAME         : FS2
 * FUNCTION     : ���f���C���[�I���^�C�g����񍀖ڊi�[
 * PROCESS      : ���f���C���[���� 1���ڃf�[�^���쐬���Ԃ��܂��B
 * INPUT        : code              | ���f���C���[�E�R�[�h
 * INPUT        : year              | ���f���C���[
 * RETURN       : Array             | ���f���C���[�I���^�C�g�����
 * DATE(ORG)    : (2002.05.31)
 * REMARKS      :
 ************************************************************************/
function FS2(code, year)
{
  var data  = new Array;
  data.Code = code;
  data.Year = year;
  return(data);
}
/************************************************************************
 * NAME         : FS3
 * FUNCTION     : SIE�I���^�C�g����񍀖ڊi�[
 * PROCESS      : SIE�I���^�C�g������ 1���ڕ����i�[���Ԃ��B
 * INPUT        : level             | �c���[��̊K�w���x���ԍ�
 * INPUT        : strFile           | �I���^�C�g����`�t�@�C����
 * INPUT        : strTitle          | �\���^�C�g��
 * RETURN       : Array             | SIE�I���^�C�g�����ڏ��
 * DATE(ORG)    : (2002.05.31)
 * REMARKS      :
 ************************************************************************/
function FS3(level, strFile, strTitle)
{
  var data    = new Array;
  data.Level  = level;
  data.File   = strFile;
  data.Title  = strTitle;
  return(data);
}
/************************************************************************
 * NAME         : FS5
 * FUNCTION     : ���b�Z�[�W��񍀖ڊi�[
 * PROCESS      : ���b�Z�[�W���� 1���ڕ����i�[���Ԃ��B
 * INPUT        : id                | ���b�Z�[�WID
 * INPUT        : text              | ���b�Z�[�W�E�e�L�X�g
 * RETURN       : Array             | ���b�Z�[�W���ڏ��
 * DATE(ORG)    : (2002.05.31)
 * REMARKS      :
 ************************************************************************/
function FS5(id,text)
{
  var data  = new Array;
  data.id   = id;
  data.Text = text;
  return(data);
}
/************************************************************************
 * NAME         : FS6
 * FUNCTION     : ����񍀖ڊi�[
 * PROCESS      : ������ 1���ڕ����i�[���Ԃ��B
 * INPUT        : code              | �T�u�W�F�N�g�E�R�[�h
 * INPUT        : name              | �T�u�W�F�N�g��
 * INPUT        : title             | ���ڑI���^�C�g��
 * RETURN       : Array             | ��荀�ڏ��
 * DATE(ORG)    : (2002.06.05)
 * REMARKS      :
 ************************************************************************/
function FS6(code,name,title)
{
  var data    = new Array;
  data.Code   = code;
  data.Name   = name;
  data.Title  = title;
  return(data);
}
/************************************************************************
 * NAME         : FI1
 * FUNCTION     : SIE���X�g�ꗗ�\��
 * PROCESS      : System/Component�őI�����ꂽ���ڂɑΉ�����SIE���X�g����
 *              : �\���v�����s���B
 * UPDATE       : doc               | �\����h�L�������g�I�u�W�F�N�g
 * INPUT        : strIndex          | �\��SIE���X�g �C���f�b�N�X��
 * RETURN       : �Ȃ�
 * DATE(ORG)    : (2002.06.05)
 * REMARKS      :
 ************************************************************************/
function FI1(doc,strIndex)
{
  doc.ESM = gESM;
  doc.ESM.ndxSel = strIndex;
  doc.location.href = "&EsmCtlPath;ESMINDEX.HTML";
}
/************************************************************************
 * NAME         : FI2
 * FUNCTION     : SIE���X�g�ꗗ�`��
 * PROCESS      : System/Component�őI�����ꂽ���ڂɑΉ�����SIE���X�g��
 *              : �\������B
 * INPUT        : �Ȃ�
 * RETURN       : �Ȃ�
 * DATE(ORG)    : 2003.06.16(2002.06.05)
 * REMARKS      :
 *: @01 2002.10.16  ����Q�ƃ{�^����MaRIS�Ŏg�p����C���X�g�ɕύX����B
 *: @B2 2003.06.16  �����G���[���A���s�ł��G���[�Ɛ���s����C���B
 ************************************************************************/
function FI2()
{
  var i;
  var data,sie;

  gESM = parent.document.ESM;
  if ((gESM.SIE.length <= 0) || (typeof(FIN) != "function")) {      /*@02.c-*/
    return;
  }

  data = FIN();
  with (document) {
    write("<div class=\"title\">&EsmResult;</div>");
    if (gESM.Abbrev != "") {
      write("<div align=\"right\" class=\"abbrev\">");
      write("<img src=\"&EsmImgPath;CTL/ABBREVIATION.PNG\" " +      /*@01.c-*/
            "title=\"&EsmSelAbbreviat;\" " +                        /*@01.a-*/
            "onclick=\"OnAbbrev();\" ondblclick=\"OnAbbrev();\"></div>");
    }
    write("<table style=\"margin-left:1em;\"><tr>");
    for (i=0; i < data.length; ++i) {
      sie = FSS(data[i]);
      if (sie == null) {
        alert("dbKey(" + data[i] + ") undefined.");
        continue;
      }
      write("<td valign=\"top\">" +
            "<img src=\"&EsmImgPath;CTL/" + sie.Img + ".PNG\"></td><td>");
      write("<a href=\"../" + sie.dbKey.substr(5,2) + "/" + sie.dbKey + ".HTML\" " +
            "target=\"EsmContents\">");
      write(sie.Title + "</a></td></tr>");
    }
    write("</tr></table></div>");
  }
}
/************************************************************************
 * NAME         : FSS
 * FUNCTION     : SIE�^�C�g���擾
 * PROCESS      : DBKEY�ɑΉ�����SIE�^�C�g�����������Ԃ��B
 *              : �����ɂ́A2���������g�p����B
 * INPUT        : dbKey             | SIE DB�L�[
 * RETURN       : String            | SIE�^�C�g��
 * INPUT(EXT)   : gESM.SIE          | SIE�^�C�g�����
 * DATE(ORG)    : 2003.06.14(2002.05.31)
 * CALL         : Array::Length
 * CALL         : Math::floor
 * REMARKS      :
 *: @02 2003.06.14  ����`�����[�v����s��Ή��ׁ̈AC��bsearch�֐����g�p�B
 ************************************************************************/
function FSS(dbKey)
{
  var nTop, nLast;
  var nMid, nHalf, nNum;
  var i = 0;

  with (gESM) {
    nNum = SIE.length;
    nTop = 0;
    nLast = nNum - 1;
    while (nTop <= nLast) {
      if ((nHalf = Math.floor(nNum / 2)) != 0) {
        nMid = nTop + ((nNum & 1)? nHalf:(nHalf - 1));
        if (SIE[nMid].dbKey == dbKey) {
          return(SIE[nMid]);
        }
        if (SIE[nMid].dbKey > dbKey) {
          nLast = nMid - 1;
          nNum  = (nNum & 1)? nHalf:(nHalf - 1);
        }
        else {
          nTop = nMid + 1;
          nNum = nHalf;
        }
      }
      else {
        if (nNum != 0) {
          if (SIE[nTop].dbKey == dbKey) {
            return(SIE[nTop]);
          }
        }
        break;
      }
    }
  }

  return(null);
}
/************************************************************************
 * NAME         : OnAbbrev
 * FUNCTION     : ����\��
 * PROCESS      : ����������͂�ʃE�B���h�E�ŕ\������B
 * INPUT        : �Ȃ�
 * RETURN       : �Ȃ�
 * UPDATE(EXT)  : gESM.Abbrev       | ���ꕶ�̓p�X��
 * DATE(ORG)    : (2002.05.31)
 * CALL         : String::substr
 * CALL         : window::open
 * REMARKS      :
 ************************************************************************/
function OnAbbrev()
{
  window.open("../" + gESM.Abbrev.substr(5,2) + "/"+ gESM.Abbrev + ".HTML",
              "abbWindow",
              "status=yes toolbar=no menubar=yes resizable=yes scrollbars=yes");
}
