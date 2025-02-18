extractQs <-  function(responses,lengthQ, nSubj){
  questions <- matrix(nrow = nSubj,ncol = (lengthQ+1))
  questions[,1] <- responses
  
  questions[,1] <- gsub('\\}',"",questions[,1])
  questions[,1] <- gsub('\\{',"",questions[,1])
  questions[,1] <- gsub('\\"',"",questions[,1])
  questions[,1] <- gsub('([.])',"",questions[,1])
  questions[,1] <- gsub('([ ])',"",questions[,1])
  questions[,1] <- gsub("(['])","",questions[,1])
  questions[,1] <- gsub(',AC:+.', "",questions[,1])
  
  string1 <- ',2:+.+.'
  string2 <- '.+.+,1:'
  string3 <- '1:'
  
  sign1 <- ","
  sign2 <- ":"
  
  for (i in 1:lengthQ) {
    i0 <- i-1
    i2 <- i+1
    questions[,i2] <- questions[,1]
    
    string1 <- gsub(paste0(sign1, i , sign2), paste0(sign1, i2 , sign2),string1)
    string2 <- gsub(paste0(sign1, i0 , sign2), paste0(sign1, i , sign2), string2)
    
    questions[,i2] <- gsub(string1,"",questions[,i2])
    
    if (i == 1) {
      questions[,i2] <- gsub(string3, "", questions[ ,i2])
    }
    
    questions[,i2] <- gsub(string2, "", questions[,i2])
    questions[,i2] <- gsub('([A-z])',"",questions[,i2])
    questions[,i2] <- gsub('([,])',"",questions[,i2])
    questions[,i2] <- gsub('([:])',"",questions[,i2])
    
  }
  
  return(questions)
}



extractQs_AC <-  function(responses, nSubj, maxItem, correctResponse){
  Q <- matrix(nrow = nSubj, ncol = 2)
  Q[,1] <- responses
  #remove everything execept response to Attention check
  Q[,1] <- gsub('\\}',"",Q[,1])
  Q[,1] <- gsub('\\{',"",Q[,1])
  Q[,1] <- gsub('\\"',"",Q[,1])
  Q[,1] <- gsub('([.])',"",Q[,1])
  Q[,1] <- gsub('([ ])',"",Q[,1])
  Q[,1] <- gsub("(['])","",Q[,1])
  Q[,1] <- gsub(paste0('.+,',maxItem,':+.'), "",Q[,1])
  Q[,1] <- gsub('([A-z])', "",Q[,1])
  Q[,1] <- gsub(',:', "",Q[,1])
  
  # check correct response
  Q[,1] <- gsub(correctResponse, "",Q[,1])
  
  # if correct response Q[,1] should now be empty
  Q[,2] <- ifelse(Q[,1]== "", yes = 0, no = 1)
  
  return(as.numeric(Q[,2]))
}