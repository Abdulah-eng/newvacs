$word = New-Object -ComObject Word.Application
$word.Visible = $false
$doc = $word.Documents.Open("C:\projects\newvacs\Week 2 HLD + CKD\HLD + CKD Guideline Summaries\CKD + HLD Integration Guideline Summary.docx")
$doc.SaveAs([ref] "C:\projects\newvacs\public\guidelines\CKD___HLD_Integration_Guideline_Summary.pdf", [ref] 17)
$doc.Close()
$word.Quit()
